import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";
import Header from "./Header";
import InputNews from "./InputNews";
import api from "../service/NoticiasClient";

export default function App() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((response) => {
        setNoticias(response.data["noticias"]);
        console.log(response.data["noticias"]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <Header />
      <Accordion itens={noticias} />
      <InputNews />
    </div>
  );
}
