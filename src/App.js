import React from 'react';
import './App.css';
import TextBox from './TextBox'
import Display from './Display'

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      textDisplay: this.randomJob()
      //textDisplay: 'React Developer'
    }
  }

  randomJob = () =>{
    //list of random jobs to display on refresh
    const joblist = ['React Developer', 'CSS Ninja', 'HTML5 GURU', 'Taco Salesman']
    return joblist[Math.floor((Math.random() * joblist.length))]
  }

  changeText = (event) =>{
    this.setState({textDisplay: event.target.value})
  }

  render(){
    return (
      <div>
        <TextBox changeText={this.changeText}/>
        <Display textDisplay={this.state.textDisplay}/>
      </div>
    )
  }
}

export default App