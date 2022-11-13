import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function InputText() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [texto, setTexto] = useState("");
  const getTitulo = (titulo) => {
    setTitulo(titulo);
  };
  const getAutor = (autor) => {
    setAutor(autor);
  };
  const getTexto = (texto) => {
    setTexto(titulo);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          Escreva sua notícia!
        </Typography>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div>
                <TextField
                  id="std"
                  label="Titulo*"
                  variant="standard"
                  onChange={(titulo) => getTitulo(titulo.target.value)}
                />
              </div>
              <div>
                <TextField
                  id="std"
                  label="Autor*"
                  variant="standard"
                  onChange={(autor) => getAutor(autor.target.value)}
                />
              </div>
              <div>
                <TextField
                  id="std"
                  label="Texto*"
                  variant="standard"
                  onChange={(texto) => getTexto(texto.target.value)}
                />
              </div>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
