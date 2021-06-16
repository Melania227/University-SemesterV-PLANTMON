const { response } = require('express');
const express = require('express');
const { remove } = require('../Models/PlantInfo');
const router = express.Router();
const PlantInfo = require('../Models/PlantInfo');


//GET 
//E: 
//S: Todas las plantas 
router.get('/', async(req, res) => {
    try {
        const info = await PlantInfo.find();
        res.json(info);
    } catch (error) {
        res.json({ message: error });
    }

});


//GET de una planta en especifica
//E: name 
//S: Info de la planta
router.get('/:name', async(req, res) => {
    try {
        const info = await PlantInfo.findOne({ name: req.params.name });
        res.json(info);
    } catch (error) {
        res.json({ message: error });
    }

});


//DELETE de una planta
//E: name
//S: Elimina la planta y la devuelve 
router.delete('/', async(req, res) => {
    try {
        const findPlantInfo = await PlantInfo.findOne({ name: req.body.name });
        if (findPlantInfo != null) {
            const removePlantInfo = await PlantInfo.findOneAndRemove({ _id: findPlantInfo._id });
            res.json(removePlantInfo);
        } else {
            res.json({ message: "Error. Esta planta no está en la base de datos" });
        }

    } catch (error) {
        res.json({ message: error });
    }

});


/* Cuando se haga el patch para anadir nueva info de plantas se usa esto
    let newBackgroud = findPlantInfo.background;
    let newTips = findPlantInfo.tips;
    newBackgroud.push(req.body.background);
    newTips.push(req.body.tips);
 */



//POST (Insert)
//E: Info nueva planta
//S: Nueva planta creada
router.post('/', async(req, res) => {
    try {
        
        const findPlantInfo = await PlantInfo.findOne({ name: req.body.name });
        if (findPlantInfo == null) {
            
            const plant = new PlantInfo({
                name: req.body.name,
                family: req.body.family,
                background: req.body.background,
                tips: req.body.tips,
                temperature: req.body.temperature,
                moisture: req.body.moisture,
                irrigation: req.body.irrigation,
                solarIntensity: req.body.solarIntensity,
                image: req.body.image
            });

            await plant.save(function(err) {
                if (err) {
                    res.json(err);
                } else {
                    savePlant = plant.toObject();
                    res.json(savePlant);
                }
            }); //metodo de mongoose para guardar 

        } else
            res.status(401).send('Error');
    } catch {
        res.status(401).send('Error');
    }
});



module.exports = router;