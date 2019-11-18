import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Milestone } from './Milestone';
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
        default: 'pending',
        // enum: ['pending', 'improving', 'completed'],
    })
    public disputeStatus: DisputeStatus;

    @ManyToOne(type => Milestone, ms => ms.disputes)
    public milestone: Milestone;

    @PrimaryGeneratedColumn()
    public id?: number;
}
