import { Insurance } from '.';

export class InsuranceStore {
    public static d: Insurance[] = [];
    public static getInsurance(id: string): Insurance | null {
        return this.d.find((u: Insurance) => u.id === id) || null;
    }
    public static saveInsurance(insurance: Insurance): boolean {
        if (InsuranceStore.getInsurance(insurance.id)) {
            return false;
        }
        this.d = [...this.d, insurance];
        return true;
    }
}
