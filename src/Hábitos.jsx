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
import { useEffect } from "react";
import HabitsContext from "./Contexts/HabitsContext";
import TodayContext from "./Contexts/TodayContext";

export default function Hábitos(props){

    const {habitos}= useContext(HabitsContext)
    const {setHabitos}= useContext(HabitsContext)

    const {profile}= useContext(UserContext)

    const {token} = useContext(UserContext)

    const {name}= useContext(HabitsContext)
    const {setName}=useContext(HabitsContext)
    const {days}= useContext(HabitsContext)
    const {setDays}= useContext(HabitsContext)
    const [invalido,setInvalido]= useState(false)
    const {percentage}= useContext(TodayContext)

   


    useEffect(()=> {const promise=axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
        headers: { Authorization: `Bearer ${token}` }
    }); promise.then((response)=>{setHabitos(response.data)})})
    
    function Addition(){
        {props.setAdd("")}
        setDays([])
    }

    function Cancel(){
        {props.setAdd("none")}
    }

    function DaySelection(index){
        if(days.includes(index.number)){
            console.log(days)
            let h=days.indexOf(index.number)
            days.splice(h,1)
            console.log("oi")
            setDays(days)
        }
        else{
            setDays([...days,index.number])
        }

    }

    function ReqHábito(event){
        event.preventDefault();
        setInvalido(true)
        const body= { name: name, days: days }
        console.log(body)
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
        body, {
            headers: { Authorization: `Bearer ${token}` }
        });
        request.then((response) => {setInvalido(false);
        props.setAdd("none")})
        request.catch((error)=> alert(error.response.data.message))
    }

    function Delete(index){
        const top= {headers:{ Authorization: `Bearer ${token}` }}
        if( window.confirm("Você quer mesmo excluir esse hábito da sua rotina?")){
            const promise=axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index.id}`,top)
            promise.then((response)=> setHabitos(habitos.filter(item=> item.id !== index.id)))
            promise.catch((error)=> alert(error.response.data.message))
        }
    }
    return(
    <div>
        <Header data-test="header">
            <Title>TrackIt</Title>
            <img src={profile} alt="perfil"/>
        </Header>
        <Body >
            <First>
                <Text1>Meus hábitos</Text1>
                <button data-test="habit-create-btn"  onClick={Addition}>+</button>
            </First>
            <div>{habitos.map((i)=> <Habits data-test="habit-container"><Name data-test="habit-name">{i.name}</Name><div>{dias.map((j)=> <Dias2 data-test="habit-day" numero={j.number} selecionados={i.days}>{j.dia}</Dias2>)}</div><Icon onClick={()=> Delete(i)}data-test="habit-delete-btn"><ion-icon name="trash-outline"></ion-icon></Icon></Habits>)}</div>
            <ContainerAdd>
                <Add onSubmit={ReqHábito} data-test="habit-create-container" add={props.add}>
                      <input disabled={invalido} data-test="habit-name-input" placeholder="nome do hábito" type="text"  value={name} onChange={e => setName(e.target.value)}/>
                      <ContainerButton>{dias.map((i) => <Dias type="button" disabled={invalido} days={days} data-test="habit-day" numero={i.number}  onClick={() =>DaySelection(i)}>{i.dia}</Dias>)}</ContainerButton>
                      <Rizz>
                         <Cancelar disabled={invalido} type="button" data-test="habit-create-cancel-btn" onClick={Cancel}>Cancelar</Cancelar>
                         <Salvar disabled={invalido} data-test="habit-create-save-btn" type="submit">{invalido? <ThreeDots/>:"Salvar"} </Salvar>
                      </Rizz>
                </Add>
            </ContainerAdd>
            <Text2 habitos={habitos}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text2>
        </Body>
        <Footer data-test="menu">
            <Link  data-test="habit-link" to="/habitos"><Text3>Hábitos</Text3></Link>
            <Container data-test="today-link" > 
             <Link to="/hoje"><CircularProgressbar value={percentage} text={`Hoje`} background  backgroundPadding={6}
             styles={buildStyles({
             backgroundColor: "#3e98c7",
             textColor: "#fff",
             pathColor: "#fff",
             trailColor: "transparent",
             width: "91px",
             height: "91px"
              })}
      /></Link></Container>
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

color: #666666;
display:${props => props.habitos.length ===0? "": "none"}`;

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

const Add= styled.form `
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
background: ${props => props.days.includes(props.numero)? "#D4D4D4": "#FFFFFF"};
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: ${props => props.days.includes(props.numero)? "#FFFFFF" : "#DBDBDB"};`;

const Habits=styled.div `
width: 340px;
height: 91pxpx;
background: #FFFFFF;
border-radius: 5px;`;

const Name=styled.div `
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
`;

const Dias2=styled.button `
width: 30px;
height: 30px;
margin-left:4px;
margin-right:4px;
margin-top:8px;
background: ${props => props.selecionados.includes(props.numero)? "#D4D4D4": "#FFFFFF"};
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: ${props => props.selecionados.includes(props.numero)? "#DBDBDB": "#FFFFFF"};
`;

const Icon=styled.button `
width:13px;
height:15px;`;