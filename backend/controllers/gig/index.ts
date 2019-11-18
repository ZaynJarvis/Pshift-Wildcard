import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { Gig } from '../../entity/Gig';
import { Project, ProjectStatus } from '../../entity/Project';
import { User } from '../../entity/User';
import { Conn } from '../../utils/connection';
import { NotFound } from '../../utils/NotFound';
import { getRecommendation, likeProject, unlikeProject } from '../../utils/recEngine';

export const getRecomGigs = async (req, res, next) => {
    const recs = (await getRecommendation(req.user.id)) || [];
    const connection = await Conn.getInstance();
    const gigRepository = connection.getRepository(Gig);
    if (recs.length > 0) {
        const p = await gigRepository.findOne({
            where: { active: true, id: recs[0] },
            relations: ['projects'],
        });
        res.send(p);
    } else {
        res.send();
    }
    AppLogger.info(`gig rec from ${req.user.id} requested.`);
};

export const getAllGigs = async (req, res, next) => {
    const connection = await Conn.getInstance();
    const gigRepository = connection.getRepository(Gig);
    const allGigs: any = await gigRepository.find({
        where: { active: true },
        relations: ['projects', 'like'],
    });
    const result = allGigs.map(g => {
        if (g.like.map(u => u.id).includes(req.user.id)) {
            g.like = true;
        } else {
            g.like = false;
        }
        return g;
    });
    res.send(result);
};

export const getGigByID = async (req, res, next) => {
    const gigId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    const gigRepository = connection.getRepository(Gig);
    const gig: any = await gigRepository.findOne({
        where: { active: true, id: gigId },
        relations: ['projects', 'like'],
    });
    if (gig.like.map(u => u.id).includes(req.user.id)) {
        gig.like = true;
    } else {
        gig.like = false;
    }
    res.send(gig);
};

export const createGig = async (req, res, next) => {
    const { title, imageUrl, description, userId } = req.body;

    const connection = await Conn.getInstance();
    const userRepository = connection.getRepository(User);
    const user: User = await userRepository.findOne({
        where: { id: userId },
        relations: ['gigs'],
    });
    const newGig = new Gig();
    newGig.title = title;
    newGig.imageUrl = imageUrl;
    newGig.description = description;
    newGig.client = user;
    newGig.active = true;
    await connection.manager.save(newGig);
    res.send();
};

// in this request update like will receive a user id.
export const updateGig = async (req, res, next) => {
    const gigId = req.params.id;

    const connection = await Conn.getInstance();
    const gigRepository = connection.getRepository(Gig);
    const gig: any = await gigRepository.findOne({
        where: { id: gigId },
        relations: ['client', 'like'],
    });

    if (!gig) {
        next(new NotFound(`gig id ${gigId} not found`));
    }
    const { like } = req.body;
    const userRepository = connection.getRepository(User);
    const usr: User = await userRepository.findOne({
        where: { id: req.user.id },
    });

    if (like) {
        gig.like = [...gig.like, usr];
        likeProject(usr.id, gigId);
    } else {
        gig.like = gig.like.filter(u => u.id !== usr.id);
        unlikeProject(usr.id, gigId);
    }

    await connection.manager.save(gig);

    gig.like = like;
    res.send(gig);
    AppLogger.info(`gig id ${gigId} updated from ${req.user.id}.`);
};

export const deleteGig = async (req, res, next) => {
    const gigId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    const gigRepository = connection.getRepository(Gig);
    const gig: Gig = await gigRepository.findOne({
        where: { id: gigId },
        relations: ['client'],
    });
    if (!gig) {
        next(new NotFound(`gig id ${gigId} not found`));
    }
    await connection
        .createQueryBuilder()
        .update(Gig)
        .set({
            active: false,
        })
        .where({ id: gigId })
        .execute();
    res.status(204).send();
    AppLogger.info(`gig id ${gigId} updated from ${req.body.uid}.`);
};

export const acceptProject = async (req, res, next) => {
    const gigId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    const gigRepository = connection.getRepository(Gig);
    const gig: Gig = await gigRepository.findOne({
        where: { id: gigId },
        relations: ['projects'],
    });
    if (!gig) {
        next(new NotFound(`gig id ${gigId} not found`));
    }
    const { projectId } = req.body;
    for (const currentProject of gig.projects) {
        if (currentProject.id === projectId) {
            await connection
                .createQueryBuilder()
                .update(Project)
                .set({
                    ProjectStatus: ProjectStatus.Accepted,
                })
                .where({ id: currentProject.id })
                .execute();
        } else {
            await connection
                .createQueryBuilder()
                .update(Project)
                .set({
                    ProjectStatus: ProjectStatus.Rejected,
                })
                .where({ id: currentProject.id })
                .execute();
        }
    }
    res.status(204).send();
    AppLogger.info(`gig id ${gigId} updated from ${req.body.uid}.`);
};
