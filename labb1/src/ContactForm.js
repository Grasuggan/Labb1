import React, {useState, useRef, useEffect} from 'react'
import Greeting from './Greeting.js'
import SubmitCounts from './SubmitCounts.js'

function ContactForm() {

    const initialState = {
        firstName: '',
        lastName: '',
        desc: '',
      };
    
    const [inputName, setInputName] = useState(initialState);
    const [count, setCount] = useState(0);

    const inputRef = useRef();
    var inputsFilled = false

    function handleSubmit(event){
        event.preventDefault();
        var partialState = {};
        partialState['desc'] = inputRef.current.value;
        inputsFilled = true;
        setInputName(inputName => {
            return{
            ...inputName,
            ...partialState
            }
            });
         setCount(count + 1);

         setInputName(initialState)
        console.log(`btn shows ${inputsFilled} and ${inputName.desc} `);
    }

        
        function handleGreeting(event){
            const result = event.target.value
            setInputName({
                ...inputName,
                [event.target.name]: result 
            });

         
       }

   useEffect(() => {

        if(count != 0){
        setTimeout(() => {
           alert(`Thank you for entering the form!`);
          }, 1000)
        }
        
    }, [count]);

    useEffect(() => {
        console.log(`Firstname: ${inputName.firstName}, lastname: ${inputName.lastName}, description ${inputName.desc}`)
    }, [inputName])
 
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
            
               <SubmitCounts inputs={count} /> 
            
        </div>

        
    ) 
}

export default ContactForm