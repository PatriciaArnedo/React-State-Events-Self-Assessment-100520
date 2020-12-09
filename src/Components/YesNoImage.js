import React from 'react'
import { yes, no } from '../objects'

class YesNoImage extends React.Component{

    state = {
        bool: false,
        image: no["no-image"],
        statement: no["no-statement"]
    }

    clickHandler = () =>{
        if(!this.state.bool){
            this.setState(
                {
                    bool: true,
                    image: yes["yes-image"],
                    statement: yes["yes-statement"]
                }
            )
        } else {
            this.setState(
                {
                    bool: false,
                    image: no["no-image"],
                    statement: no["no-statement"]
                }
            )
        }
    }

    render(){
        return (
            <div style={{textAlign: "center"}} onClick={this.clickHandler}>
            <p style={
                {
                    marginTop: "100px",
                    borderStyle: "solid", 
                    borderWidth: "2px", 
                    display: "inline-block",
                    padding: "10px"
                    }
                }>{this.state.statement}</p>
            <br></br>
            <img src={this.state.image} alt="Drake Saying No"/>
            </div>
        )
    }
}

export default YesNoImage