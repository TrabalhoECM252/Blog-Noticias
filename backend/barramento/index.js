const express = require('express');
const axios = require('axios');

// const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());


const eventos = [];

app.post('/eventos/noticias', async (req, res) => {
    const evento = req.body;
    eventos.push(evento);

    // envia o evento para o microserviço de noticias
    await axios.post('http://localhost:3000/eventos', evento)
    .catch((err) => {console.log("Serviço de Notícias fora do ar" + err)});

    res.status(200).send({msg: "ok"});

});


app.post('/eventos/usuarios', async (req, res) => {
    const evento = req.body;
    eventos.push(evento);

    // envia o evento para o microserviço de usuarios
    await axios.post('http://localhost:4000/eventos', evento)
    .catch((err) => {console.log("Serviço de Usuários indisponível" + err)});

    res.status(200).send({msg: "ok"});

});


app.get('/eventos', (req, res) => {
    res.send(eventos);
});


app.listen(10000, () => {
    console.log('Barramento de eventos. Porta 10000');
})
