import 'dotenv/config';
import connectDb from "./src/config/db.js"

import app from './app.js';

const PORT = process.env.PORT;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log("server started");
    })
}).catch((err) => {
    console.log(err);
})


// const start = async () => {
//     try {

//         await connectDb();
//         app.listen(3000, () => {
//             console.log("server is listening");
//         })
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// start();