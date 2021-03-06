
export default interface Review {
    id?: number;
    userId: number;
    hospitalId: number;
    medicalStaffRating: number;
    clericalStaffRating: number;
    facilityRating: number;
    overallRating: number;
    writtenFeedback: string;
    dateSubmitted: Date;
    dateAdmittance: Date;
    reason: string;
}