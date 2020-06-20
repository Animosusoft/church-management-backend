import mongoose from "mongoose";
import { mongo_uri } from "../config/index";

mongoose.connect(mongo_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind("connection error"));
db.once("open", () => {
    console.log("Connection To The Database has been established");
});
