import React from "react";
import "./Login.css";
import Footer from "../../Footer/Footer";
import imagemLogo from "../../Header/Assets/logo.png";
import imagemTenis_1 from "./Assets/image_1a.png";
import imagemTenis_2 from "./Assets/imagem_1b.png";

function Login() {
  return (
    <>
      <section className="Login-header">
        <img src={imagemLogo} alt="logo" />
      </section>
      <section>
        <div>
          <h1>Acesse sua conta</h1>
          <p>Novo cliente? Então registre-se </p>
          <a href="#">aqui.</a>
          <p>Login*</p>
          <input type="text" />
          <p>Senha*</p>
          <input type="text" />
          <a href="#">Esqueci minha senha</a>
          <button>Acessar Conta</button>
          <p>Ou faça login com</p>
        </div>
        <div>
          <img src={imagemTenis_1} alt="tenis" />
          <img src={imagemTenis_2} alt="tenis" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
