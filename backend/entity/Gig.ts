import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './Project';
import { User } from './User';

@Entity()
export class Gig {
    @Column()
    public title: string;
    @Column('text')
    public imageUrl: string;
    @Column('text')
    public description: string;
    @Column()
    public active: boolean;

    @ManyToOne(type => User, user => user.gigs)
    public client: User;
    @OneToOne(type => Project, project => project.gig)
    public project: Project;

    @PrimaryGeneratedColumn()
    public id?: number;
}
