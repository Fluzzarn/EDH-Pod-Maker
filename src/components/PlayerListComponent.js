import React, { Component } from 'react';

class PlayerListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enteredPlayers: props.enteredPlayers,
            removeName: props.removeName
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event,name){
        console.log(name.value)
        event.preventDefault()

        this.state.removeName(name.value)
    }

    render() {
        console.log("INM LIST", this.state)
        return (
            <div>
                        <ul>
        {this.props.enteredPlayers.map((value,index) => {
            return <>
                        <form key={value} onSubmit={(e) => this.handleClick(e,{value})}>
                        <li key={index}>
                            {value} 
 
                                <input key={value} type="submit" value="X"/>
                           
                        </li> 
                        </form> 
                    </>
          })}
        </ul>
            </div>
        );
    }
}

export default PlayerListComponent;