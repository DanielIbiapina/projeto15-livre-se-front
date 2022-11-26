import styled from "styled-components";
import Contexto from "./Context/Contexto";
import { useContext } from "react";
import Bookcard from "./components/BookCards";
import { Navigate, useNavigate } from "react-router-dom";

export default function Carrinho(props) {
    const { ativado, setAtivado } = props
    const { valorTotal, setValorTotal, bookCarrinho } = useContext(Contexto);
    const navigate = useNavigate()
    console.log(bookCarrinho)
    console.log(valorTotal)

    function finalizarCompra() {
        console.log('compra finalizada')
        navigate("/resumocompra")
    }

    return (
        <>
            <FundoTransparente></FundoTransparente>
            <Aside>
                <TopBar>
                    <Icon><ion-icon name="cart-outline"></ion-icon></Icon>
                    Minha cesta
                    <Icon onClick={() => setAtivado(!ativado)}><ion-icon name="close-outline"></ion-icon></Icon>
                </TopBar>
                <Main>
                    {bookCarrinho.map((book) => (
                        <BookContainer>
                            <img src={book.image} />
                            <h1>{book.title}</h1>
                            <h1>{book.price}</h1>
                        </BookContainer>
                    ))}


                </Main>
                <BotBar>
                    Total: {valorTotal}
                    <ButtonComprar onClick={finalizarCompra}>Finalizar compra</ButtonComprar>
                </BotBar>
            </Aside>
        </>
    );
}

const FundoTransparente = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vmax;
height: 100vmax;
background-color: rgba(0, 0, 0, 0.5);
z-index: 2;
`
const Aside = styled.aside`
position: fixed;
width: 200px;
height: 100%;
z-index: 3;
right: 0;
top: 0;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #FFFFFF;


`
const TopBar = styled.div`
background-color: #595757;
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 50px;
font-size: 20px;

`
const Icon = styled.div`
font-size: 30px;
`
const BotBar = styled.div`

width: 100%;
height: 75px;
display: flex;
flex-direction: column;
align-items: center;
border-top: 2px solid #595757;
background-color: #FFFFFF;

`
const Main = styled.div`
height: 100%;
overflow-y: scroll ;
img{
    width: 50px;
}
h1{
    font-size: 10px;
}
`
const BookContainer = styled.div`
flex-shrink: 0;
`

const ButtonComprar = styled.div`
  height: 30px;
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