import fs from 'fs';
import log4js from 'log4js';
import HTTPLogger from 'morgan';
import path from 'path';
import 'reflect-metadata';
import { getAllGigs, updateGig } from './controllers/gig';
import './utils/passport';

import { Dispute } from './entity/Dispute';
import { Gig } from './entity/Gig';
import { Milestone } from './entity/Milestone';
import { Project } from './entity/Project';
import { Transaction, TransactionStatus } from './entity/Transaction';
import { User } from './entity/User';
import { Conn } from './utils/connection';

// (async () => {
//     const connection = await Conn.getInstance();
//     // const a = new User();
//     // a.name = 'OO';
//     // a.email = 'PP';
//     // a.description = 'This is me';
//     // a.avatarUrl = '';
//     // a.setPassword('kkaxs');
//     // await connection.manager.save(a);

//     const userRepo = await connection.getRepository(User);
//     // const users = await userRepo.findOne({ relations: ['gigs'] });
//     // console.log(users);

//     // const g = new Gig();
//     // g.title = 'G';
//     // g.imageUrl = 'xxx';
//     // g.description = 'des';
//     // g.client = await userRepo.findOne();
//     // await connection.manager.save(g);
//     const gigRepo = await connection.getRepository(Gig);
//     // const gigs = await gigRepo.find({ relations: ['projects'] });
//     // console.log(gigs);

//     // const p = new Project();
//     // p.amount = 3.0;
//     // p.freelancer = await userRepo.findOne();
//     // p.gig = await gigRepo.findOne();

//     // await connection.manager.save(p);
//     // const proRepo = await connection.getRepository(Project);
//     // const pro = await proRepo.findOne({ relations: ['milestones'] });
//     // console.log(pro);

//     // const m = new Milestone();
//     // m.deliverables = 'del2';
//     // m.description = 'dec2';
//     // m.project = await proRepo.findOne();

//     // await connection.manager.save(m);

//     const mileRepo = await connection.getRepository(Milestone);
//     // const mile = await mileRepo.findOne({ relations: ['disputes'] });
//     // console.log(mile);

//     // const d = new Dispute();
//     // d.description = 'des';
//     // d.milestone = mile;
//     // d.remark = 'nothing';
//     // await connection.manager.save(d);

//     const p = new Project();
//     p.amount = 4.0;
//     p.freelancer = await userRepo.findOne();
//     p.gig = await gigRepo.findOne();
//     p.milestones = [
//         mileRepo.create({
//             deliverables: 'de3',
//             description: 'ds3',
//         }),
//         mileRepo.create({
//             deliverables: 'de4',
//             description: 'ds4',
//         }),
//     ];
//     await connection.manager.save(p);

//     const proRepo = await connection.getRepository(Project);
//     const pro = await proRepo.find({ relations: ['milestones'] });
//     console.log(pro[1]);

//     await Conn.closeConnection();
// })();

HTTPLogger.token('user', (req: any) => {
    if (req.user) {
        return `${req.user.name}[${req.user.email}]`;
    }
    return '';
});

HTTPLogger.token('pmethod', (req: any) => {
    return req.method.padEnd(4);
});

HTTPLogger.token('purl', (req: any) => {
    return req.originalUrl.padEnd(80);
});

log4js.configure({
    appenders: {
        wildcard: { type: 'file', filename: path.resolve('logs', 'temp.log') },
    },
    categories: { default: { appenders: ['wildcard'], level: 'debug' } },
});

// create logs, knowhow-demo, temp folder
const folders = ['./logs', './temp'];
folders.forEach(folder => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
}); // const data = getAllGigs(null, null, null);

// data.filter(d => Math.random() < 0.3).forEach(d => {
//     updateGig({ params: { id: d.id }, body: { uid: 'Zayn', like: ['Zayn'] } }, null, null);
// });

// data.filter(d => Math.random() < 0.3).forEach(d => {
//     updateGig({ params: { id: d.id }, body: { uid: 'James', like: ['James'] } }, null, null);
// });

// data.filter(d => Math.random() < 0.2).forEach(d => {
//     updateGig({ params: { id: d.id }, body: { uid: 'Kun', like: ['Kun'] } }, null, null);
// });

// clearOldFilesInDir('./logs', 0.5, null);
