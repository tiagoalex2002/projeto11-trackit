import Login from "./Login";
import Cadastro from "./Cadastro";
import Histórico from "./Histórico";
import Hoje from "./Hoje";
import Hábitos from "./Hábitos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
    const [add,setAdd]=useState("none")
    const [email,setEmail]=useState("")
    const [nome, setNome]= useState("")
    const [foto,setFoto] = useState("")
    const [senha,setSenha]= useState("")

    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Login/>}/>
               <Route path="/cadastro" element={<Cadastro email={email} setEmail={setEmail} nome={nome} setNome={setNome} senha={senha} setSenha={setSenha} foto={foto} setFoto={setFoto}/>} />
               <Route path="/historico" element={<Histórico/>}/>
               <Route path="/hoje" element={<Hoje />}/>
               <Route path="/habitos" element={<Hábitos add={add} setAdd={setAdd}/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}
