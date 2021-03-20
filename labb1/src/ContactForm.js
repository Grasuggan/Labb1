import React, {useState, useRef, useEffect} from 'react'
import Greeting from './Greeting.js'
import Profiles from './Profiles.js'

function ContactForm() {

    const initialState = {
        firstName: '',
        lastName: '',
        desc: '',
      };
    
    const [inputName, setInputName] = useState(initialState);
    const [count, setCount] = useState(0);

    var inputList = initialState;
    const inputRef = useRef();
    var inputsFilled = false
    function handleSubmit(event){
        event.preventDefault();
        var partialState = {};
        partialState['desc'] = inputRef.current.value;

        setInputName(inputName => {
            return{
            ...inputName,
            ...partialState
            }
            });
         setCount(count + 1);
    console.log(`btn shows ${inputName.firstName} and ${inputName.desc}`);
    }

        
        function handleGreeting(event){
            const result = event.target.value
            setInputName({
                ...inputName,
                [event.target.name]: result 
            });
       }

  
  
   useEffect(() => {
   
    });
 
    return(

        <div>
            <Greeting first={inputName.firstName} last={inputName.lastName} />
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">
                    Your firstname: 
                    <input name="firstName" id="firstName" onChange={handleGreeting} />
                </label>
               <label htmlFor="lastName">Your lastname:
               <input name="lastName" id="lastName"  onChange={handleGreeting} />
               </label>
               <label htmlFor="desc">
                   Describe yourself:
                   <textarea ref={inputRef}></textarea>
               </label>
                <button type="submit">Send application</button>
                
            </form>     
            
               <Profiles inputs={count} /> 
            
        </div>

        
    ) 
}

export default ContactForm