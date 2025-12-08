const mongoose = require("mongoose");
const config = require("config");

const connectDB = config.get("mongoURI");

const mongoDBConnect = async () => {
    try {
        await mongoose.connect(connectDB);
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = mongoDBConnect;