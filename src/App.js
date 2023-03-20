import Login from "./Login";
import Cadastro from "./Cadastro";
import Histórico from "./Histórico";
import Hoje from "./Hoje";
import Hábitos from "./Hábitos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Contexts/UserContext";
import HabitsContext from "./Contexts/HabitsContext";
import TodayContext from "./Contexts/TodayContext";

export default function App() {

    const [email,setEmail]=useState("")
    const [nome, setNome]= useState("")
    const [foto,setFoto] = useState("")
    const [senha,setSenha]= useState("")
    const [token, setToken]= useState("")
    const [add,setAdd]=useState("none")
    const [habitos,setHabitos]=useState([])
    const [name,setName]= useState("")
    const [days, setDays]= useState([])
    const [today,setToday]= useState([])
    const [information, setInformation]= useState([])
    const [done,setDone]= useState([])
    const [percentage, setPercentage]= useState(0)
    const UserValue= {email: email, setEmail: setEmail,nome: nome, setNome: setNome,foto: foto, setFoto : setFoto,senha: senha,setSenha: setSenha,token: token,setToken: setToken}
    const HabitsValue={habitos:habitos,setHabitos: setHabitos, name: name, setName: setName, days: days, setDays:setDays}
    const TodayValue={today: today, setToday: setToday, information: information, setInformation: setInformation, done: done, setDone: setDone, percentage: percentage, setPercentage: setPercentage}
    
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<UserContext.Provider value={UserValue}><Login/></UserContext.Provider>}/>
               <Route path="/cadastro" element={<UserContext.Provider value={UserValue}><Cadastro/></UserContext.Provider>} />
               <Route path="/historico" element={<TodayContext.Provider value={TodayValue}><UserContext.Provider value={UserValue}><Histórico/></UserContext.Provider></TodayContext.Provider>}/>
               <Route path="/hoje" element={<TodayContext.Provider value={TodayValue}><UserContext.Provider value={UserValue}><Hoje /></UserContext.Provider></TodayContext.Provider>}/>
               <Route path="/habitos" element={<TodayContext.Provider value={TodayValue}><HabitsContext.Provider value={HabitsValue}><UserContext.Provider value={UserValue}><Hábitos add={add} setAdd={setAdd}/></UserContext.Provider></HabitsContext.Provider></TodayContext.Provider>}/>
            </Routes>
            
        </BrowserRouter>
    )
}
