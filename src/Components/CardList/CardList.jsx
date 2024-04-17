import React from "react";
import Card from "../Card/Card";

export function CardList() {


  const produtos = [
    {
      id: 1,
      desconto: "30% OFF",
      path: "(../../Conteudo/Assets/tennis_01.png)",
      title: "Tênis",
      subtitle: "K-Swiss V8 - Masculino",
      preco: 100,
    },
    {
      id: 2,
      desconto: "30% OFF",
      path: "../../Conteudo/Assets/tennis_01.png",
      title: "Tênis",
      subtitle: "K-Swiss V8 - Masculino",
      preco: 100,
    },
  ];

  return (
    <>
      {produtos.map((produto) => (
        <Card
          key={produto.id}
          desconto={produto.desconto}
          path={produto.path}
          title={produto.title}
          subtitle={produto.subtitle}
          preco={produto.preco}
        />
      ))}
    </>
  );
}

