import { generateUUID } from '../utils';

export class Transaction {
    public id: string;
    public item: string;
    public description: string;
    public amount: number;
    public inflow: boolean;
    constructor(obj: { item?: string; description?: string; amount?: number; inflow?: boolean }) {
        const { item, description, amount, inflow } = obj;
        this.id = generateUUID();
        this.item = item;
        this.description = description;
        this.amount = amount;
        this.inflow = false;
        if (inflow) {
            this.inflow = inflow;
        }
    }
    public update(obj: { item?: string; description?: string; amount?: number; inflow?: boolean }) {
        const { item, description, amount, inflow } = obj;
        if (item) {
            this.item = item;
        }
        if (description) {
            this.description = description;
        }
        if (amount) {
            this.amount = amount;
        }
        if (inflow) {
            this.inflow = inflow;
        }
    }
}
