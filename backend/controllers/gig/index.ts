import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { Gig, GigStore } from '../../models';
import { NotFound } from '../../utils/NotFound';
import { getRecommendation, likeProject, unlikeProject } from '../../utils/recEngine';

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
        res.send(p);
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
    if (p.like.includes(req.body.uid)) {
        likeProject(req.body.uid, id);
    } else {
        unlikeProject(req.body.uid, id);
    }
    if (res) {
        res.send(p);
    }
    AppLogger.info(`gig id ${p.id} updated from ${req.body.uid}.`);
};

export const getRecomGigs = async (req, res, next) => {
    const id = req.params ? req.params.id : req;
    const recs = (await getRecommendation(id)) || [];
    console.log(recs);
    const p = recs.map((proj: string) => GigStore.getGig(proj)).filter(i => i);
    if (res) {
        res.send(p);
    }
    AppLogger.info(`gig rec from ${id} requested.`);
    return p;
};
