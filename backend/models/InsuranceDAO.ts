import { Insurance } from '.';

export class InsuranceStore {
    public static d: Insurance[] = [
        new Insurance({
            type: 'travel',
            title: 'FWD Medical',
            description: 'Key feature: Cashless Claim available',
            imageUrl:
                'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100',
            url: '',
            amount: 1000,
            inCarousel: true
        }),
        new Insurance({
            type: 'home',
            title: 'FWD Medical',
            description: 'Key feature: Cashless Claim available',
            imageUrl:
                'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100',
            url: '',
            amount: 1000,
            inCarousel: false
        }),
        new Insurance({
            type: 'travel',
            title: 'DBS Protect360',
            description:
                'Key feature: Cashback, Unemployment coverage, Home nursing',
            imageUrl:
                'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100',
            url: '',
            amount: 500,
            inCarousel: true
        }),
        new Insurance({
            type: 'home',
            title: 'DBS Protect360',
            description:
                'Key feature: Cashback, Unemployment coverage, Home nursing',
            imageUrl:
                'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100',
            url: '',
            amount: 500,
            inCarousel: false
        }),
        new Insurance({
            type: 'travel',
            title: 'Great Eastern Health',
            description: 'Key feature: Receive your policy immediately',
            imageUrl:
                'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100',
            url: '',
            amount: 2000,
            inCarousel: false
        }),
        new Insurance({
            type: 'home',
            title: 'Great Eastern Health',
            description: 'Key feature: Receive your policy immediately',
            imageUrl:
                'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100',
            url: '',
            amount: 2000,
            inCarousel: false
        })
    ];
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
