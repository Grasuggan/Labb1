import React, {useState, useRef, useEffect} from 'react'
import Greeting from './Greeting.js'
import SubmitCounts from './SubmitCounts.js'
import './App.css';
import SubmitButton from './SubmitButton.js'

function ContactForm() {

    const initialState = {
        firstName: '',
        lastName: '',
        desc: '',
      };
    
    const [inputName, setInputName] = useState(initialState);
    const [count, setCount] = useState(0);

    const inputRef = useRef();

    let enableButton = "red";
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

        if(inputName.firstName === initialState.firstName || inputName.lastName === initialState.lastName){
            alert("oops you forgot something");
        }
        else{
        document.getElementById("app-form").reset();
        setCount(count + 1);
        }
    }

    function cleanForm(){
        setInputName(initialState)
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

      
         return () => cleanForm()
        
    }, [count]);

    useEffect(() => {

        console.log(`Firstname: ${inputName.firstName}, lastname: ${inputName.lastName}, description: ${inputName.desc}`)
        if(inputName.firstName !== initialState.firstName && inputName.lastName !== initialState.lastName){
           
            enableButton = "green";
            
        }
        console.log(`enable btn is set to ${enableButton}`)
    }, [inputName])
 
    return(

        <div>
            <Greeting first={inputName.firstName} last={inputName.lastName} />
            <form onSubmit={handleSubmit} id="app-form">
                <label htmlFor="firstName">
                    Your firstname: 
                    <input name="firstName" id="firstName" onChange={handleGreeting} />
                </label>
               <label htmlFor="lastName">Your lastname:
               <input name="lastName" id="lastName"  onChange={handleGreeting} />
               </label>
               <label htmlFor="desc">
                   Describe yourself (optional):
                   <textarea ref={inputRef}></textarea>
               </label>
                {/* <button type="submit" className={enableButton ? "green" : "red"}>Send application</button> */}
                <SubmitButton btnState={inputName} />
                
            </form>     
            
               <SubmitCounts inputs={count} /> 
            
        </div>

        
    ) 
}

export default ContactForm