import React, { Component } from 'react';

class Timer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { time: this.props.timer.time, offset: this.props.timer.offset }
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
    return `${s}`
  }

  render() {
    return (
      <div className="timer">
        <h4>Time: { this.format(this.props.timer.time) }</h4>
      </div>
    );
  }
}

export default Timer


