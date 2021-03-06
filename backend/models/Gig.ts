import { generateUUID } from '../utils';

export class Gig {
    public id: string;
    public title: string;
    public description: string;
    public imageUrl: string;
    public like: string[];

    constructor(obj: { title?: string; description?: string; imageUrl?: string; like?: string[] }) {
        const { title, description, imageUrl, like } = obj;
        this.id = generateUUID();
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.like = like;
    }
    public update(obj: {
        title?: string;
        description?: string;
        imageUrl?: string;
        like?: string[];
    }) {
        const { title, description, imageUrl, like } = obj;
        if (title) {
            this.title = title;
        }
        if (description) {
            this.description = description;
        }
        if (imageUrl) {
            this.imageUrl = imageUrl;
        }
        if (like !== undefined) {
            this.like = like;
        }
    }
}
