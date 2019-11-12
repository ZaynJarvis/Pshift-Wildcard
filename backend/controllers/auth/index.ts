import passport from 'passport';
import { User } from '../../entity/User';
import { Conn } from '../../utils/connection';

const uncachedRequire = path => {
    delete require.cache[require.resolve(path)];
    return require(path);
};

export const register = async (req, res, next) => {
    const { name, email, description, avatarUrl, password } = req.body;
    let newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.description = description;
    newUser.avatarUrl = avatarUrl;
    newUser.setPassword(password);
    const connection = await Conn.getInstance();
    try {
        let userRepository = connection.getRepository(User);
        let existedUser: User = await userRepository.findOne({
            where: { email: newUser.email }
        });
        if (existedUser) {
            res.status(400).send({
                message: `User (${newUser.email}) already existed, try to login.`
            });
            return;
        }
    } catch (err) {
        next(err);
        return;
    }
    try {
        await connection.manager.save(newUser);
        res.status(200).send({
            message: 'user register success',
            id: newUser.id
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
