import "./app.css";
import { useState } from "react";
import { Logo } from "./components/Logo";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Word } from "./components/Word";
import { Palpite } from "./components/Palpite";
import { LetrasUsadas } from "./components/LetrasUsadas";
import { WORDS } from "./utils/words";
import type { Challenge } from "./utils/words";
import logo from "./assets/logo.png";
import restart from "./assets/restart.svg";
import tip from "./assets/tip.svg";

function getRandomChallenge(): Challenge {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export default function App() {

  const [challenge, setChallenge] = useState<Challenge>(getRandomChallenge());


  return (
    <div className="container">
      <Logo
        src={logo}
      />
      <Header
        texto="5"
        texto2="de 10 tentativas"
        src={restart}
      />
      <Tip
        texto="Dica"
        texto2= {challenge.tip}
        src={tip}
      />
      <Word
        letra="R"
      />
      <Palpite
        palpite={7}
        reiniciar={() => setChallenge(getRandomChallenge())}
      />

      <hr />

      <LetrasUsadas
        letra="A"
      />

    </div>
  )
}