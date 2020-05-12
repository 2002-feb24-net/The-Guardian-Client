import Review from './review';
export default interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    accessLevel: boolean;
    accountVerified: boolean;
    accountDate: Date;
    reviews?: Review[];
}