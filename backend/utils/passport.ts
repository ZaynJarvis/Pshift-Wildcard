import passport from 'passport';
import { ExtractJwt, Strategy as JWTstrategy } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserStore } from '../models';
import { Conn } from './connection';
import { User } from '../entity/User';

export class UnauthorizedError extends Error {
    public status = 401;
    public message;
    public stack;
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.SALT || 'salt',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        },
        async (token, done) => {
            try {
                const connection = await Conn.getInstance();
                const userRepository = connection.getRepository(User);
                const { salt, hash, ...user }: User = await userRepository.findOne({
                    where: { email: token.email },
                });
                return done(null, user);
            } catch (error) {
                done(error);
            }
        },
    ),
);

passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            try {
                const connection = await Conn.getInstance();
                const userRepository = connection.getRepository(User);
                const user: User = await userRepository.findOne({
                    where: { email },
                });
                const validate = await user.varifyPassword(password);
                if (!validate) {
                    const err: any = new UnauthorizedError('Wrong Password');
                    err.status = 401;
                    return done(err, false);
                }
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        },
    ),
);
