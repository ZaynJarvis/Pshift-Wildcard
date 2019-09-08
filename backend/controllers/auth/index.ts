import passport from 'passport';
import { User, UserStore } from '../../models';

const uncachedRequire = path => {
    delete require.cache[require.resolve(path)];
    return require(path);
};

export const register = async (req, res, next) => {
    const user = new User(req.body);
    try {
        const existedUser = UserStore.getUser(user.email);
        if (existedUser) {
            res.status(400).send({
                message: `User (${user.email}) already existed, try to login.`,
            });
            return;
        }
    } catch (err) {
        next(err);
        return;
    }
    try {
        UserStore.saveUser(user);
        res.status(200).send({
            message: 'user register success',
            id: user.id,
        });
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    passport.authenticate('login', async (err, user) => {
        try {
            if (err) {
                return next(err);
            }
            req.login(user, { session: false }, async error => {
                if (error) {
                    return next(error);
                }
                const token = user.generateJwt();
                return res.json({ token });
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
};

export const profile = (req, res) => {
    res.send(req.user);
};
