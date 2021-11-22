import React from 'react'

export default function Altura(props){
    return(
        <div>
          <label>Peso</label>
          <input type="text" value={props.al} onChange={(e) => {props.setAlt(e.target.value)}}></input>
        </div>
    )
}