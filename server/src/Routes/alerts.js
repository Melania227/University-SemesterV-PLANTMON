const { response } = require('express');
const express = require('express');
const { remove } = require('../Models/Alerts');
const router = express.Router();
const Alert = require('../Models/Alerts');



//GET 
//E: 
//S: Todas las alertas
router.get('/', async(req, res) => {
    try {
        const alert = await Alert.find();

        res.json(alert);
    } catch (error) {
        res.json('ERROR');
    }

});



//GET de un user en especifico
//E: username 
//S: Todas las alertas pendientes de un user
router.get('/:username', async(req, res) => {
    try {
        const alert = await Alert.findOne({ username: req.params.username });
        res.json(alert);
    } catch (error) {
        res.json('Error SOS!!');
    }

});



//DELETE de una alert
//E: alert info
//S: alert eliminada 
router.delete('/', async(req, res) => {
    try {
        const findAlert = await Alert.findOne({ username: req.body.username, reason: req.body.reason, affectedPlant: req.body.affectedPlant });
        if (findAlert != null) {
            const removeAlert = await Alert.findOneAndRemove({ _id: findAlert._id });
            res.json(removeAlert);
        } else {
            res.json({ message: "Error. Este username no está en la base de datos" });
        }

    } catch (error) {
        res.json({ message: error });
    }

});


//POST (Insert)
//E: Info para crear una nueva alerta
//S: Alerta creada
router.post('/', async(req, res) => {
    try {
        
        const findAlert = await Alert.findOne({ username: username });
        
        if (findAlert == null) {
            const alert = new Alert({
                username: req.body.username, 
                reason: req.body.reason, 
                
                //que pasa si esto no viene? HELP
                affectedPlant: req.body.affectedPlant
            });

            await alert.save(function(err) {
                if (err) {
                    res.json('ERROR');
                } else {
                    saveAlert = alert.toObject();
                    res.json(saveAlert);
                }
            }); //metodo de mongoose para guardar 

        } else
            res.json('Error1')
    } catch {
        res.json('Error2');
    }
});



module.exports = router;