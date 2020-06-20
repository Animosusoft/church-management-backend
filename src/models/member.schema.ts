import mongoose from "mongoose";
import "./setup.mongo";

const Gender = ["Male", "Female"];
const MaritalStatus = [
    "Single",
    "Never Married",
    "Married",
    "Informal/Living Together",
    "Separated",
    "Divorced",
    "Widowed",
];
const StudentStatus = ["Yes", "No"];
const EducationalLevel = [
    "None",
    "JHS/MSLC",
    "SHS/O'Level",
    "A'Level",
    "HND/Other Diploma",
    "NVTI",
    "Degree",
    "2nd Degree and Higher",
    "Doctorate and Higher",
];
const EmploymentStatus = [
    "Employed",
    "Unemployed",
    "SelfEmployed",
    "Civil_Employed",
    "Private",
    "Unpaid_Worker",
    "Retired",
];

const basic_information = {
    first_name: String,
    middle_name: String,
    last_name: String,
    membership_id: { type: Number, unique: true },
    date_of_birth: Date,
    languages_spoken: [String],
    gender: { type: String, enum: Gender },
};

const contact_information = {
    residential_or_gps_address: String,
    hometown: String,
    postal_address: String,
    place_of_birth: String,
    nationality: String,
    region: String,
    phone_number: Number,
    email: String,
};

const family_information = {
    marital_status: MaritalStatus,
    date_of_marriage: Date,
    name_of_spouse: String,
    name_of_children: [String],
    fathers_name: String,
    mothers_name: String,
    next_of_kins: String,
};

const educational_and_occupational_infomation = {
    student: StudentStatus,
    education_level: EducationalLevel,
    instituition: String,
    profession: String,
    occupation: String,
    current_place_of_work: String,
    employment_status: EmploymentStatus,
};

const church_infomation = {
    date_accepted_in_church: Date,
    role: String,
    authorized_by: String,
    date_of_baptism: Date,
    place_of_baptism: String,
    baptized_by: String,
    date_of_conformation: Date,
    place_of_conformation: String,
    previous_church_attended: String,
};

const add_church_member_schema = new mongoose.Schema({
    ...basic_information,
});

const ChurchMember = mongoose.model("ChurchMember", add_church_member_schema);

export { ChurchMember };
