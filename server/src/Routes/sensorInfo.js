const { response } = require('express');
const express = require('express');
const { remove } = require('../Models/SensorInfo');
const router = express.Router();
const SensorInfo = require('../Models/SensorInfo');


//GET 
//E: 
//S: Toda la info acumulada de los sensores
router.get('/', async(req, res) => {
    try {
        const sensorInfo = await SensorInfo.find();

        res.json(sensorInfo);
    } catch (error) {
        res.json('ERROR');
    }

});


//GET de un sensor en especifico
//E: sensorIdentifier 
//S: info de ese sensor
router.get('/:username', async(req, res) => {
    try {
        const sensorInfo = await SensorInfo.findOne({ sensorIdentifier: req.params.sensorIdentifier });
        res.json(sensorInfo);
    } catch (error) {
        res.json('Error SOS!!');
    }

});


//DELETE de la info de un sensor en una fecha
//E: sensorIdentifier, fecha y hora
//S: User 
router.delete('/', async(req, res) => {
    try {
        const findSensorInfo = await SensorInfo.findOne({ sensorIdentifier: req.body.sensorIdentifier, date: req.body.date, hour: req.body.hour });
        if (findSensorInfo != null) {
            const removeSensorInfo = await SensorInfo.findOneAndRemove({ _id: findSensorInfo._id });
            res.json(removeSensorInfo);
        } else {
            res.json({ message: "Error. Este username no está en la base de datos" });
        }

    } catch (error) {
        res.json({ message: error });
    }

});


//POST (Insert)
//E: info del sensor en una fecha y hora especifica
//S: info del sensor recien creada
router.post('/', async(req, res) => {
    try {
        
        const findSensorInfo = await SensorInfo.findOne({ sensorIdentifier: req.body.sensorIdentifier, date: req.body.date, hour: req.body.hour });
        
        if (findSensorInfo == null) {
            const sensorInfo = new SensorInfo({
                sensorIdentifier: req.body.sensorIdentifier, 
                date: req.body.date, 
                hour: req.body.hour,

                //no se como putas saber si algo viene o no en el body HELP
                temperature: req.body.temperature,
                moisture: req.body.moisture,
                pressure: req.body.pressure,
                solarIntensity: req.body.solarIntensity
            });

            await sensorInfo.save(function(err) {
                if (err) {
                    res.json('ERROR');
                } else {
                    saveSensorInfo = sensorInfo.toObject();
                    res.json(saveSensorInfo);
                }
            }); //metodo de mongoose para guardar 

        } else
            res.json('Error1')
    } catch {
        res.json('Error2');
    }
});



module.exports = router;