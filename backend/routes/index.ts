import { Router } from 'express';
import passport from 'passport';

const router = Router();

// api connection test
router.all('/hello', (req, res) => res.json({ text: 'Hello World!' }));

// authentication unsecured route
import { login, profile, register } from '../controllers/auth';
router.post('/register', register);
router.post('/login', login);

// route lock, comment out when authorization is not required
router.use(passport.authenticate('jwt', { session: false }));

// profile
router.get('/profile', profile);

// project
import {
    createProject,
    getAllProjects,
    getMilestonesByProject,
    getProjectByID,
    markMilestone,
    updateProject,
} from '../controllers';
router.post('/projects', createProject);
router.get('/projects/:id/milestones', getMilestonesByProject);
router.put('/projects/:id/markMilestone', markMilestone);
router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectByID);
router.put('/projects/:id', updateProject);

// milestone
import { createMilestone } from '../controllers/milestone';
router.post('/milestones', createMilestone);

// gig
import {
    acceptProject,
    createGig,
    deleteGig,
    getAllGigs,
    getGigByID,
    getRecomGigs,
    updateGig,
} from '../controllers';

router.post('/gigs', createGig);
router.get('/gigs', getAllGigs);
router.get('/gigs/recommend', getRecomGigs);
router.get('/gigs/:id', getGigByID);
router.put('/gigs/:id', updateGig);
router.put('/gigs/:id/accept', acceptProject);
router.put('/gigs/:id/delete', deleteGig);

// transaction
import {
    getAllTransactions,
    getTransactionByID,
    initiateTransaction,
} from '../controllers'; // prettier-ignore
router.get('/transactions', getAllTransactions);
router.get('/transactions/:id', getTransactionByID);
router.post('/transactions', initiateTransaction);

// insurance
import {
    createInsurance,
    getAllInsurances,
    getInsuranceByID,
    updateInsurance,
} from '../controllers';
router.post('/insurances', createInsurance);
router.get('/insurances', getAllInsurances);
router.get('/insurances/:id', getInsuranceByID);
router.put('/insurances/:id', updateInsurance);

// user
import {
    createUser,
    getAllUsers,
    getGigsByUser,
    getProjectsByUser,
    getTransactionsByUser,
} from '../controllers/user';
router.get('/users/:id/gigs', getGigsByUser);
router.get('/users/:id/projects', getProjectsByUser);
router.get('/users/:id/transactions', getTransactionsByUser);
router.post('/users', createUser);
router.get('/users', getAllUsers);

// dispute
import { createDispute } from '../controllers/dispute';
router.post('/diputes', createDispute);

export default router;
