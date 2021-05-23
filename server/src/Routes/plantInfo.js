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
        res.json('ERROR');
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
        res.json('Error SOS!!');
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


//POST (Insert)
//E: Info nueva planta
//S: Nueva planta creada
router.post('/', async(req, res) => {
    try {
        
        const findPlantInfo = await PlantInfo.findOne({ name: req.body.name });
        
        if (findPlantInfo == null) {
            
            let newBackgroud = findPlantInfo.background;
            let newTips = findPlantInfo.tips;
            newBackgroud.push(req.body.background);
            newTips.push(req.body.tips);

            const plant = new PlantInfo({
                name: req.body.name,
                family: req.body.family,
                
                //esto son listas entonces se construyen antes
                background: newBackgroud,
                tips: newTips,
                
                //no se como putas saber si algo viene o no en el body HELP
                temperature: req.body.temperature,
                moisture: req.body.moisture,
                pressure: req.body.pressure,
                solarIntensity: req.body.solarIntensity
            });

            await plant.save(function(err) {
                if (err) {
                    res.json('ERROR');
                } else {
                    savePlant = plant.toObject();
                    res.json(savePlant);
                }
            }); //metodo de mongoose para guardar 

        } else
            res.json('Theres another plant with this name already')
    } catch {
        res.json('Error2');
    }
});



module.exports = router;