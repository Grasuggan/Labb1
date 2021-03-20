import React, {useState} from 'react'

function Greeting(props){
    return(
      <div>
         <h1>Welcome {props.firs} {props.last}</h1>
     </div>
    )
}

export default Greeting