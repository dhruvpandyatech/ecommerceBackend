import mongoose from "mongoose"
import "dotenv/config"
import dns from "dns"
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
const mongoUrl = process.env.mongoUrl;

const connectDb = async () => {
    await mongoose.connect(mongoUrl)
    console.log("database connected successfully");
}

export default connectDb;



