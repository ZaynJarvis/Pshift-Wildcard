import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { Transaction, TransactionStatus } from '../../entity/Transaction';
import { NotFound } from '../../utils/NotFound';
import { Conn } from '../../utils/connection';
import { User } from '../../entity/User';

// export const getAllTransactions = (req, res, next) => {
//     if (res) {
//         res.send(TransactionStore.d);
//     }
//     return TransactionStore.d;
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

export const getTransactionByID = async (req, res, next) => {
    const transactionId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    let transactionRepository = connection.getRepository(Transaction);
    let transaction: Transaction = await transactionRepository.findOne({
        where: { id: transactionId }
    });
    console.log(transaction);
    if (res) {
        res.send(transaction);
    }
};

export const initiateTransaction = async (req, res, next) => {
    const { amount, type, description, clientId, freelancerId } = req.body;

    const connection = await Conn.getInstance();
    let userRepository = connection.getRepository(User);
    let client: User = await userRepository.findOne({
        where: { id: clientId }
    });
    let freelancer: User = await userRepository.findOne({
        where: { id: freelancerId }
    });
    let newTransaction = new Transaction();
    newTransaction.amount = amount;
    newTransaction.type = type;
    newTransaction.description = description;
    newTransaction.client = client;
    newTransaction.freelancer = freelancer;
    await connection.manager.save(newTransaction);
    res.send();
};

export const getAllTransactions = async (req, res, next) => {
    const connection = await Conn.getInstance();
    const transactionRepository = connection.getRepository(Transaction);
    const allTransactions: Transaction[] = await transactionRepository.find({
        relations: ['client']
    });
    res.send(allTransactions);
};
