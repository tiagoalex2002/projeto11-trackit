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

    const date= new Date()
    const hoje= date.getDate()
    const mes= date.getMonth() + 1;
    console.log(hoje);
    console.log(mes)
    const timeElapsed= Date.now()
    const tod= new Date(timeElapsed)
    const dat= tod.toDateString();
    console.log(dat);
    var weekday= tod.getDay()
    console.log(weekday)
    let dia;
    let month;
    if(weekday==0){
        dia="Domingo";
    }
    else if(weekday==1){
        dia="Segunda";
    }
    else if(weekday==2){
        dia="Terça"
    }
    else if(weekday==3){
        dia="Quarta"
    }
    else if(weekday==4){
        dia="Quinta"
    }
    else if(weekday==5){
        dia="Sexta"
    }
    else if(weekday==6){
        dia="Sábado"
    }

    if(mes==1){
        month= "01";
    }
    else if(mes==2){
        month="02";
    }
     else if(mes==3){
        month="03";
    }
     else if(mes==4){
        month="04";
    }
     else if(mes==5){
        month="05";
    }
     else if(mes==6){
        month="06";
    }
     else if(mes==7){
        month="07";
    }
     else if(mes==8){
        month="08";
    }
     else if(mes==9){
        month="09";
    }



    const {profile}= useContext(UserContext);
    const {token}= useContext(UserContext);
    const {today}= useContext(TodayContext)
    const {setToday}= useContext(TodayContext)
    const {information} = useContext(TodayContext)
    const {setInformation}= useContext(TodayContext)
    const {done}= useContext(TodayContext)
    const {setDone}= useContext(TodayContext)
    const {percentage}= useContext(TodayContext)
    const {setPercentage}= useContext(TodayContext)


    useEffect(()=> {const promise=axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",{
        headers: { Authorization: `Bearer ${token}` }
    }); promise.then((response)=>{setToday(response.data)})})

    function Finished(index){
        const body={}
        if(done.includes(index.number)){
            const req=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index.id}/uncheck`,body,{headers: { Authorization: `Bearer ${token}` }})
            req.then((res)=>{console.log(done)
                let h=done.indexOf(index.number)
                done.splice(h,1)
                console.log("oi")
                setDone(done)})
            req.catch((error)=> alert(error.response.data.message))
        }
        else{
            const request=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index.id}/check`,body,{headers: { Authorization: `Bearer ${token}` }} )
            request.then((response)=> {setDone([...done,index.id]);
            setPercentage((done.length/today.length)* 100)} )
            request.catch((error) => alert(error.response.data.message))
        }
    }




    
    return(
        <div>
        <Header data-test="header">
            <Title>TrackIt</Title>
            <img src={profile} alt="perfil"/>
        </Header>
        <Body>
            <First>
                <Text1 data-test="today">{dia}, {hoje}/{month}</Text1>
            </First>
            <Text2 data-test="today-counter">{today.length ===0 ? "Nenhum hábito concluído ainda" : `${percentage}% dos hábitos concluídos`}</Text2>
            <div>{today.map((h)=>(<Habito data-test="today-habit-container"><Titulo data-test="today-habit-name">{h.name}</Titulo><Habito1 sequencia={h.currentSequence} record={h.highestSequence}><div data-test="today-habit-sequence">Sequência atual:{h.currentSequence} dias</div><div data-test="today-habit-record">Seu recorde: {h.highestSequence} dias</div></Habito1><Check onClick={()=>Finished(h)} done={done} numb={h.id} data-test="today-habit-check-btn"><ion-icon name="checkmark-outline"></ion-icon></Check></Habito>))}</div>
        </Body>
        <Footer data-test="menu">
            <Link  data-test="habit-link" to="/habitos"><Text3>Hábitos</Text3></Link>
            <Container data-test="today-link"> 
             <CircularProgressbar value={percentage} text={`Hoje`} background  backgroundPadding={6}
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
}
margin-left:17px;
`

const Text1=styled.div `
width: 180px;
height: 29px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
margin-top:30px;`;

const Text2= styled.div `
width: 338px;
height: 74px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;
margin-left:17px`;

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
flex-direction:column;
margin-left:17px;
margin-top:13px;`

const Habito1=styled.div `
width: 146px;
height: 32px;
font-family: 'Lexend Deca';
margin-left:15px;
font-style: normal;
font-weight: 400;
font-size: 12.976px;
line-height: 16px;
color: ${props => props.sequencia === props.record? "#8FC549": "#666666"};`;

const Check= styled.div `
box-sizing: border-box;
position: absolute;
width: 69px;
height: 69px;
background: ${props => props.done.includes(props.numb)? "#8FC549" : "#EBEBEB"};
border: 1px solid #E7E7E7;
border-radius: 5px;
margin-left:258px;
margin-top:13px;`
;

const Titulo= styled.div `
width: 208px;
height: 25px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;
margin-top:13px;
margin-left:17px;`