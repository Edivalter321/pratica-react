import React from "react";
import "./Card.css";
import imagemTeNis from "../../Conteudo/Assets/tennis_01.png";
function Card() {
  return (
    <>
      <section className="card-area">
        <div className="cards_produto">
          <div className="card_img">
            <p className="yelows">30% OFF</p>
            <img className="TeNis" src={imagemTeNis} alt="tenis" />
          </div>
          <p className="titulo_a">Tênis</p>
          <p className="titulo_b">K-Swiss V8 - Masculino</p>
          <p className="titulo_c"><span>$200</span><strong>$100</strong></p>
        </div>
      </section>
    </>
  );
}
export default Card;
