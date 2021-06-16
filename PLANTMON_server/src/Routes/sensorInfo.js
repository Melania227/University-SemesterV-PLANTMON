const { response } = require('express');
const express = require('express');
const { remove } = require('../Models/SensorInfo');
const router = express.Router();
const SensorInfo = require('../Models/SensorInfo');


//GET de un sensor en especifico
//E: sensorIdentifier 
//S: info de ese sensor
router.get('/:sensorId', async(req, res) => {
    try {
        console.log(req.params);
        const sensorInfo = await SensorInfo.find({ sensorIdentifier: req.params.sensorId });
        console.log(sensorInfo);
        res.json(sensorInfo);
    } catch (error) {
        res.json({ message: error });
    }

});


router.get('/', async(req, res) => {
    try {
        const sensorInfo = await SensorInfo.find();
    } catch (error) {
        res.json({ message: error });
    }

});


//POST (Insert)
//E: info del sensor en una fecha y hora especifica
//S: info del sensor recien creada
router.post('/', async(req, res) => {
    try {
        var d = new Date();
        const findSensorInfo = await SensorInfo.findOne({ sensorIdentifier: req.body.sensorIdentifier, date: d, hour: d.toLocaleTimeString(), type: req.body.type });
        
        if (findSensorInfo == null) {
            const sensorInfo = new SensorInfo({
                sensorIdentifier: req.body.sensorIdentifier, 
                date: d, 
                hour: d.toLocaleTimeString(),
                type: req.body.type,
                data: req.body.data
            });
            console.log(req.body)
            await sensorInfo.save(function(err) {
                if (err) {
                    res.json({ message: err });
                } else {
                    saveSensorInfo = sensorInfo.toObject();
                    res.json(saveSensorInfo);
                }
            }); //metodo de mongoose para guardar 

        } else
            res.status(401).send('Error');
    } catch {
        res.status(401).send('Error');
    }
});



module.exports = router;