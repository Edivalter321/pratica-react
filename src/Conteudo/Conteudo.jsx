import "./Conteudo.css";
import imagemTenis from "./Assets/tennis_g.png";
import imagemOrnament from "./Assets/Ornament 11.png";
import imagemFogo from "./Assets/fogo.png";
import imagemPontos from "./Assets/pontos.png";

function Conteudo() {
  return (
    <>
      <div className="corpo">
        <div className="caixa_01">
          <div className="caixa_a">
            <p className="oferta">Melhores ofertas personalizadas</p>
            <h2 className="queima">Queima de estoque Nike</h2>
            <img className="fogo" src={imagemFogo} alt="imagem_de_fogo" />
            <p className="paragrafo_01">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
              nesciunt. Autem modi molestias corporis nesciunt.
            </p>
            <button className="botao_02" type="button">
              Ver ofertas
            </button>
          </div>
          <div className="caixa_b">
            <img className="tenis_a" src={imagemTenis} alt="tênis" />
            <img className="ornament" src={imagemOrnament} alt="ornament" />
          </div>
        </div>
        <div className="pontos_1">
          <img src={imagemPontos} alt="pontos" className="pontos" />
        </div>
      </div>
      <div className="caixa_02">
        <p className="">Coleção em Destaque</p>
        <div className="caixas">
          <div className="caixas_01"></div>
          <div className="caixas_02"></div>
          <div className="caixas_02"></div>
        </div>
      </div>
    </>
  );
}

export default Conteudo;
