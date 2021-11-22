import React from 'react'

export default function TabelaIMC(){
    return(
        <table border='1' style={{borderCollapse:"collapse"}}>
          <thead>
            <tr>
              <th>IMC</th><th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abaixo do peso</td><td>Abaixo de 18,5</td>
            </tr>
            <tr>
              <td>Peso normal</td><td>Entre 18,6 e 24,9</td>
            </tr>
            <tr>
              <td>Obesidade grau 1</td><td>Entre 24,9 e 34,9</td>
            </tr>
            <tr>
              <td>Obesidade mórbida</td><td>Acima de 34,9</td>
            </tr>
          </tbody>
        </table>
    )
}