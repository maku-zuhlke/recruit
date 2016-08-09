import React, { Component} from 'react';
import $ from 'jquery';

class Timer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { time: this.props.timer.time, offset: this.props.timer.offset}
  }

  componentDidMount() {
    this.start();
  }

  start() {
    this._interval = requestAnimationFrame(this.progress);
    this.props.actions.startTimer(Date.now());
  }

  stop() {
    this.props.actions.stopTimer();
    cancelAnimationFrame(this._interval);
  }

  progress = () => {
    this.props.actions.tick(Date.now());
    this._interval = requestAnimationFrame(this.progress);
    this.forceUpdate();
    if (this.props.timer.time <= -59000) {
      this.props.timer.timesup = true;
      this.props.callback();
      this.stop();
    }
  }

  format(time) {
    const pad = (time, length) => {
      while (time.length < length) {
        time = '0' + time;
      }
      return time;
    };
    time = new Date(time);
    let s = pad(time.getSeconds().toString(), 2);

    var initialOffset = '220';
    var time = 60;
    $('.circle_animation').css('stroke-dashoffset', initialOffset-(s*(initialOffset/time)));
    $('h2').text(s)
    return `${s}`
  }

  render() {
    return (
      <div className="timer">
        
        <span>{ this.format(this.props.timer.time) }</span>
        <h2>time</h2>   
        <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Layer 1</title>
            <circle id="circle" className="circle_animation" r="69.85699" cy="41" cx="41" stroke-width="10" stroke="#995133" fill="none"/>
          </g>
        </svg>
      </div>

      
    


    );
  }
}

export default Timer


