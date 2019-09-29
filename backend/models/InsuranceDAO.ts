import { Insurance } from '.';

export class InsuranceStore {
    public static d: Insurance[] = [
        new Insurance({
            type: 'travel',
            title: 'Fitness Gym monthly membership',
            description: '1 month of Firness Gym premium membership',
            imageUrl:
                'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?cs=srgb&dl=crossfit-crossfit-training-energy-1552242.jpg&fm=jpg',
            url: '',
            amount: 1000,
            inCarousel: true
        }),
        new Insurance({
            type: 'home',
            title: 'Photoshop yearly subscription',
            description:
                'Redeem to get 1 year of Photoshop subscription for free',
            imageUrl:
                'https://images.pexels.com/photos/693892/pexels-photo-693892.jpeg?cs=srgb&dl=adobe-photoshop-data-desk-693892.jpg&fm=jpg',
            url: '',
            amount: 1000,
            inCarousel: false
        }),
        new Insurance({
            type: 'travel',
            title: 'Paylah credit',
            description: 'Redeem to get $5 Paylah credit',
            imageUrl:
                'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100',
            url: '',
            amount: 500,
            inCarousel: true
        })
        // new Insurance({
        //     type: 'home',
        //     title: 'DBS Protect360',
        //     description:
        //         'Key feature: Cashback, Unemployment coverage, Home nursing',
        //     imageUrl:
        //         'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100',
        //     url: '',
        //     amount: 500,
        //     inCarousel: false
        // }),
        // new Insurance({
        //     type: 'travel',
        //     title: 'Great Eastern Health',
        //     description: 'Key feature: Receive your policy immediately',
        //     imageUrl:
        //         'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100',
        //     url: '',
        //     amount: 2000,
        //     inCarousel: false
        // }),
        // new Insurance({
        //     type: 'home',
        //     title: 'Great Eastern Health',
        //     description: 'Key feature: Receive your policy immediately',
        //     imageUrl:
        //         'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100',
        //     url: '',
        //     amount: 2000,
        //     inCarousel: false
        // })
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
