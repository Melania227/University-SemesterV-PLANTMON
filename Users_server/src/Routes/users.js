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
        res.json({ message: error });
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
        res.json({ message: error });
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

});*/

//GET logIn de un user
//E: username, password 
//S: User sin password
router.post('/logIn', async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).send('The username doen\' exists');
    let salt = user.salt;
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    if (user.hash !== hash) return res.status(401).send('Wrong Password');
    return res.status(200).json({ "username": user.username, "type": user.type });
});

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
        //Toma el username del correo
        let indexInEmail = req.body.email.indexOf("@");
        let username = req.body.email.slice(0, indexInEmail);
        
        const findUser = await User.findOne({ username: username });
        
        if (findUser == null) {
            //Uso de cripto para cifrado del password
            let salt = crypto.randomBytes(16).toString('hex');
            let hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, 'sha512').toString('hex');

            const user = new User({
                username: username,
                email: req.body.email,
                salt: salt,
                hash: hash,
                type: req.body.type,
                birthDate: new Date(req.body.birthDate)
            });

            await user.save(function(err) {
                if (err) {
                    res.json({ message: err });
                } else {
                    saveUser = user.toObject();
                    delete saveUser.password;
                    res.json(saveUser);
                }
            }); //metodo de mongoose para guardar 

        } else
            res.status(401).send('Error');
    } catch {
        res.status(401).send('Error');
    }
});



module.exports = router;