require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const Noticia = require("./models/noticia");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

contador = 0;

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_CLUSTER,
  MONGODB_HOST,
  MONGODB_DATABASE,
} = process.env;

mongoose
  .connect(
    `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.${MONGODB_HOST}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conexão OK");
  })
  .catch((e) => {
    console.log("Conexão NOK: " + e);
  });

app.get("/api/noticias", (req, res, next) => {
  Noticia.find().then((documents) => {
    res.status(200).json({
      mensagem: "Tudo OK",
      noticias: documents,
    });
  });
});

app.post("/api/noticias", async (req, res, next) => {
  const noticia = new Noticia(req.body);

  await axios.post("http://localhost:10000/eventos/noticias", {
    tipo: "NoticiaCriada",
    dados: {
      titulo: noticia.titulo,
      texto: noticia.texto,
      autor: noticia.autor,
    },
  });

  res.status(200).send({ mensagem: "ok" });
});

app.post("/eventos", (req, res) => {
  const noticia = new Noticia(req.body.dados);
  // console.log(noticia);

  noticia.save().then((noticiasInserida) => {
    res.status(201).json({
      mensagem: "noticia inserida",
      id: noticiasInserida._id,
    });
  });
});

app.listen(3000, () => {
  console.log("Noticias. Porta 3000");
});
