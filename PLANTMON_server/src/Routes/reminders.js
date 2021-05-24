const { response } = require('express');
const express = require('express');
const { remove } = require('../Models/Reminders');
const router = express.Router();
const Reminder = require('../Models/Reminders');


//GET 
//E: 
//S: Todos los recordatorios
router.get('/', async(req, res) => {
    try {
        const reminder = await Reminder.find();

        res.json(reminder);
    } catch (error) {
        res.json('ERROR');
    }

});



/* //GET de un user en especifico
//E: username 
//S: User sin password
router.get('/:username', async(req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        console.log(user);
        res.json(user);
    } catch (error) {
        res.json('Error SOS!!');
    }

}); */



//DELETE de un recordatorio
//E: username y reason
//S: recordatorio eliminado 
router.delete('/', async(req, res) => {
    try {
        //busco por username y motivo
        const findReminder = await Reminder.findOne({ username: req.body.username, reason: req.body.reason });
        if (findReminder != null) {
            const removeReminder = await Reminder.findOneAndRemove({ _id: findReminder._id });
            res.json(removeReminder);
        } else {
            res.json({ message: "Error. Este reminder no está en la base de datos" });
        }

    } catch (error) {
        res.json({ message: error });
    }

});


//POST (Insert)
//E: info para un nuevo recordatorio
//S: recordatorio creado
router.post('/', async(req, res) => {
    try {
        
        const findReminder = await Reminder.findOne({ username: req.body.username, reason: req.body.reason });
        
        if (findReminder == null) {
            const reminder = new Reminder({
                username: req.body.username,
                reason: req.body.reason,
                day: req.body.day,
                repeat: req.body.repeat
            });

            await reminder.save(function(err) {
                if (err) {
                    res.json('ERROR');
                } else {
                    savedReminder = reminder.toObject();
                    res.json(savedReminder);
                }
            }); //metodo de mongoose para guardar 

        } else
            res.json('Error1')
    } catch {
        res.json('Error2');
    }
});



module.exports = router;