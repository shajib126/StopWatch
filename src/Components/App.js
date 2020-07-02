import React, { Component } from 'react';
import Title from './Title/Title';
import CountDown from './CountDown/CountDown';
import Controller from './CountDown/Controller/Controller';
import Lap from './Lap/Lap';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      time:{
        min:0,
        sec:0,
        mili:0
      },
      lap:[]
    }
  }
  getStarted(){
    this.intervalID = setInterval(()=>{
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili
      if(mili >= 10){
        sec = sec + 1;
        mili = 0
      }if(sec >= 60){
        min = min + 1;
        sec = 0;
      }
      this.setState({
        ...this.state,
        time:{min,
        sec,
        mili:mili + 1}
      })
    },100)
  }
  getPause(){
    clearInterval(this.intervalID)
  }
  
  getLap(){
    let time = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      lap:[...this.state.lap, time]
      
    })
   
  }


  getReset(){
    this.setState({
      time:{
        min:0,
        sec:0,
        mili:0
      },
      lap:[]
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
          <Title></Title>
          <CountDown time={this.state.time}></CountDown>
          <Controller getStarted = {this.getStarted.bind(this)}
          getPause={this.getPause.bind(this)}
          getReset={this.getReset.bind(this)}
          getLap={this.getLap.bind(this)}
          ></Controller>
          <Lap className="my-5" lap={this.state.lap}></Lap>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;