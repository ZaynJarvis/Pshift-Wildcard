import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { Transaction, TransactionStore } from '../../models';
import { NotFound } from '../../utils/NotFound';

export const getAllTransactions = (req, res, next) => {
    if (res) {
        res.send(TransactionStore.d);
    }
    return TransactionStore.d;
};

export const getTransactionByID = (req, res, next): Transaction => {
    const id = req.params ? req.params.id : req;
    const t = TransactionStore.getTransaction(id);
    if (!t) {
        next(new NotFound(`transaction id ${id} not found`));
    }
    if (res) {
        res.send(t);
    }
    AppLogger.info(`transaction id ${id} requested.`);
    return t;
};

export const createTransaction = (req, res, next) => {
    const t = new Transaction(req.body);
    TransactionStore.saveTransaction(t);
    if (res) {
        res.send({ message: `transaction ${t.id} created` });
    }
    AppLogger.info(`transaction id ${t.id} created.`);
};

export const updateTransaction = (req, res, next) => {
    const id = req.params ? req.params.id : req;
    const t = TransactionStore.getTransaction(id);
    if (!t) {
        next(new NotFound(`transaction id ${id} not found`));
    }
    t.update(req.body);
    if (res) {
        res.send({ message: `transaction ${t.id} updated` });
    }
    AppLogger.info(`transaction id ${t.id} updated.`);
};
