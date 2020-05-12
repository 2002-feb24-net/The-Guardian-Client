import Review from './review';

export default interface Hospital {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phone: string;
    website: string;
    aggMedicalStaffRating: number;
    aggClericalStaffRating: number;
    aggFacilityRating: number;
    aggOverallRating: number;
    reviews?: Review[];
    distance?: string;
}