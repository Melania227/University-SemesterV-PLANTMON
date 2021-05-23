const { response } = require('express');
const express = require('express');
const { remove } = require('../Models/Users');
const router = express.Router();
const User = require('../Models/Users');
const crypto = require('crypto');



//GET 
//E: 
//S: Todos los users 
router.get('/', async(req, res) => {
    try {
        const user = await User.find();

        res.json(user);
    } catch (error) {
        res.json('ERROR');
    }

});



/* //GET 
//E: 
//S: Get List 
router.get('/list', async(req, res) => {
    try {
        const user = await User.find();
        resultado = []
        user.forEach(element => {
            resultado.push(element.username);
        });


        res.json(resultado);
    } catch (error) {
        res.json({ message: error });
    }

}); */



//GET de un user en especifico
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

});


/* //GET de employees
//E:  
//S: Los users que sean employees
router.get('/employees', async(req, res) => {
    try {
        const user = await User.find({ type: "Employee" }, { password: 0 });
        console.log(user);
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }

});

//GET de admins
//E:  
//S: Los users que sean administradores
router.get('/admins', async(req, res) => {
    try {
        const user = await User.find({ type: "Admin" }, { password: 0 });
        console.log(user);
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }

});

//GET logIn de un user
//E: username, password 
//S: User sin password
router.post('/logIn', async(req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(401).send('The username doen\' exists');
    if (user.password !== password) return res.status(401).send('Wrong Password');

    return res.status(200).json({ "username": user.username, "type": user.type });
});*/

//DELETE de un user
//E: username
//S: User 
router.delete('/', async(req, res) => {
    try {
        const findUser = await User.findOne({ username: req.body.username });
        if (findUser != null) {
            const removeUser = await User.findOneAndRemove({ _id: findUser._id });
            res.json(removeUser);
        } else {
            res.json({ message: "Error. Este username no está en la base de datos" });
        }

    } catch (error) {
        res.json({ message: error });
    }

});


//POST (Insert)
//E: User
//S: User sin password
router.post('/', async(req, res) => {
    try {
        const findUser = await User.findOne({ username: req.body.username });
        if (findUser == null) {
            let salt = crypto.randomBytes(16).toString('hex');
            let hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, 'sha512').toString('hex');
            const user = new User({
                username: req.body.username,
                salt: salt,
                hash: hash,
                type: req.body.type,
                creationDate: req.body.creationDate //ESPERAR A TENER EL FORMATO DE FECHA CORRECTO PARA INGRESAR FECHA NACIMIENTO
            });

            await user.save(function(err) {
                if (err) {
                    res.json('ERROR');
                } else {
                    saveUser = user.toObject();
                    delete saveUser.password;
                    res.json(saveUser);
                }
            }); //metodo de mongoose para guardar 

        } else
            res.json('Error1')
    } catch {
        res.json('Error2');
    }
});



module.exports = router;