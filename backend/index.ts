/* eslint-disable no-sync */
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import log4js from 'log4js';
import HTTPLogger from 'morgan';
import passport from 'passport';
import path from 'path';
import './init';
import routesApi from './routes';

const app = express();
const AppLogger = log4js.getLogger('wildcard');
const port = 3000;
const httpLog = fs.createWriteStream(path.join(__dirname, 'http.log'), { flags: 'a' });
const loggerFormat =
    ':date[iso] :: :pmethod :purl :: [:status] res-length: :res[content-length]\t res-time :response-time ms :: :user';

app.use(cookieParser());
app.use(passport.initialize());
app.use(HTTPLogger('dev'));
app.use(HTTPLogger(loggerFormat, { stream: httpLog }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));

app.use('/api', routesApi);

/* eslint-disable no-unused-vars */
// error handlers
// catch 404
app.all('*', (req, res, next) => {
    res.status(405).json({ message: 'Method not allowed' });
});

// development error handler
app.use((err, req, res, next) => {
    if (app.get('env') === 'development') {
        const { message, stack } = err;
        res.status(err.status || 500).json({ ...err, message, stack });
    } else {
        next(err);
    }
});

// [SH] Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            message: err.message,
        });
    } else if (err.name === 'BadRequest') {
        res.status(400).json({
            message: err.message,
        });
    } else {
        next(err);
    }
});

// server error handler
app.use((err, req, res, next) => {
    const error: any = { message: err.message || 'Undefined Error' };
    res.status(err.status || 500).send(error);
});

module.exports = app;

if (!module.parent) {
    app.listen(port, () => {
        AppLogger.info(`Example app listening on port ${port}!`);
        console.log(`Example app listening on port ${port}!`); // tslint:disable-line no-console
    });
}
