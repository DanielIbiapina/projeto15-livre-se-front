import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Login from "./Login";
import { useState, useNavigate, useEffect, useContext } from "react";
import Home from "./Home";
import Carrinho from "./Carrinho";
import UserProvider from "./Context/User";
import Contexto from "./Context/Contexto";
import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import ResumoCompra from "./ResumoCompra";



export default function App() {
    const [token, setToken] = useState(null);
    const [bookCarrinho, setBookCarrinho] = useState([])
    const [valorTotal, setValorTotal] = useState(0)
    
    function setAndPersistToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}
    

console.log(token)

    return(
       <Contexto.Provider value={{token, setToken, setAndPersistToken, bookCarrinho, setBookCarrinho, valorTotal, setValorTotal}}>
       <UserProvider>
        <BrowserRouter>
            <Routes>
            <Route path="/"  element={ <Home/> } />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/resumocompra" element={<ResumoCompra/>} />
            </Routes>
        </BrowserRouter>
        </UserProvider>
        </Contexto.Provider>
        
    );
    
}

