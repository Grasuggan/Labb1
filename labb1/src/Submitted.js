import React from 'react'
import tomatoAv from './tomatoAv.jpg'

function Submitted(props) {

    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

     return(
         <>
       <img src={tomatoAv} />
           <div className="info">
            <div>{props.inputs.firstName } {props.inputs.lastName} <span>submitted {time}</span>.</div>
           <div className="description"><span>Description:</span> {props.inputs.desc}</div>
           </div>
        </>
     )
 }
 
 export default Submitted