import { createContext , useState} from "react";

const UserContext=createContext({});

export const ProviderUser = ({children}) => {

    const [email,setEmail]=useState("")
    const [nome, setNome]= useState("")
    const [foto,setFoto] = useState("")
    const [senha,setSenha]= useState("")
    const [token, setToken]= useState("")


    return(
        <UserContext.Provider value={{email: email, setEmail: setEmail,nome: nome,setNome: setNome,foto: foto, setFoto : setFoto,senha: senha,setSenha: setSenha,token: token,setToken: setToken}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;