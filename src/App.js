
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
           <NavContainer>CINEFLEX</NavContainer>
            <Routes>
               <Route path="/" element={<Login/>}/>
               <Route path="/cadastro" element={<Cadastro/>} />
               <Route path="/historico" element={<Histórico/>}/>
               <Route path="/hoje" element={<Hoje />}/>
               <Route path="/habitos" elemento={<Hábitos/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
