export class ResponseGetSchedulings {
    doctor: {
        name: string,
        last_name: string,
        gender: string,
        speciality: string,
        clinic: string,
        birthday: string,
        created_at: string,
        avatar: String
    };

    _id: String;
    start_date: String;
    patient_id: String;
    timetable_id: String;
    created_at: String;
}