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
        const sensorInfo = await SensorInfo.find({ sensorIdentifier: req.params.sensorId });
        res.json(sensorInfo);
    } catch (error) {
        res.json('Error SOS!!');
    }

});


//POST (Insert)
//E: info del sensor en una fecha y hora especifica
//S: info del sensor recien creada
router.post('/', async(req, res) => {
    try {
        
        const findSensorInfo = await SensorInfo.findOne({ sensorIdentifier: req.body.sensorIdentifier, date: req.body.date, hour: req.body.hour, type: req.body.type });
        
        if (findSensorInfo == null) {
            const sensorInfo = new SensorInfo({
                sensorIdentifier: req.body.sensorIdentifier, 
                date: req.body.date, 
                hour: req.body.hour,
                type: req.body.type,
                data: req.body.data
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