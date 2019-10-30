import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { NotFound } from '../../utils/NotFound';
import { Gig } from '../../entity/Gig';
import { Project, ProjectStatus } from '../../entity/Project';
import { Dispute } from '../../entity/Dispute';
import { Milestone } from '../../entity/Milestone';
import { User } from '../../entity/User';
import { Conn } from '../../utils/connection';

export const createDispute = async (req, res, next) => {
    const { description, remark, clientId, milestoneId } = req.body;

    const connection = await Conn.getInstance();
    let milestoneRepository = connection.getRepository(Milestone);
    let mileStone: Milestone = await milestoneRepository.findOne({
        where: { id: milestoneId },
        relations: ['dispute']
    });
    let clientRepository = connection.getRepository(User);
    let client: User = await clientRepository.findOne({
        where: { id: clientId },
        relations: ['gigs']
    });
    let newDispute = new Dispute();
    newDispute.description = description;
    newDispute.remark = remark;
    newDispute.milestone = mileStone;
    newDispute.client = client;
    await connection.manager.save(newDispute);
};
