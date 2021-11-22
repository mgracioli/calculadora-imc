import './App.css';
import React,{useState} from 'react';
import TabelaIMC from './Components/TabelaIMC';
import Peso from './Components/Peso';
import Altura from './Components/Altura';
import CalcularIMC from './Components/CalcularIMC';
import Resultado from './Components/Resultado';

function App() {

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)
  
  return (
    <div>
      <Peso pe={peso} setPe={setPeso}/>
      <Altura al={altura} setAlt={setAltura}/>
      <CalcularIMC pes={peso} alt={altura} setResult={setResultado}/>
      <Resultado res={resultado}/>
      <TabelaIMC/>
    </div>
  );
}

export default App;
