import React, { Component} from 'react';
import $ from 'jquery';

class Timer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      time: this.props.time * 1000,
      timesup: false
    }
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  resetTimer(){
    this.setState({
      time: Date.now(),
      timesup: false
    })
  }

  start() {
    this._interval = requestAnimationFrame(this.progress);
    this.setState({
      offset: Date.now()
    });
  }

  stop() {
    this.setState({
      time: 0,
      timesup: false
    });
    cancelAnimationFrame(this._interval);
  }

  progress = () => {
    this._interval = requestAnimationFrame(this.progress);
    this.setState({
      time: this.state.time - (Date.now() - this.state.offset),
      offset: Date.now()
    });
    if (this.state.time <= 0) {
      this.setState({timesup: true});
      this.props.callback();
      this.stop();
    }
  };

  format(time) {
    const pad = (time, length) => {
      while (time.length < length) {
        time = '0' + time;
      }
      return time;
    };
    time = new Date(time);
    let s = pad(time.getSeconds().toString(), 2);

    var initialOffset = '109';
    $('.circle_animation').css('stroke-dashoffset', initialOffset-(s*(initialOffset/60)));
    $('h2').text(s);
    return `${s}`
  }

  render() {
    return (
      <div className="timer">
        <svg width="55" height="55" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle id="circle" strokeWidth="3" className="circle_animation"/>
            <text transform="rotate(0.1, -20000, 9900)">{this.format(this.state.time) }</text>
          </g>
        </svg>
      </div>
    );
  }
}

Timer.defaultProps = {
  time: 60
};

export default Timer


