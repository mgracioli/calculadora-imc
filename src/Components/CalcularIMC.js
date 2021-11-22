import React from 'react'

export default function CalcularIMC(props){
    const calc = () => {
        props.setResult(props.pes/(props.alt*props.alt))
    }

    return(
      <div>
        <button onClick={calc}>Calcular</button>
      </div>
    )
}