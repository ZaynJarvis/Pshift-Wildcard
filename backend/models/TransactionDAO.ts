import { Transaction } from '.';

export class TransactionStore {
    public static d: Transaction[] = [];
    public static getTransaction(id: string): Transaction | null {
        return this.d.find((u: Transaction) => u.id === id) || null;
    }
    public static saveTransaction(transaction: Transaction): boolean {
        if (TransactionStore.getTransaction(transaction.id)) {
            return false;
        }
        this.d = [...this.d, transaction];
        return true;
    }
}
