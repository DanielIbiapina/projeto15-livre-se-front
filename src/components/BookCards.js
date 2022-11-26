import styled from "styled-components";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Contexto from "../Context/Contexto";
import { useUser } from "../Context/User";


export default function Bookcard() {

    const [books, setBooks] = useState(null)
    const { setAndPersistToken, token, setToken } = useContext(Contexto);


    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.get("https://livre-se-api.onrender.com/books", config)
        promise.then(resposta => {
            console.log('livros resgatados!')
            console.log(resposta.data)
            setBooks(resposta.data)
        });
    }, []);

    if (books ===  null) {
        return 'carregando...';
    }

    /* return (
         
         <BodySubscriptions>
             <h1>Escolha seu Plano</h1>
             {planos.map((plano, index) => {
                     return (
                         <Plano plano={plano} key={index} />
                     )
                 }
                 )}
         </BodySubscriptions>
     );
 */
    return (
        <BookCardContainer>
            {books.books.map((book, index) => {
                return (
                    <BookCard>
                        <BookImage>
                            {" "}
                            <img src= {book.image} />{" "}
                        </BookImage>
                        <BookName> {book.name}</BookName>
                        <BookPrice> R$ {book.price}</BookPrice>
                        <ButtonComprar>Comprar</ButtonComprar>
                    </BookCard>
                )
            }
            )}
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
    width: 100%;
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
