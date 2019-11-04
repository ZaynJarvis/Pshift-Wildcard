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

export const getUserByID = async (req, res, next) => {
    const userId = req.params ? req.params.id : req;

    const connection = await Conn.getInstance();
    let userRepository = connection.getRepository(User);
    let user: User = await userRepository.findOne({
        where: { id: userId },
        relations: ['gigs', 'projects']
    });
    console.log(user);
    if (res) {
        res.send(user);
    }
};

export const createUser = async (req, res, next) => {
    const { name, email, description, avatarUrl, password } = req.body;
    console.log(name);
    console.log(email);
    console.log(description);
    console.log(avatarUrl);
    console.log(password);
    const connection = await Conn.getInstance();

    let newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.description = description;
    newUser.avatarUrl = avatarUrl;
    newUser.setPassword(password);
    await connection.manager.save(newUser);
    res.send();
    // const user = new User(req.body);
    // try {
    //     const existedUser = UserStore.getUser(user.email);
    //     if (existedUser) {
    //         res.status(400).send({
    //             message: `User (${user.email}) already existed, try to login.`,
    //         });
    //         return;
    //     }
    // } catch (err) {
    //     next(err);
    //     return;
    // }
    // try {
    //     UserStore.saveUser(user);
    //     res.status(200).send({
    //         message: 'user register success',
    //         id: user.id,
    //     });
    // } catch (err) {
    //     next(err);
    // }
};

// export const updateProfile = async (req, res, next) => {
//     const userId = req.params ? req.params.id : req;

//     const connection = await Conn.getInstance();
//     let userRepository = connection.userRepository(Gig);
//     let user: User = await userRepository.findOne({
//         where: { id: userId }
//     });
//     if (!user) {
//         next(new NotFound(`user id ${userId} not found`));
//     }
//     const { title, imageUrl, description, active } = req.body;
//     await connection
//         .createQueryBuilder()
//         .update(Gig)
//         .set({
//             title: title,
//             imageUrl: imageUrl,
//             description: description,
//             active: active
//         })
//         .where({ id: gigId })
//         .execute();
//     res.status(204).send();
//     // if (res) {
//     //     res.send(p);
//     // }
//     AppLogger.info(`gig id ${gigId} updated from ${req.body.uid}.`);
// };

export const getAllUsers = async (req, res, next) => {
    const connection = await Conn.getInstance();
    console.log('got connection');
    let userRepository = connection.getRepository(User);
    console.log('got userRepo');
    let allUsers: User[] = await userRepository.find({
        relations: ['transactions']
    });
    console.log(allUsers);
    if (res) {
        res.send(allUsers);
    } else {
        res.end();
    }
};
