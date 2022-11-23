import styled from "styled-components";
import BookCards from "./BookCards";

export default function Content(){
    return(
        <>
        <ContentContainer>
            <Session>
                <SessionName>Destaques do mês</SessionName>
                <BookCards/>
            </Session>
            <Session>
                <SessionName>Ofertas</SessionName>
                <BookCards/>
            </Session>
            <Session>
                <SessionName>Ficção científica</SessionName>
                <BookCards/>
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

