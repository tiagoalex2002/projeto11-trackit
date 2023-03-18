import styled from "styled-components"
import  image from "./logo-completa.svg"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import UserContext from "./Contexts/UserContext"
import { useContext } from "react"
import { ProviderUser } from "./Contexts/UserContext"


export default function Cadastro(){

    const {email}= useContext(UserContext)
    const {setEmail}= useContext(UserContext)
    const {nome}= useContext(UserContext)
    const {setNome}= useContext(UserContext)
    const {foto}= useContext(UserContext)
    const {setFoto}= useContext(UserContext)
    const {senha} = useContext(UserContext)
    const {setSenha}= useContext(UserContext)

    const navigate = useNavigate();

    function SignUp(event){
        event.preventDefault();
        const requisition= axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", { email: email, password: senha, name: nome, image: foto}); 
        requisition.then(() => navigate("/"))
    }
    return(
        <Background>
        <img src={image} alt="logo"/>
         <form onSubmit={SignUp}>
            <div><input data-test="email-input" type="email" value={email} required placeholder="email" onChange={e => setEmail(e.target.value)}/></div>
            <br></br>
            <div><input  data-test="password-input" type="text" value={senha} required placeholder="senha" onChange={e => setSenha(e.target.value)}/></div>
            <br></br>
            <div><input data-test="user-name-input" type="text" value={nome} required placeholder="nome" onChange={e => setNome(e.target.value)}/></div>
            <br></br>
            <div><input data-test="user-image-input" type="url" value={foto} required placeholder="foto" onChange={e => setFoto(e.target.value)}/></div>
            <br></br>
            <button type="submit" data-test="signup-btn">Cadastrar</button>
         </form>
            
            <Link data-test="login-link" to="/">Já tem uma conta? Faça login!</Link>
            
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