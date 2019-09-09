import { generateUUID } from '../utils';

export class Insurance {
    public id: string;
    public type: string;
    public title: string;
    public description: string;
    public imageUrl: string;
    public url: string;
    public amount: number;
    public inCarousel: boolean;
    constructor(obj: {
        type?: string;
        title?: string;
        description?: string;
        imageUrl?: string;
        url?: string;
        amount?: number;
        inCarousel?: boolean;
    }) {
        const {
            type,
            title,
            description,
            imageUrl,
            url,
            amount,
            inCarousel
        } = obj;
        this.id = generateUUID();
        this.type = type;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.url = url;
        this.amount = amount;
        this.inCarousel = inCarousel;
    }
    public update(obj: {
        type?: string;
        title?: string;
        description?: string;
        imageUrl?: string;
        url?: string;
        amount?: number;
        inCarousel?: boolean;
    }) {
        const {
            type,
            title,
            description,
            imageUrl,
            url,
            amount,
            inCarousel
        } = obj;
        if (type) {
            this.type = type;
        }
        if (title) {
            this.title = title;
        }
        if (description) {
            this.description = description;
        }
        if (imageUrl) {
            this.imageUrl = imageUrl;
        }
        if (url) {
            this.url = url;
        }
        if (amount) {
            this.amount = amount;
        }
        if (inCarousel) {
            this.inCarousel = inCarousel;
        }
    }
}
