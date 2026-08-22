import "dotenv/config"
import express from "express"
import helmet from "helmet"
import cors from 'cors'
import cookieParser from "cookie-parser";
import ExpressMongoSanitize from "express-mongo-sanitize";
const app = express();
import AuthRouter from "./src/modules/auth/auth.route.js"
// middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(cookieParser())
// express 5 ke andar ye depriciate hogaya hee!1
// app.use(ExpressMongoSanitize())

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        mssge: "server health is OK"
    })
});


app.use("auth",AuthRouter);





export default app;