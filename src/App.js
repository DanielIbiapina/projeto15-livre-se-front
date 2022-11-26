import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Login from "./Login";
import { useState, useNavigate, useEffect, useContext } from "react";
import Home from "./Home";
import Carrinho from "./Carrinho";
import UserProvider from "./Context/User";
import Contexto from "./Context/Contexto";



export default function App() {
    const [token, setToken] = useState(null);
    /*const tokenOnLocalStorage = localStorage.getItem("token");
    const listaSerializada = localStorage.getItem("lista");
    const lista = JSON.parse(listaSerializada);
    const [loginAutoPlanos, setLoginAutoPlanos] = useState(false)
    const [loginAutoHome, setLoginAutoHome] = useState(false)
    console.log(lista)
    console.log(tokenOnLocalStorage)

      
      useEffect(() => {
        setLoginAutoHome(false)
        setLoginAutoPlanos(false)
        if(tokenOnLocalStorage != null && lista.membership == null){
        
            setLoginAutoPlanos(true)
        }
        if(tokenOnLocalStorage != null && lista.membership != null){
            setLoginAutoHome(true)
        }
        
  }, []);


    
  
*/
    function setAndPersistToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}
    

console.log(token)

    return(
       <Contexto.Provider value={{token, setToken, setAndPersistToken}}>

       <UserProvider>
        <BrowserRouter>
            <Routes>
            <Route path="/"  element={ <Home/> } />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home/>} />
           
            </Routes>
        </BrowserRouter>
        </UserProvider>
        </Contexto.Provider>
        
    );
    
}

