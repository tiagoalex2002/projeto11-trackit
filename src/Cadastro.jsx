import styled from "styled-components"
import  foto from "./logo-completa.svg"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Cadastro(props){

    const navigate = useNavigate()

    function SignUp(event){
        event.preventDefault();

        const requisition= axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", { email: props.email, password: props.senha, name: props.nome, image: props.foto})
        requisition.then(() => navigate("/"))
    }
    return(
        <Background>
         <form onSubmit={SignUp}>
            <img src={foto} alt="logo"/>
            <div><input type="email" value={props.email} required placeholder="email" onChange={e => props.setEmail(e.target.value)}/></div>
            <br></br>
            <div><input type="text" value={props.senha} required placeholder="senha" onChange={e => props.setSenha(e.target.value)}/></div>
            <br></br>
            <div><input type="text" value={props.nome} required placeholder="nome" onChange={e => props.setNome(e.target.value)}/></div>
            <br></br>
            <div><input type="url" value={props.foto} required placeholder="foto" onChange={e => props.setFoto(e.target.value)}/></div>
            <br></br>
            <button type="submit" data-test="signup-btn">Cadastrar</button>
         </form>
            
            <Link to="/">Já tem uma conta? Faça login!</Link>
            
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