import React from 'react'
import Submitted from './Submitted.js'

function SubmitCounts(props){


   function showAllSubmitters(){
     
 
    if(props.submitters.firstName !== ""){

        return ( 
        <Submitted inputs={props.submitters} />
        )
    }
}
 

    return(
        <>
        <label>Form submitted {props.inputs} times</label>
        <div className="profile">
            {showAllSubmitters()}
        </div>
        </>
    )
}

export default SubmitCounts