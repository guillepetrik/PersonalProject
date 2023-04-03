const {userModel} = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const secret_key = "Esta es mi llave secreta";
const bcrypt = require("bcrypt");

module.exports.register = (req, res) => {
    const user = new userModel(req.body);
    user.save()
        .then(usuario => {
            console.log("SAVED", usuario);
            const payload = {
                _id: usuario._id
            }
            //Guardar al usuario en una cookie
            const myJWT = jwt.sign(payload, secret_key);
            res.cookie("usertoken", myJWT, secret_key, {
                httpOnly: true
            })
                .json(usuario)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}

module.exports.login = (req, res) => {
    userModel.findOne({ email: req.body.email })
        .then(user => {
            if (user === null) {
                res.status(500);
                res.json({ email: { message: "El correo electrónico es incorrecto." } });
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordValid => {
                        if (passwordValid) {
                            const payload = {
                                _id: user._id
                            }
                            const myJWT = jwt.sign(payload, secret_key);
                            res.cookie("usertoken", myJWT, secret_key, {
                                httpOnly: true,
                                sameSite: 'strict'
                            })
                                .json(user)
                        } else {
                            res.status(500);
                            res.json({ password: { message: "La contraseña es incorrecta." } })
                        }
                    })
                    .catch(err => res.json({ error: true, message: "Inicio de sesión inválido." }))
            }
        })
        .catch(err => res.json(err));
}

    module.exports.logout = (req, res) => {
        res.clearCookie('usertoken');
        res.cookie('usertoken', 'none', {
            expires: new Date(Date.now() + 5 * 1000),
            httpOnly: true,
        })
        res.status(200).json({ message: "Salimos de sesión!" });
    }

module.exports.get_all = (req, res) => {
    userModel.find()
        .then(usuarios => res.json({ message: usuarios }))
        .catch(err => res.status(400).json({ message: err }));
}