export default interface User {
    id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    Address: string;
    City: string;
    State: string;
    Zip: number;
    AccessLevel: string;
    AccountVerified: boolean;
}