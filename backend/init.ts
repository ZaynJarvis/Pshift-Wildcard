import fs from 'fs';
import log4js from 'log4js';
import HTTPLogger from 'morgan';
import path from 'path';
import './utils/passport';

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
        narusbackend: { type: 'file', filename: path.resolve('logs', 'temp.log') },
        addKnowledge: { type: 'file', filename: path.resolve('logs', 'temp.log') },
        editKnowledge: { type: 'file', filename: path.resolve('logs', 'temp.log') },
        getKnowledge: { type: 'file', filename: path.resolve('logs', 'temp.log') },
        addCategory: { type: 'file', filename: path.resolve('logs', 'temp.log') },
        deleteKnowledge: { type: 'file', filename: path.resolve('logs', 'temp.log') },
        downloadFileKnowledge: { type: 'file', filename: path.resolve('logs', 'temp.log') },
        getCategoryInfo: { type: 'file', filename: path.resolve('logs', 'temp.log') },
        nextScroll: { type: 'file', filename: path.resolve('logs', 'temp.log') },
    },
    categories: { default: { appenders: ['narusbackend'], level: 'debug' } },
});

// create logs, knowhow-demo, temp folder
const folders = ['./logs', './temp'];
folders.forEach(folder => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
});

// clearOldFilesInDir('./logs', 0.5, null);
