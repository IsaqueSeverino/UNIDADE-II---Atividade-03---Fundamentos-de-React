import "./app.css";
import { Logo } from "./components/Logo";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import logo from "./assets/logo.png";
import restart from "./assets/restart.svg";
import tip from "./assets/tip.svg";

export default function App(){
  return(
    <div className="container">
      <Logo
        src= {logo}
      />
      <Header
        texto= "5"
        texto2 = "de 10 tentativas"
        src= {restart}
      />
      <Tip
        texto = "Dica"
        texto2 = "Biblioteca para criar interfaces Web com Javascript."
        src = {tip}
      />
      
    </div>
  )
}