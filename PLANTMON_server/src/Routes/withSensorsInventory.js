const { response } = require('express');
const express = require('express');
const { remove } = require('../Models/WithSensorsInventory');
const router = express.Router();
const SensorsInventory = require('../Models/WithSensorsInventory');


//GET 
//E: 
//S: Todos los inventarios de plantas que usan sensores que existen
router.get('/', async(req, res) => {
    try {
        const sensorsInventory = await SensorsInventory.find();

        res.json(sensorsInventory);
    } catch (error) {
        res.json({ message: error });
    }

});


//GET de un sensor inventory en especifico para un usuario
//E: username 
//S: User sin password
router.get('/:username', async(req, res) => {
    try {
        const sensorsInventory = await SensorsInventory.find({ username: req.params.username });
        res.json(sensorsInventory);
    } catch (error) {
        res.json({ message: error });
    }

});


router.get('/:username/:plantName', async(req, res) => {
    try {
        const sensorsInventory = await SensorsInventory.findOne({ username: req.params.username, plantName: req.params.plantName });
        res.json(sensorsInventory);
    } catch (error) {
        res.json({ message: error });
    }

});




//PATCH (Update)
//E: {name, schema}
//S: El schema actualizado 
router.patch('/', async(req, res) => {
    try {
        findPlant = await SensorsInventory.findOne({ username: req.body.username, plantName: req.body.plantName });
        findNewPlant = await SensorsInventory.findOne({ username: req.body.username, plantName: req.body.plantaSensor.plantName });
        
        if (findPlant != null && ((req.body.plantName == req.body.plantaSensor.plantName) || (findNewPlant == null))) {
            const updatedPlant = await SensorsInventory.updateOne({ _id: findPlant._id }, req.body.plantaSensor);
            findNewPlant = await SensorsInventory.findOne({ username: req.body.username, plantName: req.body.plantName });

            res.json(updatedPlant);
        } else {
            res.json({ message: "Error. Este username no est?? en la base de datos" });
        }

    } catch (error) {
        res.json({ message: error });
    }

});


//DELETE de un with sensor inventory especifico de un user
//E: username
//S: sensor inventory para una planta y usuario especifico 
router.delete('/', async(req, res) => {
    try {
        const findSensorsInventory = await SensorsInventory.findOne({ username: req.body.username, plantName: req.body.plantName });
        if (findSensorsInventory != null) {
            const removeSensorsInventory = await SensorsInventory.findOneAndRemove({ _id: findSensorsInventory._id });
            res.json(removeSensorsInventory);
        } else {
            res.json({ message: "Error. Esta planta no est?? en la base de datos" });
        }

    } catch (error) {
        res.json({ message: error });
    }

});


//POST (Insert)
//E: info para aregar una planta manualmente a un usuario especifico
//S: planta agregada al inventario manual
router.post('/', async(req, res) => {
    try {
        
        const findSensorsInventory = await SensorsInventory.findOne({ username: req.body.username, plantName: req.body.plantName });
        
        if (findSensorsInventory == null) {
            const sensorsInventory = new SensorsInventory({
                username: req.body.username,
                plantName: req.body.plantName,
                type: req.body.type,
                updates: req.body.updates,
                associatedSensors: req.body.associatedSensors,
                image: req.body.image
            });

            await sensorsInventory.save(function(err) {
                if (err) {
                    res.json(err);
                } else {
                    saveSensorsInventory = sensorsInventory.toObject();
                    res.json(saveSensorsInventory);
                }
            }); //metodo de mongoose para guardar 

        } else
            res.status(401).send('Error');
    } catch {
        res.status(401).send('Error');
    }
});



module.exports = router;