import Login from "./Login";
import Cadastro from "./Cadastro";
import Histórico from "./Histórico";
import Hoje from "./Hoje";
import Hábitos from "./Hábitos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
    const [add,setAdd]=useState("none")

    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Login/>}/>
               <Route path="/cadastro" element={<Cadastro/>} />
               <Route path="/historico" element={<Histórico/>}/>
               <Route path="/hoje" element={<Hoje />}/>
               <Route path="/habitos" element={<Hábitos add={add} setAdd={setAdd}/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}
