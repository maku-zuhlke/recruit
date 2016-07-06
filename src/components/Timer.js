import React, { Component } from 'react';

class Timer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { time: this.props.timer.time, offset: this.props.timer.offset, seconds: this.props.timer.seconds }
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    if (this._interval) cancelAnimationFrame(this._interval);
  }

  start() {
    this._interval = requestAnimationFrame(this.progress);
    this.props.actions.startTimer(Date.now());
  };

  progress = () => {
    this.props.actions.tick(Date.now());
    this._interval = requestAnimationFrame(this.progress);
    this.forceUpdate();
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
    this.props.timer.seconds = s;
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


