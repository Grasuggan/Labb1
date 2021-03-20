import React, {useState, useRef, Component} from 'react'
import tomatoAv from './tomatoAv.jpg'

function Profiles(props){


    return(
        <label>Form submitted {props.inputs} times</label>
        // <div className="profile">
        //     <img src={tomatoAv} />
        //     <div className="info">
        //         {/* <div className="firstName">{props.inputs.firstName}</div>
        //         <div className="lastNane">{props.inputs.lastName}</div>
        //         <div className="description">{props.inputs.desc}</div> */}
        // </div>
        // </div>
    )
}

export default Profiles