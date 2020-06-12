import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/icm_db",{useUnifiedTopology:true,useNewUrlParser: true})

const db= mongoose.connection;
db.on("error",console.error.bind("connection error"))
db.once("open",()=>{
    console.log("We open")
})

const schema = new mongoose.Schema({name:String})

const name = mongoose.model("name",schema)



export {name}

