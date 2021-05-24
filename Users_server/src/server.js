const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Middleware
app.use(cors());

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());


// imports ROUTES
const userRoute = require('./Routes/users');

app.use('/Users', userRoute);

mongoose.connect(
    process.env.DB_CONNECTION_USERS, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => {
        console.log('Connected to MongoDB Atlas: UsersDB');
    }
);

// server listing in  port 3000
app.listen(3000);