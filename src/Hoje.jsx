export default function Hoje(){
    return(
        <div>
        <Header data-test="header">
            <Title>TrackIt</Title>
            <img src={foto} alt="perfil"/>
        </Header>
        <Body>
            <First>
                <Text1>Segunda, 17/05</Text1>
            </First>
            <Text2>Nenhum hábito concluído ainda</Text2>
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