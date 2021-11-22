import React from 'react'

export default function Peso(props){
    return(
        <div>
          <label>Peso</label>
          <input type="text" value={props.pe} onChange={(e) => {props.setPe(e.target.value)}}></input>
        </div>
    )
}