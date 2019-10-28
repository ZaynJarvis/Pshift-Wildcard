import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Gig } from './Gig';
import { Milestone } from './Milestone';
import { User } from './User';

export enum ProjectStatus {
    Proposed = 'proposed',
    Accepted = 'accepted',
    Paid = 'paid',
    Completed = 'completed',
}

@Entity()
export class Project {
    @Column('double')
    public amount: number;
    @Column({
        default: 'Pending',
        enum: ['Pending', 'Improving', 'Completed'],
    })
    public ProjectStatus: ProjectStatus;

    @ManyToOne(type => User, user => user.projects)
    public freelancer: User;
    @OneToOne(type => Gig, gig => gig.project)
    @JoinColumn()
    public gig: Gig;
    @OneToMany(type => Milestone, milestone => milestone.project)
    public milestones: Milestone[];

    @PrimaryGeneratedColumn()
    public id?: number;
}
