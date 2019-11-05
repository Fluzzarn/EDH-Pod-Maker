import React from 'react'
import InputComponent from './InputComponent'
import PlayerListComponent from './PlayerListComponent'
import PodListComponent from './PodListComponent'

function PodPageComponent(props){

    console.log(props)
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <InputComponent  handleSubmit={props.handleClick}/>
            <br/>
            <form onSubmit={props.startPodsClicked}>
              <input type="submit" className="btn btn-primary btn-lg" value="Start Pods" />
          </form>
          </div>
          <div className="col">
            <PlayerListComponent enteredPlayers={props.enteredPlayers} removeName={props.removeName} />
          </div>
        </div>
        <div className="row">
          <div className="col">
          {props.pods.length > 0 && 
          <PodListComponent pods={props.pods}/>
        }
          </div>
        </div>


      </div>
)
}

export default PodPageComponent