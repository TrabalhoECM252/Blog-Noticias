const express = require('express');
const axios = require('axios');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


const eventos = [];

app.post('/eventos', (req, res) => {
    const evento = req.body;
    eventos.push(evento);

    // envia o evento para o microserviço de noticias
    axios.post('http://localhost:3000/eventos', evento)
    .catch((err) => {console.log("Serviço de Notícias indisponível")});

    // envia o evento para o microserviço de usuarios
    axios.post('http://localhost:4000/eventos', evento)
    .catch((err) => {console.log("Serviço de Usuários indisponível")});
    

    res.status(200).send({msg: "ok"});

});

app.get('/eventos', (req, res) => {
    res.send(eventos);
});

app.listen(10000, () => {
    console.log('Barramento de eventos. Porta 10000');
})
