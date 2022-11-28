import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header(props) {
    const [pesquisa, setPesquisa] = useState('');
    const {ativado, setAtivado} = props
    return (
        <HeaderContainer>
            <IconContainer>
                <Icon> <ion-icon name="menu"></ion-icon></Icon>
                <Logo>LIVRE-SE</Logo>
                <MiniContainer>
                    <Link to="/login"><Icon><ion-icon name="person"></ion-icon></Icon></Link>
                    <Icon onClick={() => setAtivado(!ativado)}><ion-icon name="cart"></ion-icon></Icon>
                </MiniContainer>
            </IconContainer>
            <InputSearchBar
                type="text" placeholder="  O que você está buscando?" value={pesquisa} onChange={e => setPesquisa(e.target.value)}>
            </InputSearchBar>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.div`
width: 100%;
height: 100px;
background-color: #595757;
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
top:0;
left: 0;
//#72B5A4;
`
const IconContainer = styled.span`
width: 303px;
height: 50px;
display:  flex;
justify-content: space-between;
align-items: center;

a {
    text-decoration: none;
    color:#000000
}

`
const MiniContainer = styled.div`
display: flex;
`
const Icon = styled.div`
font-size: 26px;
margin-right: 5px;
`
const InputSearchBar = styled.input`
box-sizing: border-box;
width: 303px;
height: 45px;
margin-bottom: 16px;
background: #dbdbdb;
border: 1px solid #D5D5D5;
border-radius: 5px;
padding-left: 5px;
::placeholder{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7E7E7E;

}
`
const Logo = styled.div`
font-size: 32px;
font-family: 'Nerko One', cursive;
`