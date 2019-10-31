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
        const {enteredPlayers} = this.props
        return (
            <div>
                <h1>Enrolled Players 
                <span className="badge badge-primary" float="right">{" " + enteredPlayers.length}</span>
                </h1>
                
                        <ul>
        {enteredPlayers.map((value,index) => {
            return <>
                        <form key={value} onSubmit={(e) => this.handleClick(e,{value})}>
                        <li key={index}>
                            <h5>
                            {value} 
                            <input key={value} type="submit" value="X" className="button"/>
                            </h5>
                                
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