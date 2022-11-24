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
      <Header>Criar cadastro</Header>
      <Form onSubmit={sendData}>
        <Label htmlFor="name">Nome completo</Label>
        <Input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button type="submit">Cadastrar</Button>
      </Form>

      <p>Já tem cadastro? <Link to={"/login"}> Entrar </Link></p>
    </SignUp>
  );
}

const SignUp = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 a{
  color:#ffffff
 }

 p {
  color:#ffffff;
  margin-top: 10px;
 }

`

const Header = styled.h1 `
  color: #ffffff;
  font-size: 32px;
  margin-top: 160px;
  margin-bottom: 25px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

`

const Label = styled.label`
  font-size: 20px;
  color: #ffffff;
`

const Input = styled.input`
  width: 320px;
  height: 50px;
  font-size: 20px;
  background-color: #dbdbdb;
  border-radius: 5px;
  margin:10px 0px;
  padding-left: 10px;
  border:none;
`

const Button = styled.button`
  width: 332px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #72B5A4;
  color:#ffffff;
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0px;

`