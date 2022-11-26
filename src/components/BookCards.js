import styled from "styled-components";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Contexto from "../Context/Contexto";
import { useUser } from "../Context/User";



export default function Bookcard(props) {
  const books = props.books;

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
          <ButtonComprar>Comprar</ButtonComprar>
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
