import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dispute } from './Dispute';
import { Project } from './Project';

export enum MilestoneStatus {
    Proposed = 'proposed',
    CC = 'completed by client',
    CF = 'completed by freelancer',
    CA = 'completed by admin',
}

@Entity()
export class Milestone {
    // Transaction unidirectional
    @Column('text')
    public description: string;
    @Column('text')
    public deliverables: string;
    @Column({
        default: 'proposed',
        // enum: ['proposed', 'completed by client', 'completed by freelancer', 'completed by admin'],
    })
    public MilestoneStatus: MilestoneStatus;

    @ManyToOne(type => Project, project => project.milestones)
    public project: Project;

    @OneToMany(type => Dispute, dispute => dispute.milestone)
    public disputes: Dispute[];

    @PrimaryGeneratedColumn()
    public id?: number;
}
