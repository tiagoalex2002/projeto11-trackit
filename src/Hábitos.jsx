import styled from "styled-components"
import { Link } from "react-router-dom"
import dias from "./dias";
import { useState } from "react";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
   import "react-circular-progressbar/dist/styles.css";
import UserContext from "./Contexts/UserContext"
import { useContext } from "react"
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Hábitos(props){

    const {foto}= useContext(UserContext)

    const {token} = useContext(UserContext)

    const [name,setName]= useState("")
    const [days, setDays]= useState([])
    const [invalido,setInvalido]= useState(false)
    
    function Addition(){
        {props.setAdd("")}
    }

    function Cancel(){
        {props.setAdd("none")}
    }

    function ReqHábito(event){
        event.preventDefault();
        setInvalido(true)
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
        { name: name, days: days }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        request.then((response) => {setInvalido(false);
        props.setAdd("none")})
    }
    return(
    <div>
        <Header data-test="header">
            <Title>TrackIt</Title>
            <img src={foto} alt="perfil"/>
        </Header>
        <Body >
            <First>
                <Text1>Meus hábitos</Text1>
                <button data-test="habit-create-btn"  onClick={Addition}>+</button>
            </First>
            <ContainerAdd>
                <Add data-test="habit-create-container" add={props.add}>
                    <form onSubmit={ReqHábito}>
                      <input disabled={invalido} data-test="habit-name-input" placeholder="nome do hábito" type="text" required value={name} onChange={e => setName(e.target.value)}/>
                      <ContainerButton>{dias.map((i) => <Dias  data-test="habit-day"  onClick={() => setDays([...days, i.number])}>{i.dia}</Dias>)}</ContainerButton>
                      <Rizz>
                          <Cancelar data-test="habit-create-cancel-btn" onClick={Cancel}>Cancelar</Cancelar>
                          <Salvar disabled={invalido} data-test="habit-create-save-btn" type="submit">{invalido? <ThreeDots/>:"Salvar"} </Salvar>
                      </Rizz>
                    </form>
                </Add>
            </ContainerAdd>
            <Text2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text2>
        </Body>
        <Footer data-test="menu">
            <Link  data-test="habit-link" to="/habitos"><Text3>Hábitos</Text3></Link>
            <Container data-test="today-link" > 
             <CircularProgressbar value={67} text={`Hoje`} background  backgroundPadding={6}
             styles={buildStyles({
             backgroundColor: "#3e98c7",
             textColor: "#fff",
             pathColor: "#fff",
             trailColor: "transparent",
             width: "91px",
             height: "91px"
              })}
      /></Container>
           <Link  data-test="history-link"  to="/historico"><Text3>Histórico</Text3></Link>
        </Footer>

    </div>
        
    )
}

const Header= styled.header `
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
align-items: center;
flex-direction: row;
img{
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-left: 85%;
}`;

const Title=styled.div `
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;`

const Body= styled.div `
background: #E5E5E5;
height:527px;`

const First= styled.div `
display:flex;
flex-direction:row;
button{
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
    margin-left:82%;
}`

const Text1=styled.div `
width: 148px;
height: 29px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;`;

const Text2= styled.div `
width: 338px;
height: 74px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;`;

const Footer=styled.footer `
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 70px;
`

const Container=styled.div `
width: 91px;
height: 91px;
margin-left:38px;
margin-right:38px;`

const Text3= styled.div `
width: 68px;
height: 22px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;`;

const Add= styled.div `
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
display: ${props => props.add};
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
    margin-top:20px;
    margin-left: 4px;
}`;

const ContainerAdd= styled.div `
display:flex;
align-items:center;
justify-content: center;`

const ContainerButton=styled.div `
display:flex;
flex-direction:row;
`;

const Rizz= styled.div `
display:flex;
flex-direction:row;
justify-content: right;
align-items: center;
margin-top:30px;
`;

const Salvar= styled.button `
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
width: 84px;
height: 35px;
margin-left:15px;
margin-right:16px;
`;

const Cancelar=styled.button `
width: 85px;
height: 22px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
background: #FFFFFF;
margin-right: 25px;
border:none;`;

const Dias= styled.button `
width: 30px;
height: 30px;
margin-left:4px;
margin-right:4px;
margin-top:8px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;`
