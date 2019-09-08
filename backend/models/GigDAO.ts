import { Gig } from '.';

export class GigStore {
    public static d: Gig[] = [];
    public static getGig(id: string): Gig | null {
        return this.d.find((u: Gig) => u.id === id) || null;
    }
    public static saveProject(project: Gig): boolean {
        if (GigStore.getGig(project.id)) {
            return false;
        }
        this.d = [...this.d, project];
        return true;
    }
}
