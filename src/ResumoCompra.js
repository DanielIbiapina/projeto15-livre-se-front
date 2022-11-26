import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Contexto from "./Context/Contexto";
import { Link } from "react-router-dom";

export default function ResumoCompra() {
    const [booksCarrinho, setBooksCarrinho] = useState("")
    const { valorTotal } = useContext(Contexto);

    useEffect(() => {
    const promise = axios.get("http://localhost:5000/carrinho")
        
        promise.then((res) => {
            console.log('livro do carrinho resgatado')
            console.log(res.data)
            setBooksCarrinho(res.data)
        });

        promise.catch((err) => console.log(err.response.data));
    }, []);

    if(booksCarrinho === ""){
        return 'carregando...'
    }
console.log(booksCarrinho)
    return(
        <>
      <Header>
        livre-se
      </Header>
      <Main>
      {booksCarrinho.map((b) => (
        <BookCard>
          <BookImage>
            {" "}
            <img src={b.image} alt="poster do filme"/>{" "}
          </BookImage>
          <div>
          <BookName> {b.title}</BookName>
          <BookPrice> R$ {b.price}</BookPrice>
          </div>
        </BookCard>
      ))}
      Total: R$ {valorTotal}
      <p> <Link to={"/home"}> Escolher mais produtos </Link></p>
      </Main>
      <Footer>
        Fechar pedido
      </Footer>
    </>
    );
}


const Header = styled.div`
position: fixed;
top:0;
left: 0;
width: 100%;
height: 80px;
background-color: #595757;
`

const Main = styled.div`
margin-top: 80px;
margin-bottom: 80px;
`
const BookCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 230px;
  margin-left: 0spx;
  margin-right: 8px;
  border-radius: 5px;
  padding: 8px;
  flex-shrink: 0;
  display: flex;
  background-color: red;
`;
const BookImage = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  background-color: aliceblue;
  width: 174px;
  height: 200px;
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
const Footer= styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 80px;
background-color: #595757;
`