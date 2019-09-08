import { Transaction } from '.';

export class TransactionStore {
    public static d: Transaction[] = [
        new Transaction({
            item: 'Angular Frontend Project',
            description: '',
            date: '2019-06-30',
            amount: 30,
            inflow: true
        }),
        new Transaction({
            item: 'UI design for Ecommerce Website',
            description: '',
            date: '2018-07-25',
            amount: 80,
            inflow: false
        }),
        new Transaction({
            item: 'MySQL Database Migration',
            description: '',
            date: '2017-02-28',
            amount: 70,
            inflow: true
        }),
        new Transaction({
            item: 'X-men',
            description: "Wolverine's Claws",
            date: '2017-02-27',
            amount: 80,
            inflow: false
        })
    ];
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
