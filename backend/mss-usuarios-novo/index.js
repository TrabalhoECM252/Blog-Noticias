require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const Usuario = require('./models/usuario');
const mongoose = require('mongoose')
const axios = require ('axios');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use(bodyParser.json());

const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_CLUSTER,
    MONGODB_HOST,
    MONGODB_DATABASE
} = process.env

mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.${MONGODB_HOST}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conexão OK")
    })
    .catch((e) => {
        console.log("Conexão NOK: " + e)
    })


// login endpoint
app.post("api/usuarios/login", (request, response) => {
    console.log(request.body);
    // check if email exists
    Usuario.findOne({ email: request.body.email })
        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            /**
            bcrypt
                .compare(request.body.password, user.password)
            */
            console.log(request.body);
            console.log(user.password);
            (request.body.password == user.password ? passwordCheck = true : passwordCheck = false)
                // if the passwords match
                .then((passwordCheck) => {

                    // check if password matches
                    if (!passwordCheck) {
                        return response.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    }

                    //   create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );

                    //   return success response
                    response.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    });
                })
                // catch error if password does not match
                .catch((error) => {
                    response.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
        // catch error if email does not exist
        .catch((e) => {
            response.status(404).send({
                message: "Email not found",
                e,
            });
        });
});


app.post('/api/usuarios/register', async (req, res, next) => {
    const senhaCriptografada = await bcrypt.hash(req.body.senha, 10);

    const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaCriptografada
    })
    
    await axios.post('http://localhost:10000/eventos/usuarios', {
        tipo: "UsuarioCriado",
        dados: {
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha
        }

    });

    res.status(200).send({ mensagem: "ok" });
});


app.post('/eventos', (req, res) => {
    const usuario = new Usuario(req.body.dados)
    // console.log(noticia);

    usuario.save().then(usuarioInserido => {
        res.status(201).json({
            mensagem: 'usuario inserido',
            id: usuarioInserido._id
        });
    });

});


app.listen(4000, () => {
    console.log('Usuarios. Porta 4000')
});

