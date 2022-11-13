import React from "react";
import Accordion from "./Accordion";
import Header from "./Header";
import InputText from "./InputNews";
// import Busca from "./Busca";

const itens = [
  {
    titulo: "Java",
    texto: "Linguagem compilada e interpretada.",
    autor: "guizao",
    data: "06/11/2022",
  },
  {
    titulo: "Java",
    texto: "Linguagem compilada e interpretada.",
    autor: "guizao",
    data: "06/11/2022",
  },
  {
    titulo: "Java",
    texto: "Linguagem compilada e interpretada.",
    autor: "guizao",
    data: "06/11/2022",
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Accordion itens={itens} />
      <InputText />
    </div>
  );
};

export default App;
