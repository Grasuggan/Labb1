import React from 'react'
import Submitted from './Submitted.js'

function SubmitCounts(props){


let submitters = null;
if(props.submitters.length){
    submitters = props.submitters.map(submitter => (
        <div className="profile"><Submitted submit={submitter} key={submitter.id}/></div>
    ))
}
 

    return(
        <>
       
            {submitters}
        </>
    )
}

export default SubmitCounts