import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { Insurance, InsuranceStore } from '../../models';
import { NotFound } from '../../utils/NotFound';

export const getAllInsurances = (req, res, next) => {
    if (res) {
        res.send(InsuranceStore.d);
    }
    return InsuranceStore.d;
};

export const getInsuranceByID = (req, res, next): Insurance => {
    const id = req.params ? req.params.id : req;
    const i = InsuranceStore.getInsurance(id);
    if (!i) {
        next(new NotFound(`insurance id ${id} not found`));
    }
    if (res) {
        res.send(i);
    }
    AppLogger.info(`insurance id ${id} requested.`);
    return i;
};

export const createInsurance = (req, res, next) => {
    const i = new Insurance(req.body);
    InsuranceStore.saveInsurance(i);
    if (res) {
        res.send({ message: `insurance ${i.id} created` });
    }
    AppLogger.info(`insurance id ${i.id} created.`);
};

export const updateInsurance = (req, res, next) => {
    const id = req.params ? req.params.id : req;
    const i = InsuranceStore.getInsurance(id);
    if (!i) {
        next(new NotFound(`insurance id ${id} not found`));
    }
    i.update(req.body);
    if (res) {
        res.send({ message: `insurance ${i.id} updated` });
    }
    AppLogger.info(`insurance id ${i.id} updated.`);
};
