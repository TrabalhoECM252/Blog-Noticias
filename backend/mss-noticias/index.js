require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const Noticia = require('./models/noticia');
const mongoose = require('mongoose')

const app = express();
app.use(bodyParser.json());

const noticias = [];
contador = 0;

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


app.get('/api/noticias', (req, res, next) => {
    Noticia.find().then((documents) => {
        res.status(200).json({
            mensagem: 'Tudo OK',
            noticias: documents
        });
    })
});


app.post('/api/noticias', (req, res, next) => {
    const noticia = new Noticia(req.body)

    noticia.save().then(notiInserido => {
        res.status(201).json({
            mensagem: 'noticia inserida',
            id: notiInserido._id
        });
    })
});


app.listen(3000, () => {
    console.log('Noticias. Porta 3000')
});