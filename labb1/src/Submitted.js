import React from 'react'
import tomatoAv from './tomatoAv.jpg'

function Submitted(props) {

    

     return(
         <>
       <img src={tomatoAv} />
           <div className="info">
            <div>{props.submit.firstName } {props.submit.lastName} <span>submitted {props.submit.time}</span>.</div>
           <div className="description"><span>Description:</span> {props.submit.desc}</div>
           </div>
        </>
     )
 }
 
 export default Submitted