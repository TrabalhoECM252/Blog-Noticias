import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function InputNews() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [texto, setTexto] = useState("");

  const getTitulo = (titulo2) => {
    setTitulo(titulo2);
  };
  const getAutor = (autor2) => {
    setAutor(autor2);
  };
  const getTexto = (texto2) => {
    setTexto(texto2);
  };

  const publicarNoticia = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/noticias", {
        method: "POST",
        body: JSON.stringify({
          titulo: titulo,
          autor: autor,
          texto: texto,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      alignContent={"center"}
      alignItems="center"
    >
      <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
        Escreva sua notícia!
      </Typography>

      <TextField
        id="std"
        label="Titulo*"
        variant="standard"
        onChange={(titulo) => getTitulo(titulo.target.value)}
      />

      <TextField
        id="std"
        label="Autor*"
        variant="standard"
        onChange={(autor) => getAutor(autor.target.value)}
      />

      <TextField
        id="std"
        label="Texto*"
        variant="standard"
        onChange={(texto) => getTexto(texto.target.value)}
      />

      <Button variant="contained" color="primary" onClick={publicarNoticia}>
        Publicar
      </Button>
    </Stack>
  );
}
