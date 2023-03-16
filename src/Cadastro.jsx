import styled from "styled-components"
import  foto from "./logo-completa.svg"
import { Link } from "react-router-dom"



export default function Cadastro(){
    return(
        <Background>
            <img src={foto} alt="logo"/>
            <div><input placeholder="email"/></div>
            <br></br>
            <div><input placeholder="senha"/></div>
            <br></br>
            <div><input placeholder="nome"/></div>
            <br></br>
            <div><input placeholder="foto"/></div>
            <br></br>
            <Link to="/habitos"><button>Cadastrar</button></Link>
            <Link to="/cadastro">Já tem uma conta? Faça login!</Link>
            
        </Background>
    )
}

const Background= styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background:#FFFFFF;
img{
    margin-top: 70px;
    margin-bottom:33px;
}
input{
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB; 
    padding: 5px;
}
button{
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    width: 303px;
    height: 45px;
    margin-bottom: 30px;
}
display:flex;
align-items:center;
justify-content: center;`