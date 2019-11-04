import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { Gig } from '../../entity/Gig';
import { Project, ProjectStatus } from '../../entity/Project';
import { User } from '../../entity/User';
import { Conn } from '../../utils/connection';
import { NotFound } from '../../utils/NotFound';
import {
    getRecommendation,
    likeProject,
    unlikeProject
} from '../../utils/recEngine';

// export const getGigByID = (req, res, next): Gig => {
//     const id = req.params ? req.params.id : req;
//     const p = GigStore.getGig(id);
//     if (!p) {
//         next(new NotFound(`gig id ${id} not found`));
//     }
//     if (res) {
//         res.send(p);
//     }
//     AppLogger.info(`gig id ${id} requested.`);
//     return p;
// };

// export const updateGig = (req, res, next) => {
//     const id = req.params ? req.params.id : req;
//     const p = GigStore.getGig(id);
//     if (!p) {
//         next(new NotFound(`gig id ${id} not found`));
//     }
//     p.update(req.body);
//     if (p.like.includes(req.body.uid)) {
//         likeProject(req.body.uid, id);
//     } else {
//         unlikeProject(req.body.uid, id);
//     }
//     if (res) {
//         res.send(p);
//     }
//     AppLogger.info(`gig id ${p.id} updated from ${req.body.uid}.`);
// };

// export const getRecomGigs = async (req, res, next) => {
//     const id = req.params ? req.params.id : req;
//     const recs = (await getRecommendation(id)) || [];
//     console.log(recs);
//     const p = recs.map((proj: string) => GigStore.getGig(proj)).filter(i => i);
//     if (res) {
//         res.send(p);
//     }
//     AppLogger.info(`gig rec from ${id} requested.`);
//     return p;
// };

export const getAllGigs = async (req, res, next) => {
    const connection = await Conn.getInstance();
    const gigRepository = connection.getRepository(Gig);
    const allGigs: Gig[] = await gigRepository.find({
        where: { active: true }
    });
    if (res) {
        res.send(allGigs);
    }
};

export const createGig = async (req, res, next) => {
    const { title, imageUrl, description, userId } = req.body;

    const connection = await Conn.getInstance();
    console.log('got connection instance');
    const userRepository = connection.getRepository(User);
    const user: User = await userRepository.findOne({
        where: { id: userId },
        relations: ['gigs']
    });
    console.log(user);
    const newGig = new Gig();
    newGig.title = title;
    newGig.imageUrl = imageUrl;
    newGig.description = description;
    newGig.client = user;
    newGig.active = true;
    console.log(newGig.active);
    await connection.manager.save(newGig);
    res.send();
};

export const updateGig = async (req, res, next) => {
    const gigId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    const gigRepository = connection.getRepository(Gig);
    const gig: Gig = await gigRepository.findOne({
        where: { id: gigId },
        relations: ['client']
    });
    if (!gig) {
        next(new NotFound(`gig id ${gigId} not found`));
    }
    const { title, imageUrl, description, active } = req.body;
    await connection
        .createQueryBuilder()
        .update(Gig)
        .set({
            title: title,
            imageUrl: imageUrl,
            description: description,
            active: active
        })
        .where({ id: gigId })
        .execute();
    res.status(204).send();
    // if (res) {
    //     res.send(p);
    // }
    AppLogger.info(`gig id ${gigId} updated from ${req.body.uid}.`);
};

export const deleteGig = async (req, res, next) => {
    const gigId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    const gigRepository = connection.getRepository(Gig);
    const gig: Gig = await gigRepository.findOne({
        where: { id: gigId },
        relations: ['client']
    });
    if (!gig) {
        next(new NotFound(`gig id ${gigId} not found`));
    }
    await connection
        .createQueryBuilder()
        .update(Gig)
        .set({
            active: false
        })
        .where({ id: gigId })
        .execute();
    res.status(204).send();
    // if (res) {
    //     res.send(p);
    // }
    AppLogger.info(`gig id ${gigId} updated from ${req.body.uid}.`);
};

export const acceptProject = async (req, res, next) => {
    const gigId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    const gigRepository = connection.getRepository(Gig);
    const gig: Gig = await gigRepository.findOne({
        where: { id: gigId },
        relations: ['projects']
    });
    if (!gig) {
        next(new NotFound(`gig id ${gigId} not found`));
    }
    const { projectId } = req.body;
    for (let i = 0; i < gig.projects.length; i++) {
        const currentProject = gig.projects[i];
        if (currentProject.id == projectId) {
            await connection
                .createQueryBuilder()
                .update(Project)
                .set({
                    ProjectStatus: ProjectStatus.Accepted
                })
                .where({ id: currentProject.id })
                .execute();
        } else {
            await connection
                .createQueryBuilder()
                .update(Project)
                .set({
                    ProjectStatus: ProjectStatus.Rejected
                })
                .where({ id: currentProject.id })
                .execute();
        }
    }
    res.status(204).send();
    // if (res) {
    //     res.send(p);
    // }
    AppLogger.info(`gig id ${gigId} updated from ${req.body.uid}.`);
};
