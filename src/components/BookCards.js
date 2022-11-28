import styled from "styled-components";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Contexto from "../Context/Contexto";
import { useUser } from "../Context/User";



export default function Bookcard(props) {
  const books = props.books;
  const { token, setToken, setAndPersistToken, setBookCarrinho, bookCarrinho, valorTotal, setValorTotal } = useContext(Contexto);

  
  function addCarrinho(b){
    const novoArray = [...bookCarrinho, b]
    setBookCarrinho(novoArray)
    const saldo = [Number(valorTotal) + Number(b.price)]
    setValorTotal(saldo)
    console.log(b)
    console.log(b.price)

    const requisicao = axios.post("https://livre-se-api.onrender.com/carrinho", {
        title: b.title,
        image: b.image,
        price: b.price,
    })
        
        requisicao.then((res) => {
            console.log('livro add ao carrinho')
            console.log(res.data)

        });

        requisicao.catch((err) => console.log(err.response.data));

  }

  return (
    <BookCardContainer>
      {books.map((b) => (
        <BookCard>
          <BookImage>
            {" "}
            <img src={b.image} alt="poster do filme"/>{" "}
          </BookImage>
          <BookName> {b.title}</BookName>
          <BookPrice> R$ {b.price}</BookPrice>
          <ButtonComprar onClick={() => addCarrinho(b)}>Comprar</ButtonComprar>
        </BookCard>
      ))}
    </BookCardContainer>
  );

}

const BookCard = styled.div`
  box-sizing: border-box;
  width: 174px;
  height: 500px;
  margin-left: 8px;
  border-radius: 5px;
  padding: 8px;
  flex-shrink: 0;
`;
const BookImage = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  background-color: aliceblue;
  width: 174px;
  height: 280px;
  img {
    width: 150px;
    height: 200px;
    border-radius: 5px;
  }
`;
const BookName = styled.div`
  box-sizing: border-box;
  margin-bottom: 4px;
  height: 40px;
`;
const BookPrice = styled.div``;
const ButtonComprar = styled.div`
  height: 34px;
  background: #72b5a4;
  border-radius: 8px;
  box-sizing: border-box;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin-top: 8px;
`;

const BookCardContainer = styled.div`
  display: flex;
  overflow-x: scroll;
 
`;
