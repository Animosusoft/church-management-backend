import mongoose from "mongoose";
import { clould_mongo_uri } from "../config/index";

mongoose
    .connect(clould_mongo_uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    })
    .then(() => console.log("Connection To The Database has been established"))
    .catch((error) => console.error(error));
