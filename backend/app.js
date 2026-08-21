import "dotenv/config"
import express from "express"
import helmet from "helmet"
import cors from 'cors'
import cookieParser from "cookie-parser";
import ExpressMongoSanitize from "express-mongo-sanitize";
const app = express();

// middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(cookieParser())
// express 5 ke andar ye depriciate hogaya hee!1
// app.use(ExpressMongoSanitize())
console.log("after middleware in app.js");

app.get("/hello", (req, res) => {
    console.log("in hello ");
    res.send("hello");
})

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        mssge: "server health is OK"
    })
});


export default app;