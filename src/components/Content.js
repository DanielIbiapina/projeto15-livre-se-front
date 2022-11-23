import styled from "styled-components";

export default function Content(){
    return(
        <>
        <ContentContainer>
            <Session>
                <SessionName>Destaques do mês</SessionName>
                <BookCardContainer>
                <BookCard>
                    <BookImage> <img src = "https://i.zst.com.br/thumbs/12/e/14/1458554473.jpg"/> </BookImage>
                    <BookName> Game of Thrones</BookName>
                    <BookPrice> R$ 50,00</BookPrice>
                    <ButtonComprar>Comprar</ButtonComprar>
                </BookCard>
                <BookCard>
                    <BookImage> <img src = "https://i.zst.com.br/thumbs/12/e/14/1458554473.jpg"/> </BookImage>
                    <BookName> Game of Thrones</BookName>
                    <BookPrice> R$ 50,00</BookPrice>
                    <ButtonComprar>Comprar</ButtonComprar>
                </BookCard>
                <BookCard>
                    <BookImage> <img src = "https://i.zst.com.br/thumbs/12/e/14/1458554473.jpg"/> </BookImage>
                    <BookName> Game of Thrones</BookName>
                    <BookPrice> R$ 50,00</BookPrice>
                    <ButtonComprar>Comprar</ButtonComprar>
                </BookCard>
                
                </BookCardContainer>
            </Session>
            <Session>
                <SessionName>Ofertas</SessionName>
                <BookCardContainer>
                <BookCard>
                    <BookImage> <img src = "https://i.zst.com.br/thumbs/12/e/14/1458554473.jpg"/> </BookImage>
                    <BookName> Game of Thrones</BookName>
                    <BookPrice> R$ 50,00</BookPrice>
                    <ButtonComprar>Comprar</ButtonComprar>
                </BookCard>
                <BookCard>
                    <BookImage> <img src = "https://i.zst.com.br/thumbs/12/e/14/1458554473.jpg"/> </BookImage>
                    <BookName> Game of Thrones</BookName>
                    <BookPrice> R$ 50,00</BookPrice>
                    <ButtonComprar>Comprar</ButtonComprar>
                </BookCard>
                <BookCard>
                    <BookImage> <img src = "https://i.zst.com.br/thumbs/12/e/14/1458554473.jpg"/> </BookImage>
                    <BookName> Game of Thrones</BookName>
                    <BookPrice> R$ 50,00</BookPrice>
                    <ButtonComprar>Comprar</ButtonComprar>
                </BookCard>
                
                </BookCardContainer>
            </Session>
            <Session>
                <SessionName>Ficção científica</SessionName>
                <BookCardContainer>
                <BookCard>
                    <BookImage> <img src = "https://i.zst.com.br/thumbs/12/e/14/1458554473.jpg"/> </BookImage>
                    <BookName> Game of Thrones</BookName>
                    <BookPrice> R$ 50,00</BookPrice>
                    <ButtonComprar>Comprar</ButtonComprar>
                </BookCard>
                <BookCard>
                    <BookImage> <img src = "https://i.zst.com.br/thumbs/12/e/14/1458554473.jpg"/> </BookImage>
                    <BookName> Game of Thrones</BookName>
                    <BookPrice> R$ 50,00</BookPrice>
                    <ButtonComprar>Comprar</ButtonComprar>
                </BookCard>
                <BookCard>
                    <BookImage> <img src = "https://i.zst.com.br/thumbs/12/e/14/1458554473.jpg"/> </BookImage>
                    <BookName> Game of Thrones</BookName>
                    <BookPrice> R$ 50,00</BookPrice>
                    <ButtonComprar>Comprar</ButtonComprar>
                </BookCard>
                
                </BookCardContainer>
            </Session>
        </ContentContainer>
        </>
    );
}
const ContentContainer = styled.div`
width: 100%;
margin-top: 120px;
`
const Session = styled.div`
box-sizing: border-box;
width: 100%;
height: 350px;
margin-top: 20px;

`
const SessionName = styled.div`
font-size: 20px;
margin-left: 8px;
margin-bottom: 17px;
`
const BookCardContainer = styled.div`
display: flex;
overflow-x: scroll;
`
const BookCard = styled.div`
box-sizing: border-box;
width: 174px;
margin-left: 8px;
border-radius: 5px;
padding: 8px;
flex-shrink: 0;
`
const BookImage = styled.div`
box-sizing: border-box;
border-radius: 5px;
img{
    width: 100%;
    border-radius: 5px;
}
`
const BookName = styled.div`
box-sizing: border-box;
margin-bottom: 4px;
height: 40px;
`
const BookPrice = styled.div`

`
const ButtonComprar = styled.div`

height: 34px;
background: #72B5A4;
border-radius: 8px;
box-sizing: border-box;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
display: flex;
justify-content: center;
align-items: center;
color: #FFFFFF;
margin-top: 8px;
`