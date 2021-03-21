import React, {Component} from 'react'

class SubmitButton extends React.Component{
    constructor(props) {
        super(props);
         this.state = { btnColor: 'red'}
    };

    renderCurrentBtn(){
        if(this.props.btnState.firstName !== "" && this.props.btnState.lastName !== ""){
            // this.setState({
            //     btnColor: 'green'
            // })

            // return(this.state.btnColor)
            return "green"
        }
        else {
            return "red"
        }
    }

    render() {
     
        return (
           
            <div>
             <button type="submit" className={this.renderCurrentBtn()}>Send application {this.props.btnState.firstName}</button>
            </div> 
            )
        
    }
}

export default SubmitButton