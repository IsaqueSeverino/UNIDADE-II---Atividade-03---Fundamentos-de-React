import "./app.css";
import { useEffect, useState } from "react";
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

  const [letrasAcertadas, setLetrasAcertadas] = useState<string[]>([]);
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);
  const [tentativas, setTentativas] = useState(0);
  const MAX_TENTATIVAS = 10;

  const [status, setStatus] = useState<'playing' | 'win' | 'lose'>('playing');

  const [palpite, setPalpite] = useState("");

  const letrasParaMostrar = challenge.word.toUpperCase().split('').map(l => letrasAcertadas.includes(l) ? l : '');

  useEffect(() => {

    if (challenge.word.toUpperCase().split('').every(l => letrasAcertadas.includes(l))) {
      setStatus('win');
    } else if (tentativas >= MAX_TENTATIVAS) {
      setStatus('lose');
    }
  }, [letrasAcertadas, tentativas, challenge.word]);

  function tentarLetra(letra: string) {
    letra = letra.toUpperCase();
    if (letrasUsadas.includes(letra)) {
      alert("Letra já usada!");
      return;
    }
    setLetrasUsadas([...letrasUsadas, letra]);
    setTentativas(tentativas + 1);
    if (challenge.word.toUpperCase().includes(letra)) {
      setLetrasAcertadas([...letrasAcertadas, letra]);
    }
  }

  function handleRestart() {
    setChallenge(getRandomChallenge());
    setLetrasUsadas([]);
    setLetrasAcertadas([]);
    setTentativas(0);
    setStatus('playing');
  }

  function adicionarLetra() {
    if (!palpite) return;
    tentarLetra(palpite);
    setPalpite(""); 
  }

  return (
    <div className="container">
      <Logo
        src={logo}
      />
      <Header
        texto={tentativas}
        texto2="de 10 tentativas"
        src={restart}
        reiniciar={() => handleRestart()}
      />
      <Tip
        texto="Dica"
        texto2={challenge.tip}
        src={tip}
      />
      <Word
        letra={letrasParaMostrar}
      />
      <Palpite
        palpite={palpite}
        setPalpite={setPalpite}
        adicionarLetra={adicionarLetra}
        disabled={status !== 'playing'}
      />

      <hr />

      <LetrasUsadas
        letras={letrasUsadas}
        letrasCorretas={letrasAcertadas}
      />

    </div>
  )
}