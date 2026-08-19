import 'dotenv/config';
import connectDb from "./src/config/db.js"
import express from "express"
const app = express();
const PORT = process.env.PORT;

const mongoUrl = process.env.mongoUrl;
console.log(mongoUrl);


connectDb().then(()=>{
})
app.listen(PORT,()=>{
    console.log("server started");
})
