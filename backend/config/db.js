const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDb connected: ${conn.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}




module.exports = connectDB;
