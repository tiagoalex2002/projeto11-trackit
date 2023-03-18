import styled from "styled-components"
import  foto from "./logo-completa.svg"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import UserContext from "./Contexts/UserContext"
import { ProviderUser } from "./Contexts/UserContext"
import { useContext } from "react"


export default function Login(){

    const {email}= useContext(UserContext)
    const {setEmail}= useContext(UserContext)
    const {senha} = useContext(UserContext)
    const {setSenha}= useContext(UserContext)
    const {setToken}= useContext(UserContext)

    const navigate = useNavigate()

    function Subscribe(event){
        event.preventDefault();
        const requisition= axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", { email: email, password: senha}); 
        requisition.then((response) => {navigate("/hoje");
        setToken(response.token)})
    }

    return(

     <ProviderUser>
        <Background>
            <img src={foto} alt="logo"/>
            <form onSubmit={Subscribe}>
               <div><input type="email" required value={email} placeholder="email" onChange={e => setEmail(e.target.value)}/></div>
               <br></br>
               <div><input type="text" required value={senha} placeholder="senha" onChange={e => setSenha(e.target.value)}/></div>
               <br></br>
               <button type="submit" data-test="login-btn">Entrar</button>
            </form>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
            
        </Background>
     </ProviderUser>
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