import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { Gig, GigStore } from '../../models';
import { NotFound } from '../../utils/NotFound';

export const getAllGigs = (req, res, next) => {
    if (res) {
        res.send(GigStore.d);
    }
    return GigStore.d;
};

export const getGigByID = (req, res, next): Gig => {
    const id = req.params ? req.params.id : req;
    const p = GigStore.getGig(id);
    if (!p) {
        next(new NotFound(`gig id ${id} not found`));
    }
    if (res) {
        res.send(p);
    }
    AppLogger.info(`gig id ${id} requested.`);
    return p;
};

export const createGig = (req, res, next) => {
    const p = new Gig(req.body);
    GigStore.saveProject(p);
    if (res) {
        res.send({ message: `gig ${p.id} created` });
    }
    AppLogger.info(`gig id ${p.id} created.`);
};

export const updateGig = (req, res, next) => {
    const id = req.params ? req.params.id : req;
    const p = GigStore.getGig(id);
    if (!p) {
        next(new NotFound(`gig id ${id} not found`));
    }
    p.update(req.body);
    if (res) {
        res.send({ message: `gig ${p.id} updated` });
    }
    AppLogger.info(`gig id ${p.id} updated.`);
};
