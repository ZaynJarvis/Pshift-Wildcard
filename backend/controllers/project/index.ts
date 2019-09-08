import log4js from 'log4js';
const AppLogger = log4js.getLogger('getKnowledge');
import { Project, ProjectStore } from '../../models';
import { NotFound } from '../../utils/NotFound';

export const getAllProjects = (req, res, next) => {
    if (res) {
        res.send(ProjectStore.d);
    }
    return ProjectStore.d;
};

export const getProjectByID = (req, res, next): Project => {
    const id = req.params ? req.params.id : req;
    const p = ProjectStore.getProject(id);
    if (!p) {
        next(new NotFound(`project id ${id} not found`));
    }
    if (res) {
        res.send(p);
    }
    AppLogger.info(`project id ${id} requested.`);
    return p;
};

export const createProject = (req, res, next) => {
    const p = new Project(req.body);
    ProjectStore.saveProject(p);
    if (res) {
        res.send({ message: `project ${p.id} created` });
    }
    AppLogger.info(`project id ${p.id} created.`);
};

export const updateProject = (req, res, next) => {
    const id = req.params ? req.params.id : req;
    const p = ProjectStore.getProject(id);
    if (!p) {
        next(new NotFound(`project id ${id} not found`));
    }
    p.update(req.body);
    if (res) {
        res.send({ message: `project ${p.id} updated` });
    }
    AppLogger.info(`project id ${p.id} updated.`);
};
