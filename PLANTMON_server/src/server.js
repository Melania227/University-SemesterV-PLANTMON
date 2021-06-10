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
const alertsRoute = require('./Routes/alerts');
const manualInventoryRoute = require('./Routes/manualInventory');
const plantInfoRoute = require('./Routes/plantInfo');
const remindersRoute = require('./Routes/reminders');
const sensorInfoRoute = require('./Routes/sensorInfo');
const withSensorsInventoryRoute = require('./Routes/withSensorsInventory');

app.use('/Alerts', alertsRoute);
app.use('/ManualInventory', manualInventoryRoute);
app.use('/PlantInfo', plantInfoRoute);
app.use('/Reminders', remindersRoute);
app.use('/SensorInfo', sensorInfoRoute);
app.use('/WithSensorsInventory', withSensorsInventoryRoute);


mongoose.connect(
    process.env.DB_CONNECTION_PLANTMON, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => {
        console.log('Connected to MongoDB Atlas: PLANTMON_DB');
    }
);

// server listing in  port 4000
app.listen('80','192.168.100.19' | 'localhost',function() {
    console.log('Application worker ' + process.pid + ' started...');
  }
);