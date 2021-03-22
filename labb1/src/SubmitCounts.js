import React from 'react'
import Submitted from './Submitted.js'

function SubmitCounts(props){


let submitters;
if(props.submitters.firstName !== ""){

    return ( 
    submitters =  <div className="profile"><Submitted inputs={props.submitters} /></div>
    )
}
else{
    submitters = <div></div>
}
 

    return(
        <>
        <label>Form submitted {props.inputs} times</label>
            {submitters}
        </>
    )
}

export default SubmitCounts