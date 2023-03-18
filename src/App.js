import Login from "./Login";
import Cadastro from "./Cadastro";
import Histórico from "./Histórico";
import Hoje from "./Hoje";
import Hábitos from "./Hábitos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Contexts/UserContext";

export default function App() {

    const [email,setEmail]=useState("")
    const [nome, setNome]= useState("")
    const [foto,setFoto] = useState("")
    const [senha,setSenha]= useState("")
    const [token, setToken]= useState("")
    const [add,setAdd]=useState("none")
    const UserValue= {email: email, setEmail: setEmail,nome: nome, setNome: setNome,foto: foto, setFoto : setFoto,senha: senha,setSenha: setSenha,token: token,setToken: setToken}
    
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<UserContext.Provider value={UserValue}><Login/></UserContext.Provider>}/>
               <Route path="/cadastro" element={<UserContext.Provider value={UserValue}><Cadastro/></UserContext.Provider>} />
               <Route path="/historico" element={<UserContext.Provider value={UserValue}><Histórico/></UserContext.Provider>}/>
               <Route path="/hoje" element={<UserContext.Provider value={UserValue}><Hoje /></UserContext.Provider>}/>
               <Route path="/habitos" element={<UserContext.Provider value={UserValue}><Hábitos add={add} setAdd={setAdd}/></UserContext.Provider>}/>
            </Routes>
            
        </BrowserRouter>
    )
}
