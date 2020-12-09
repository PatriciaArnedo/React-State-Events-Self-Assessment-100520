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
            <div onClick={this.clickHandler}>
            <p>{this.state.statement}</p>
            <img src={this.state.image} alt="Drake Saying No"/>
            </div>
        )
    }
}

export default YesNoImage