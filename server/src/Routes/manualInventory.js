const { response } = require('express');
const express = require('express');
const { remove } = require('../Models/ManualInventory');
const router = express.Router();
const ManualInventory = require('../Models/ManualInventory');


//GET 
//E: 
//S: Todos los inventarios manuales
router.get('/', async(req, res) => {
    try {
        const manualInventory = await ManualInventory.find();

        res.json(manualInventory);
    } catch (error) {
        res.json('ERROR');
    }

});



//GET de un manual inventory de un user en especifico
//E: username 
//S: manual inventory del user
router.get('/:username', async(req, res) => {
    try {
        const manualInventory = await ManualInventory.findOne({ username: req.params.username });
        res.json(manualInventory);
    } catch (error) {
        res.json('Error SOS!!');
    }

});



//DELETE de un manual inventory especifico de un user
//E: username
//S: User 
router.delete('/', async(req, res) => {
    try {
        const findManualInventory = await ManualInventory.findOne({ username: req.body.username, plantName: req.body.plantName });
        if (findManualInventory != null) {
            const removeManualInventory = await ManualInventory.findOneAndRemove({ _id: findManualInventory._id });
            res.json(removeManualInventory);
        } else {
            res.json({ message: "Error. Esta planta no está en la base de datos" });
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
        
        const findManualInventory = await ManualInventory.findOne({ username: req.body.username, plantName: req.body.plantName });
        
        if (findManualInventory == null) {
            const manualInventory = new ManualInventory({
                username: username,
                plantName: req.body.plantName,
                type: req.body.type,
                updates: req.body.updates,
                image: req.body.image
            });

            await manualInventory.save(function(err) {
                if (err) {
                    res.json('ERROR');
                } else {
                    saveManualInventory = manualInventory.toObject();
                    res.json(saveManualInventory);
                }
            }); //metodo de mongoose para guardar 

        } else
            res.json('Error1')
    } catch {
        res.json('Error2');
    }
});



module.exports = router;