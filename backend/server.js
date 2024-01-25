const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')
const router = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');




require('dotenv').config();

// MONGODB CONNECTION
connectDB();

//REST OBJECT
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Route
app.use('/api/v1/auth', router);
app.use('/api/v1/post', postRouter);

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`.bgGreen.white);
});