import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalStyle from "./Assets/Css/GlobalStyle";

export default function Cadastro() {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const navigate = useNavigate();

   function sendData(e) {
    e.preventDefault();

    const body = {
      name: name,
      email: email,
      password: password,
    };

    const promise = axios.post(
      "https://livre-se-api.onrender.com/sign-up",
      body
    );

    promise.then(() => navigate("/login"));

    promise.catch((err) => console.log("Deu erro no cadastro"));
  }

  return (
    <SignUp>
    <GlobalStyle />
      <h1>Criar cadastro</h1>
      <form onSubmit={sendData}>
        <label htmlFor="name">Nome completo</label>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Cadastrar</button>
      </form>

      <p>Já tem cadastro? <Link to={"/login"}> Entrar </Link></p>
    </SignUp>
  );
}

const SignUp = styled.div`
 background-color: #595757;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`