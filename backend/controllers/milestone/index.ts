import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { NotFound } from '../../utils/NotFound';
import { Gig } from '../../entity/Gig';
import { Project, ProjectStatus } from '../../entity/Project';
import { User } from '../../entity/User';
import { Milestone, MilestoneStatus } from '../../entity/Milestone';
import { Conn } from '../../utils/connection';

export const createMilestone = async (req, res, next) => {
    const { description, deliverables, projectId } = req.body;
    const connection = await Conn.getInstance();
    let projectRepository = connection.getRepository(Project);
    let project: Project = await projectRepository.findOne({
        where: { id: projectId }
    });
    let newMilestone = new Milestone();
    newMilestone.description = description;
    newMilestone.deliverables = deliverables;
    newMilestone.project = project;
    await connection.manager.save(newMilestone);
    res.send();
};
