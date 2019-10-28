import fs from 'fs';
import log4js from 'log4js';
import HTTPLogger from 'morgan';
import path from 'path';
import 'reflect-metadata';
import { getAllGigs, updateGig } from './controllers/gig';
import './utils/passport';

import { createConnection } from 'typeorm';
import { Transaction, TransactionStatus } from './entity/Transaction';
import { User } from './entity/User';

// tslint:disable
createConnection()
    .then(async connection => {
        console.log('Inserting a new user into the database...');
        const a = new User();
        a.name = 'LL';
        a.email = 'ZZ';
        a.setPassword('kk');
        const b = new User();
        b.name = 'OO';
        b.email = 'PP';
        b.setPassword('kkaxs');

        await connection.manager.save(a);
        await connection.manager.save(b);
        const t = new Transaction();
        t.type = 'a';
        t.description = 'b';
        t.transactionStatus = TransactionStatus.Pending;
        t.amount = 33.5;
        t.client = a;
        t.freelancer = b;

        await connection.manager.save(t);

        console.log('Saved a new user with id: ' + t.id);

        console.log('Loading ts from the database...');
        const ts = await connection.manager.find(Transaction);
        console.log('Loaded ts: ', ts);
    })
    .catch(error => console.log(error));
// tslint:enable

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
