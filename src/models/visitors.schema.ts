import mongoose from "mongoose";
import "./setup.mongo";

const visitor = new mongoose.Schema({
    name: String,
    phone_number: Number,
    address: String,
    date_of_visit: Date,
    purpose_of_visit: String,
    other_purpose_of_visit: String,
});

const ChurchVisitor = mongoose.model("church.visitors", visitor);

export default ChurchVisitor;
