import styled from "styled-components";

export default function Carrinho(props) {
    const {ativado, setAtivado} = props
    return (
        <>
            <FundoTransparente></FundoTransparente>
            <Aside>
                <TopBar>
                    <Icon><ion-icon name="cart-outline"></ion-icon></Icon>
                    Minha cesta
                    <Icon onClick={() => setAtivado(!ativado)}><ion-icon name="close-outline"></ion-icon></Icon>
                </TopBar>
                <BotBar>
                    Total:
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
height: 50px;
display: flex;
align-items: center;
border-top: 2px solid #595757;
background-color: #FFFFFF;

`