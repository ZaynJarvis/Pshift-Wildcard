import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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
    @Column('text')
    public description: string;
    @Column('text')
    public deliverables: string;

    @Column({
        default: 'Pending',
        enum: ['Pending', 'completed by client', 'completed by freelancer', 'completed by admin'],
    })
    public MilestoneStatus: MilestoneStatus;

    @ManyToOne(type => Project, project => project.milestones)
    public project: Project;

    @OneToOne(type => Dispute)
    public dispute: Dispute;

    @PrimaryGeneratedColumn()
    public id?: number;
}
