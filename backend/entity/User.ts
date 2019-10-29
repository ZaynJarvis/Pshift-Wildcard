import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Gig } from './Gig';
import { Project } from './Project';
import { Transaction } from './Transaction';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: string;
    @Column()
    public name: string;
    @Column()
    public email: string;
    @Column()
    public salt: string;
    @Column()
    public hash: string;
    @Column('text')
    public description: string;
    @Column('text')
    public avatarUrl: string;

    @OneToMany(type => Transaction, transaction => transaction.client) // same effect as transaction => transaction.freelancer
    public transactions: Transaction[];

    @OneToMany(type => Project, project => project.freelancer)
    public projects: Project[];

    @OneToMany(type => Gig, gig => gig.client)
    public gigs: Project[];

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
