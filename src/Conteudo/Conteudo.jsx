import "./Conteudo.css";
import imagemTenis from "./Assets/tennis_g.png";
import imagemOrnament from "./Assets/Ornament 11.png";
import imagemFogo from "./Assets/fogo.png";
import imagemPontos from "./Assets/pontos.png";
import imagemCamisa from "./Assets/Mask group.png";
import imagemTennis from "./Assets/tennis_02.png";
import imagemHeaderPhone from "./Assets/headerphone.png";

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
        <p className="colecao">Coleção em destaque</p>
        <div className="caixas">
          <div className="caixas_a">
            <p className="yelow">30% OFF</p>
            <h3 className="preco">Novo Drop Supreme</h3>
            <button className="botao_compra">Comprar</button>
            <img src={imagemCamisa} alt="camisa" className="imagem" />
          </div>
          <div className="caixas_a">
            <p className="yelow">30% OFF</p>
            <h3 className="preco">Coleção Adidas</h3>
            <button className="botao_compra">Comprar</button>
            <img src={imagemTennis} alt="tenis" className="imagem" />
          </div>

          <div className="caixas_a">
            <p className="yelow">30% OFF</p>
            <h3 className="preco">Novo Beats Bass</h3>
            <button className="botao_compra">Comprar</button>
            <img src={imagemHeaderPhone} alt="headPhone" className="imagem" />
          </div>
        </div>
      </div>
      <div className="caixa_03">
        <p className="colecao_02">Coleção em destaque</p>
      </div>
    </>
  );
}

export default Conteudo;
