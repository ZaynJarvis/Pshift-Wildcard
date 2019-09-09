import { Project } from '.';

export class ProjectStore {
    public static d: Project[] = [
        new Project({
            title: 'React Prototype',
            description:
                'Building a prototype application for banking sector with preferably following stack/key requirements. I can consider a different technology stack if requirements are met: React JS, Golang, Postgre Sql, Low latency, High performance measured in milliseconds',
            imageUrl:
                'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
            inCarousel: true,
            isCompleted: false
        }),
        new Project({
            title: 'Node.js backend',
            description:
                'Dear All, I have node based application want to upload to google compute engine. Following task need to be done: 1. I have local docker image, 2. You want to setup compute engine, 3. Setup DNS',
            imageUrl:
                'https://content.thriveglobal.com/wp-content/uploads/2017/10/node.jpg',
            inCarousel: true,
            isCompleted: false
        }),
        new Project({
            title: 'UX design for Android App',
            description:
                'We are HealthTech company and are looking for an experienced and creative UI/UX Designer to join our team for building a Healthcare Ecosystem. As an UI-UX Designer, you will be responsible for delivering the best online user experience, which makes your role extremely important for our success and ensuring customer satisfaction and loyalty.',
            imageUrl: 'https://i.udemycdn.com/course/750x422/1234368_1c41.jpg',
            inCarousel: true,
            isCompleted: false
        }),
        new Project({
            title: 'Lorem Ipsum',
            description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            imageUrl:
                'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100',
            inCarousel: false,
            isCompleted: false
        })
    ];
    public static getProject(id: string): Project | null {
        return this.d.find((u: Project) => u.id === id) || null;
    }
    public static saveProject(project: Project): boolean {
        if (ProjectStore.getProject(project.id)) {
            return false;
        }
        this.d = [...this.d, project];
        return true;
    }
}
