import { Project } from '.';

export class ProjectStore {
    public static d: Project[] = [];
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
