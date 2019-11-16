import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { NotFound } from '../../utils/NotFound';
import { Gig } from '../../entity/Gig';
import { Project, ProjectStatus } from '../../entity/Project';
import { User } from '../../entity/User';
import { Milestone, MilestoneStatus } from '../../entity/Milestone';
import { Conn } from '../../utils/connection';

// export const getProjectByID = (req, res, next): Project => {
//     const id = req.params ? req.params.id : req;
//     const p = ProjectStore.getProject(id);
//     if (!p) {
//         next(new NotFound(`project id ${id} not found`));
//     }
//     if (res) {
//         res.send(p);
//     }
//     AppLogger.info(`project id ${id} requested.`);
//     return p;
// };

// export const createProject = (req, res, next) => {
//     const p = new Project(req.body);
//     ProjectStore.saveProject(p);
//     if (res) {
//         res.send({ message: `project ${p.id} created` });
//     }
//     AppLogger.info(`project id ${p.id} created.`);
// };

// export const updateProject = (req, res, next) => {
//     const id = req.params ? req.params.id : req;
//     const p = ProjectStore.getProject(id);
//     if (!p) {
//         next(new NotFound(`project id ${id} not found`));
//     }
//     p.update(req.body);
//     if (res) {
//         res.send({ message: `project ${p.id} updated` });
//     }
//     AppLogger.info(`project id ${p.id} updated.`);
// };

export const createProject = async (req, res, next) => {
    const { amount, gigId, freelancerId } = req.body;

    const connection = await Conn.getInstance();
    let gigRepository = connection.getRepository(Gig);
    let gig: Gig = await gigRepository.findOne({
        where: { id: gigId },
        relations: ['client']
    });
    let userRepository = connection.getRepository(User);
    let freelancer: User = await userRepository.findOne({
        where: { id: freelancerId },
        relations: ['gigs']
    });
    let newProject = new Project();
    newProject.amount = amount;
    newProject.ProjectStatus = ProjectStatus.Proposed;
    newProject.gig = gig;
    newProject.freelancer = freelancer;
    await connection.manager.save(newProject);
    res.send();
};

export const getMilestonesByProject = async (req, res, next) => {
    const projectId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    let projectRepository = connection.getRepository(Project);
    let project: Project = await projectRepository.findOne({
        where: { id: projectId },
        relations: ['milestones']
    });
    console.log(project);
    const allMilestones = project.milestones;
    if (res) {
        res.send(allMilestones);
    }
};

export const markMilestone = async (req, res, next) => {
    const projectId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    const { milestoneId, userId } = req.body;
    let milestoneRepository = connection.getRepository(Milestone);
    let milestone: Milestone = await milestoneRepository.findOne({
        where: { id: milestoneId },
        relations: ['project', 'project.freelancer']
    });
    if (!milestone) {
        next(new NotFound(`milestone id ${milestoneId} not found`));
    }
    if (userId == milestone.project.freelancer.id) {
        await connection
            .createQueryBuilder()
            .update(Milestone)
            .set({
                MilestoneStatus: MilestoneStatus.CF
            })
            .where({ id: milestoneId })
            .execute();
    } else {
        await connection
            .createQueryBuilder()
            .update(Milestone)
            .set({
                MilestoneStatus: MilestoneStatus.CC
            })
            .where({ id: milestoneId })
            .execute();
    }
    res.status(204).send();
    // if (res) {
    //     res.send(p);
    // }
    AppLogger.info(`milestone id ${milestoneId} updated from ${req.body.uid}.`);
};

export const getAllProjects = async (req, res, next) => {
    const connection = await Conn.getInstance();
    const projectRepository = connection.getRepository(Project);
    const allProjects: Project[] = await projectRepository.find({
        relations: ['gig']
    });
    if (res) {
        res.send(allProjects);
    }
};

export const getProjectByID = async (req, res, next) => {
    const projectId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    const projectRepository = connection.getRepository(Project);
    const project: Project = await projectRepository.findOne({
        where: { id: projectId },
        relations: ['gig']
    });
    if (res) {
        res.send(project);
    }
};
