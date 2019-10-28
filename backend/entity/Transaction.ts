import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

export enum TransactionStatus {
    Pending = 'pending',
    Completed = 'completed',
}

@Entity()
export class Transaction {
    @Column('double')
    public amount: number;
    @Column()
    public type: string;
    @Column('text')
    public description: string;
    @Column({
        enum: ['pending', 'completed'],
    })
    public transactionStatus: TransactionStatus;

    @ManyToOne(type => User, client => client.transactions)
    public client: User;
    @ManyToOne(type => User, freelancer => freelancer.transactions)
    public freelancer: User;

    @PrimaryGeneratedColumn()
    public id?: number;
    @CreateDateColumn()
    public createdAt?: Date;
    @UpdateDateColumn()
    public updatedAt?: Date;
}
