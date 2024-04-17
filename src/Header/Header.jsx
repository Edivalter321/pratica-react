import "./Header.css";
import imagemLogo from "../Header/Assets/logo.png";
import imagemSearch from "../Header/Assets/search.png";
import imagemCarrinho from "../Header/Assets/carrinho.png";
import imagemNumero from "../Header/Assets/2.png";
function Header() {
  return (
    <>
      <section className="Pai">
        <div className="Topo">
          <img className="logo" src={imagemLogo} alt="logo" />
          <input
            className="inputss"
            type="text"
            placeholder="Pesquisar produto..."
          />
          <img className="search" src={imagemSearch} alt="search" />
          <a className="ancora" href="../Pages/Login/Login.jsx">
            Cadastre-se
          </a>
          <input className="botao" type="button" value="Entrar" />
          <img className="carrinho" src={imagemCarrinho} alt="carrinho" />
          <div className="oneone">
            <img src={imagemNumero} alt="numero" className="one" />
          </div>
        </div>
        <nav className="barra">
          <a className="home" href="#">
            Home
          </a>
          <a className="menus" href="#">
            Produtos
          </a>
          <a className="menus" href="#">
            Categorias
          </a>
          <a className="menus" href="#">
            Meus Pedidos
          </a>
        </nav>
      </section>
      
    </>
  );
}

export default Header;
