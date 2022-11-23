import styled from "styled-components";
import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Carrinho from "./Carrinho";

export default function Home() {

    const [ativado, setAtivado] = useState(false)

    return (
        <>
        { ativado ? 
        <Carrinho ativado = {ativado} setAtivado = {setAtivado}/> : <></>}
        <Header ativado = {ativado} setAtivado = {setAtivado}/>
        <Content/>
        </>
    );
}



