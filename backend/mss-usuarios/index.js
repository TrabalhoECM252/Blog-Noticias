require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const Usuario = require('./models/usuario');
const mongoose = require('mongoose')

const app = express();
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

app.get('/api/usuarios', (req, res, next) => {
    Usuario.find().then((documents) => {
        res.status(200).json({
            mensagem: 'Tudo OK',
            usuarios: documents
        });
    })
});


app.post('/api/noticias', (req, res, next) => {
    const usuario = new Usuario(req.body)

    usuario.save().then(usuarioInserido => {
        res.status(201).json({
            mensagem: 'usuario inserido',
            id: usuarioInserido._id
        });
    })
});


app.listen(4000, () => {
    console.log('Usuarios. Porta 4000')
});

