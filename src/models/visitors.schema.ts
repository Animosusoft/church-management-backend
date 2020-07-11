import mongoose from "mongoose";
import "./setup.mongo";

const Purpose_Of_Visit = [
    "Just A Visit",
    "Want To Be A Member",
    "Seeking Prayers And Spiritual Guidance",
    "Desire To Grow And Know More About Jesus Christ",
    "Other",
];

const visitor = new mongoose.Schema({
    name: String,
    phone_number: Number,
    address: String,
    date_of_visit: Date,
    purpose_of_visit: String,
    other_purpose_of_visit: { type: String, enum: Purpose_Of_Visit },
});

const ChurchVisitor = mongoose.model("church.visitors", visitor);

export default ChurchVisitor;
