import { generateUUID } from '../utils';

export class Project {
    public id: string;
    public title: string;
    public description: string;
    public imageUrl: string;
    constructor(obj: { title?: string; description?: string; imageUrl?: string }) {
        const { title, description, imageUrl } = obj;
        this.id = generateUUID();
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    public update(obj: { title?: string; description?: string; imageUrl?: string }) {
        const { title, description, imageUrl } = obj;
        if (title) {
            this.title = title;
        }
        if (description) {
            this.description = description;
        }
        if (imageUrl) {
            this.imageUrl = imageUrl;
        }
    }
}
