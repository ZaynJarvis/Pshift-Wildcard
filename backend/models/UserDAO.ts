import { User } from '.';

export class UserStore {
    public static d: User[] = [];
    public static getUser(email: string): User | null {
        return this.d.find((u: User) => u.email === email) || null;
    }
    public static saveUser(user: User): boolean {
        if (UserStore.getUser(user.email)) {
            return false;
        }
        this.d = [...this.d, user];
        return true;
    }
}
