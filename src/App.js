import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
   state = {
     userNames:[{
     username : 'Janhvi'
   },
   {
     username:'Shilpi'
   }]
 }

 inputChangeHandler = (event)=>{
   this.setState({
     userNames:[{
     username : event.target.value
   },
   {
     username: 'Shilpi'
   }]
 })
 }

  render() {
    return (
      <div className="App">
        <UserOutput username ={this.state.userNames[0].username}/>
        <UserOutput username ={this.state.userNames[1].username} />
        <UserInput
        username = {this.state.userNames[0].username}
        change = {this.inputChangeHandler}/>
      </div>
    );
  }
}

export default App;
