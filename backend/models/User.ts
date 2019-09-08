import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { generateUUID } from '../utils';

export class User {
    public id: string;
    public name: string;
    public email: string;
    public salt: string;
    public hash: string;
    constructor(obj: { name?: string; email?: string; password?: string }) {
        const { name, email, password } = obj;
        this.id = generateUUID();
        this.name = name;
        this.email = email;
        this.setPassword(password);
    }
    public setPassword(passwd: string) {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(passwd, this.salt, 1000, 64, 'sha512').toString('hex');
    }
    public varifyPassword(passwd: string): boolean {
        const hash = crypto.pbkdf2Sync(passwd, this.salt, 1000, 64, 'sha512').toString('hex');
        return hash === this.hash;
    }
    public generateJwt() {
        return jwt.sign(
            {
                _id: this.id,
                email: this.email,
                name: this.name,
                expiresIn: '7d',
            },
            process.env.SALT || 'salt',
        );
    }
}
