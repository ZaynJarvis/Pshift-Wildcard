import { Router } from 'express';
import passport from 'passport';

const router = Router();

// api connection test
router.all('/hello', (req, res) => res.json({ text: 'Hello World!' }));

// authentication unsecured route
import { login, register } from '../controllers/auth';
router.post('/register', register);
router.post('/login', login);

// route lock, comment out when authorization is not required
router.use(passport.authenticate('jwt', { session: false }));

// profile
import { profile } from '../controllers';
router.get('/profile', profile);

// project
import {
    createProject,
    getMilestonesByProject,
    markMilestone,
    getAllProjects,
    getProjectByID,
    updateProject
} from '../controllers';
router.post('/projects', createProject);
router.get('/projects/:id/milestones', getMilestonesByProject);
router.put('/projects/:id/markMilestone', markMilestone);
router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectByID);
router.put('/projects/:id', updateProject);

//milestone
import { createMilestone } from '../controllers/milestone';
router.post('/milestones', createMilestone);

// gig
import {
    createGig,
    getAllGigs,
    getGigByID,
    // getRecomGigs,
    updateGig,
    acceptProject,
    deleteGig
} from '../controllers';

router.post('/gigs', createGig);
router.get('/gigs', getAllGigs);
router.get('/gigs/:id', getGigByID);
// router.get('/gigs/recommend/:id', getRecomGigs);
router.put('/gigs/:id', updateGig);
router.put('/gigs/:id/accept', acceptProject);
router.put('/gigs/:id/delete', deleteGig);

// transaction
import {
    initiateTransaction,
    getTransactionByID,
    getAllTransactions,
    //  updateTransaction
    } from '../controllers'; // prettier-ignore
// router.post('/transactions', createTransaction);
router.get('/transactions', getAllTransactions);
router.get('/transactions/:id', getTransactionByID);
router.post('/transactions', initiateTransaction);
// router.put('/transactions/:id', updateTransaction);

// insurance
import { createInsurance, getAllInsurances, getInsuranceByID, updateInsurance } from '../controllers'; // prettier-ignore
router.post('/insurances', createInsurance);
router.get('/insurances', getAllInsurances);
router.get('/insurances/:id', getInsuranceByID);
router.put('/insurances/:id', updateInsurance);

//user
import {
    createUser,
    getAllUsers,
    getGigsByUser,
    getProjectsByUser,
    getTransactionsByUser
} from '../controllers/user';
router.get('/users/:id/gigs', getGigsByUser);
router.get('/users/:id/projects', getProjectsByUser);
router.get('/users/:id/transactions', getTransactionsByUser);
router.post('/users', createUser);
router.get('/users', getAllUsers);

//dispute
import { createDispute } from '../controllers/dispute';
router.post('/diputes', createDispute);

export default router;
