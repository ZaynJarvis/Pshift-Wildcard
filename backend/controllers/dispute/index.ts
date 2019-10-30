import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { Dispute } from '../../entity/Dispute';
import { Gig } from '../../entity/Gig';
import { Milestone } from '../../entity/Milestone';
import { Project, ProjectStatus } from '../../entity/Project';
import { User } from '../../entity/User';
import { Conn } from '../../utils/connection';
import { NotFound } from '../../utils/NotFound';

export const createDispute = async (req, res, next) => {
    const { description, remark, clientId, milestoneId } = req.body;

    const connection = await Conn.getInstance();
    const milestoneRepository = connection.getRepository(Milestone);
    const mileStone: Milestone = await milestoneRepository.findOne({
        where: { id: milestoneId },
        relations: ['dispute'],
    });
    const clientRepository = connection.getRepository(User);
    const client: User = await clientRepository.findOne({
        where: { id: clientId },
        relations: ['gigs'],
    });
    const newDispute = new Dispute();
    newDispute.description = description;
    newDispute.remark = remark;
    newDispute.milestone = mileStone;
    await connection.manager.save(newDispute);
};
