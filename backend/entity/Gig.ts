import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
    @Column({
        default: false,
    })
    public active: boolean;

    @ManyToOne(type => User, user => user.gigs)
    public client: User;
    @OneToMany(type => Project, project => project.gig)
    public projects: Project[];

    @PrimaryGeneratedColumn()
    public id?: number;
}
