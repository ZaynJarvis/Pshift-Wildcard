import { generateUUID } from '../utils';

export class Project {
    public id: string;
    public title: string;
    public description: string;
    public imageUrl: string;
    public inCarousel: boolean;
    public isCompleted: boolean;
    constructor(obj: {
        title?: string;
        description?: string;
        imageUrl?: string;
        inCarousel: boolean;
        isCompleted: boolean;
    }) {
        const { title, description, imageUrl, inCarousel, isCompleted } = obj;
        this.id = generateUUID();
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.inCarousel = inCarousel;
        this.isCompleted = isCompleted;
    }
    public update(obj: {
        title?: string;
        description?: string;
        imageUrl?: string;
        inCarousel?: boolean;
        isCompleted?: boolean;
    }) {
        const { title, description, imageUrl, inCarousel, isCompleted } = obj;
        if (title) {
            this.title = title;
        }
        if (description) {
            this.description = description;
        }
        if (imageUrl) {
            this.imageUrl = imageUrl;
        }
        if (inCarousel) {
            this.inCarousel = inCarousel;
        }
        if (isCompleted) {
            this.isCompleted = isCompleted;
        }
    }
}
