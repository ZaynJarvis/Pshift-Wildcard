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
// router.use(passport.authenticate('jwt', { session: false }));

// profile
// router.get('/profile', profile);

// project
import { createProject, getAllProjects, getProjectByID, updateProject } from '../controllers';
router.post('/projects', createProject);
router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectByID);
router.put('/projects/:id', updateProject);

// transaction
import { createTransaction, getAllTransactions, getTransactionByID, updateTransaction } from '../controllers'; // prettier-ignore
router.post('/transactions', createTransaction);
router.get('/transactions', getAllTransactions);
router.get('/transactions/:id', getTransactionByID);
router.put('/transactions/:id', updateTransaction);

// insurance
import { createInsurance, getAllInsurances, getInsuranceByID, updateInsurance } from '../controllers'; // prettier-ignore
router.post('/insurances', createInsurance);
router.get('/insurances', getAllInsurances);
router.get('/insurances/:id', getInsuranceByID);
router.put('/insurances/:id', updateInsurance);

export default router;
