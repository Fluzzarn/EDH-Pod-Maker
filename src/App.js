import React, { Component } from 'react';
import './App.css';
import testData from './testData'
import PodPageComponent from './components/edhpods/PodPageComponent';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import NavbarComponent from './components/common/NavbarComponent';
import AboutPageComponent from './components/about/AboutPageComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.startPodsClicked = this.startPodsClicked.bind(this)
    this.removeName = this.removeName.bind(this)
    var players =testData
    var pods = []
    this.state = ({
      enteredPlayers: players,
      pods: pods
    })
  }
  
  startPodsClicked(event){
    event.preventDefault()
    var players = this.state.enteredPlayers.slice(0)
    var shuffledPlayers = shuffle(players)
    console.log(shuffledPlayers)
    var numberOfFullPods = Math.floor(shuffledPlayers.length / 4)
    var leftoverPlayers  = shuffledPlayers.length % 4

    var podsOfThree = 0



    if(leftoverPlayers !== 0){
      podsOfThree = 1
    }
    console.log(numberOfFullPods)
    console.log(leftoverPlayers)

    if(leftoverPlayers !== 0){
      while(leftoverPlayers < 3){
        numberOfFullPods--
        podsOfThree++
        leftoverPlayers++
      }
    }

    var pods = []

    for(var i=0; i<numberOfFullPods;i++){
      pods.push(shuffledPlayers.slice(i*4,i*4 +4))
    }

    for(var j=0; j<podsOfThree;j++){

      var start = j*3 + numberOfFullPods*4
      var slice = shuffledPlayers.slice(start,start +3)
      pods.push(slice)
    }

    console.log(pods)
    this.setState({
      pods: pods
    })
  }

  handleClick(event){
    console.log(event)
    this.setState({
      enteredPlayers: this.state.enteredPlayers.concat(event)
    })
  }

  removeName(name){
    console.log("REMOVEING " , name)
    this.setState({
      enteredPlayers: this.state.enteredPlayers.filter(word => word !== name)
    })
  }

  render(){
    return (
      <Router>
        <NavbarComponent/>
        <Switch>
          <Route path='/pods'>
          <PodPageComponent pods={this.state.pods} handleClick={this.handleClick} startPodsClicked={this.startPodsClicked} enteredPlayers={this.state.enteredPlayers}
      removeName={this.removeName} />
          </Route>
          <Route path='/about'>
            <AboutPageComponent />
          </Route>
        </Switch>

      </Router>

    );
  }

}


function shuffle(array) {

  let tempArray = array
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = tempArray[counter];
      tempArray[counter] = tempArray[index];
      tempArray[index] = temp;
  }

  return tempArray;
}

export default App;



/**
 * 
 * 
 *       <div className="App container-fluid">
        <div className="row">
          <div className="col">
            <InputComponent  handleSubmit={this.handleClick}/>
            <br/>
            <form onSubmit={this.startPodsClicked}>
              <input type="submit" className="btn btn-primary btn-lg" value="Start Pods" />
          </form>
          </div>
          <div className="col">
            <PlayerListComponent enteredPlayers={this.state.enteredPlayers} removeName={this.removeName} />
          </div>
        </div>
        <div className="row">
          <div className="col">
          {this.state.pods.length > 0 && 
          <PodListComponent pods={this.state.pods}/>
        }
          </div>
        </div>


      </div>
 */
