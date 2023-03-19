import styled from "styled-components"
import { Link } from "react-router-dom"
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
   import "react-circular-progressbar/dist/styles.css";
import UserContext from "./Contexts/UserContext"
import { useContext } from "react"
import axios from "axios";
import { useEffect } from "react";
import TodayContext from "./Contexts/TodayContext";

export default function Hoje(){
    const {foto}= useContext(UserContext);
    const {token}= useContext(UserContext);
    const {today}= useContext(TodayContext)
    const {setToday}= useContext(TodayContext)


    useEffect(()=> {const promise=axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",{
        headers: { Authorization: `Bearer ${token}` }
    }); promise.then((response)=>{setToday(response.data)})})
    
    return(
        <div>
        <Header data-test="header">
            <Title>TrackIt</Title>
            <img src={foto} alt="perfil"/>
        </Header>
        <Body>
            <First>
                <Text1 data-test="today">Segunda, 17/05</Text1>
            </First>
            <Text2 data-test="today-counter">Nenhum hábito concluído ainda</Text2>
            <div>{today.map((h)=>(<Habito><Habito1><div>Sequência atual:{h.currentSequence} dias</div><div>Seu recorde: {h.highestSequence} dias</div></Habito1><Check></Check></Habito>))}</div>
        </Body>
        <Footer data-test="menu">
            <Link  data-test="habit-link" to="/habitos"><Text3>Hábitos</Text3></Link>
            <Container data-test="today-link"> 
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
color: #52B6FF;

`

const Habito=styled.div `
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
flex-direction:row;`

const Habito1=styled.div `
width: 146px;
height: 32px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 12.976px;
line-height: 16px;
color: #666666;`;

const Check= styled.div `
box-sizing: border-box;
position: absolute;
width: 69px;
height: 69px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;`;