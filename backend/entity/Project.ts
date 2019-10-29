import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Gig } from './Gig';
import { Milestone } from './Milestone';
import { User } from './User';

export enum ProjectStatus {
    Proposed = 'proposed',
    Accepted = 'accepted',
    Rejected = 'rejected',
    Completed = 'completed',
}

@Entity()
export class Project {
    @Column('double')
    public amount: number; // end amount / total amount
    @Column({
        default: 'Pending',
        enum: ['proposed', 'accepted', 'rejected', 'paid', 'completed'],
    })
    public ProjectStatus: ProjectStatus;

    @ManyToOne(type => User, user => user.projects)
    public freelancer: User;
    @ManyToOne(type => Gig, gig => gig.project) // Many to one
    @JoinColumn()
    public gig: Gig;
    @OneToMany(type => Milestone, milestone => milestone.project, {
        cascade: true,
    })
    public milestones: Milestone[];

    @PrimaryGeneratedColumn()
    public id?: number;
}
