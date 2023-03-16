import styled from "styled-components"
import  foto from "./logo-completa.svg"
import { Link } from "react-router-dom"
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
   import "react-circular-progressbar/dist/styles.css";

export default function Histórico(){

    return(
        <div>
        <Header>
            <Title>TrackIt</Title>
            <img src={foto} alt="perfil"/>
        </Header>
        <Body>
            <First>
                <Text1>Histórico</Text1>
            </First>
            <Text2>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text2>
        </Body>
        <Footer>
            <Link to="/habitos"><Text3>Hábitos</Text3></Link>
            <Container> 
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
           <Link to="/historico"><Text3>Histórico</Text3></Link>
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