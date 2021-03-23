import React from 'react'
import Submitted from './Submitted.js'

function SubmitCounts(props){


let submitters;
if(props.submitters.firstName !== ""){

    return ( 
    submitters =   <div><label>Form submitted {props.inputs} times</label><div className="profile"><Submitted inputs={props.submitters} /></div></div>
    )
}
else{
    submitters = <div> <label>Form submitted {props.inputs} times</label></div>
}
 

    return(
        <>
       
            {submitters}
        </>
    )
}

export default SubmitCounts