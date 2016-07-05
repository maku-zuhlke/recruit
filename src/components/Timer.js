import React, { Component } from 'react';

class Timer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {time: this.props.timer.time, isOn: this.props.timer.isOn, interval: this.props.timer.interval}
  }

  start() {
    console.log('STARTTT')
    const interval = setInterval(() => {
      return this.props.actions.tick(Date.now());
    });
    this.props.actions.startTimer(Date.now(), interval)
  }
  
  stop() {
    console.log('STOPPPPPP')
    this.props.actions.stopTimer();
  }

  click() {
    this.state.isOn ? this.start.bind(this) : this.stop.bind(this);
  }
  
  format(time) {
    const pad = (time, length) => {
      while (time.length < length) {
        time = '30' + time;
      }
      return time;
    }
    
    time = new Date(time);
    //let m = pad(time.getMinutes().toString(), 2);
    let s = pad(time.getSeconds().toString(), 2);
        
    //return `${m} : ${s}`;
    return `${s}`;
  }

  render() {
    return (
      <div>
        <h1>Time: {this.format(this.state.time)}</h1>
        <button onClick={this.state.interval ? this.stop.bind(this) : this.start.bind(this)}>
          { this.state.interval ? 'Stop' : 'Start' }
        </button>
      </div>
    );
  }
}

export default Timer