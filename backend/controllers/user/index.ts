import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { Gig, GigStore } from '../../models';
import { NotFound } from '../../utils/NotFound';
import { Conn } from '../../utils/connection';
import { User } from '../../entity/User';
import { Transaction } from '../../entity/Transaction';

// export const getAllUsers = (req, res, next) => {
//     if (res) {
//         res.send(UserStore.d);
//     }
//     return UserStore.d;
// };

// export const getTransactionByID = (req, res, next): Transaction => {
//     const id = req.params ? req.params.id : req;
//     const t = TransactionStore.getTransaction(id);
//     if (!t) {
//         next(new NotFound(`transaction id ${id} not found`));
//     }
//     if (res) {
//         res.send(t);
//     }
//     AppLogger.info(`transaction id ${id} requested.`);
//     return t;
// };

// export const createTransaction = (req, res, next) => {
//     const t = new Transaction(req.body);
//     TransactionStore.saveTransaction(t);
//     if (res) {
//         res.send({ message: `transaction ${t.id} created` });
//     }
//     AppLogger.info(`transaction id ${t.id} created.`);
// };

// export const updateTransaction = (req, res, next) => {
//     const id = req.params ? req.params.id : req;
//     const t = TransactionStore.getTransaction(id);
//     if (!t) {
//         next(new NotFound(`transaction id ${id} not found`));
//     }
//     t.update(req.body);
//     if (res) {
//         res.send({ message: `transaction ${t.id} updated` });
//     }
//     AppLogger.info(`transaction id ${t.id} updated.`);
// };

//Get all active gigs of a user
export const getGigsByUser = async (req, res, next) => {
    const userId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    let userRepository = connection.getRepository(User);
    let user: User = await userRepository.findOne({
        where: { id: userId },
        relations: ['gigs']
    });
    console.log(user);
    const allGigs = user.gigs.filter(x => x.active);
    if (res) {
        res.send(allGigs);
    }
};

export const getProjectsByUser = async (req, res, next) => {
    const userId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    let userRepository = connection.getRepository(User);
    let user: User = await userRepository.findOne({
        where: { id: userId },
        relations: ['projects']
    });
    console.log(user);
    const allProjects = user.projects;
    if (res) {
        res.send(allProjects);
    }
};

export const getTransactionsByUser = async (req, res, next) => {
    const userId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    let userRepository = connection.getRepository(User);
    let user: User = await userRepository.findOne({
        where: { id: userId },
        relations: ['transactions']
    });
    console.log(user);
    const allTransactions = user.transactions;
    if (res) {
        res.send(allTransactions);
    }
};
