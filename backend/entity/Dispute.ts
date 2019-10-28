import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

export enum DisputeStatus {
    Pending = 'pending',
    Improving = 'improving',
    Completed = 'completed',
}

@Entity()
export class Dispute {
    @Column('text')
    public description: string;
    @Column('text')
    public remark: string;
    @Column({
        default: 'Pending',
        enum: ['Pending', 'Improving', 'Completed'],
    })
    public disputeStatus: DisputeStatus;

    @ManyToOne(type => User, client => client.transactions)
    public client: User;

    @PrimaryGeneratedColumn()
    public id?: number;
}
