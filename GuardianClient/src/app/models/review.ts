export default interface Review {
    id: number;
    UserId: number;
    HospitalId: number;
    MedicalStaffRating: number;
    ClericalStaffRating: number;
    FacilityRating: number;
    OverallRating: number;
    WrittenFeedback: string;
    DateSubmitted: Date;
    DateAdmittance: Date;
    ReasonId: number;
}