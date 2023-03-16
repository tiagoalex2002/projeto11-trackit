import styled from "styled-components"
import  foto from "./logo-completa.svg"
import { Link } from "react-router-dom"
import dias from "./dias";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
   import "react-circular-progressbar/dist/styles.css";

export default function Hábitos(props){
    
    function Addition(){
        {props.setAdd("")}
    }

    function Cancel(){
        {props.setAdd("none")}
    }
    return(
    <div>
        <Header>
            <Title>TrackIt</Title>
            <img src={foto} alt="perfil"/>
        </Header>
        <Body>
            <First>
                <Text1>Meus hábitos</Text1>
                <button onClick={Addition}>+</button>
            </First>
            <ContainerAdd>
                <Add add={props.add}>
                    <form>
                      <input placeholder="nome do hábito"/>
                      <ContainerButton>{dias.map((i) => <Dias>{i}</Dias>)}</ContainerButton>
                      <Rizz>
                          <Cancelar onClick={Cancel}>Cancelar</Cancelar>
                          <Salvar type="submit">Salvar</Salvar>
                      </Rizz>
                    </form>
                </Add>
            </ContainerAdd>
            <Text2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text2>
        </Body>
        <Footer>
            <Text3>Hábitos</Text3>
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
