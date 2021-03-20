import React, {useState} from 'react'
import Greeting from './Greeting.js'

function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleGreeting(event){
        setFirstName(event.target.value)
        setLastName(event.target.value)
          }

    return(
        <div>
            <Greeting first={firstName} last={lastName} />
            <input className="firstName" onChange={handleGreeting} />
            <input className="lastName" onChange={handleGreeting} />
        </div>
    ) 
}

export default ContactForm