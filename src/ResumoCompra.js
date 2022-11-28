import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Contexto from "./Context/Contexto";
import { Link } from "react-router-dom";

export default function ResumoCompra() {
  const [booksCarrinho, setBooksCarrinho] = useState("")
  const { valorTotal, setValorTotal } = useContext(Contexto);
  let saldo = 0;

  useEffect(() => {
    const promise = axios.get("https://livre-se-api.onrender.com/carrinho")

    promise.then((res) => {
      console.log('livro do carrinho resgatado')
      console.log(res.data)
      setBooksCarrinho(res.data)
      somarSaldo(res.data)
    });

    promise.catch((err) => console.log(err.response.data));
  }, []);

  if (booksCarrinho === "") {
    return 'carregando...'
  }

  //functions:

  function somarSaldo(books) {
    books.map((book) => {
      console.log(book.price)
      saldo = saldo + Number(book.price)
      console.log(saldo)
      setValorTotal(saldo)
    })
  }

  function deleteBook(id) {
    if (!window.confirm("Você tem certeza que deseja deletar este livro?")) {
      return;
    }

    const promise = axios.delete(`https://livre-se-api.onrender.com/carrinho/${id}`)

    promise.then((res) => {
      console.log('livro deletado do carrinho')
    });

    promise.catch((err) => console.log(err.response.data));
  }

  console.log(booksCarrinho)
  
  return (
    <>
      <Header>
        LIVRE-SE
      </Header>
      <Main>
        {booksCarrinho.map((b) => (
          <BookCard>
            <BookImage>
              {" "}
              <img src={b.image} alt="poster do filme" />{" "}
            </BookImage>
            <MiniContainer>
              <BookName> {b.title}</BookName>
              <BookPrice> R$ {b.price.toFixed(2)}</BookPrice>
            </MiniContainer>
            <IconDelete onClick={() => deleteBook(b._id)}> 
              <ion-icon name="trash"></ion-icon> 
            </IconDelete>
          </BookCard>
        ))}
        Total: R$ {valorTotal.toFixed(2)}
        <p> <Link to={"/home"}> Escolher mais produtos </Link></p>
      </Main>
      <Link to={"/login"} >
        <Footer>
          Fechar pedido
        </Footer>
      </Link>
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
display: flex;
justify-content: center;
align-items: center;
font-size: 32px;
font-family: 'Nerko One', cursive;
z-index: 3;
`

const Main = styled.div`
margin-top: 80px;
margin-bottom: 95px;
text-align: center;

a{
  color: #000000;
}
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
  justify-content: space-between;
`;
const BookImage = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  width: 174px;
  height: 200px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.6);
  img {
    width: 150px;
    height: 200px;
    border-radius: 5px;
  }
`;
const BookName = styled.div`
  box-sizing: border-box;
  margin-bottom: 4px;
  width: 80px;
  text-align: start;
`;
const BookPrice = styled.div`
font-weight: 550;
`;
const MiniContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`

const Footer = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 80px;
background-color: #595757;
display: flex;
justify-content: center;
align-items: center;
font-size: 26px;
color: #000000;
box-shadow: -2px -2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const IconDelete = styled.div`
font-size: 30px;
`