import React, { Component } from 'react';

class Timer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { time: this.props.timer.time, interval: this.props.timer.interval }
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    if (this._interval) cancelAnimationFrame(this._interval);
    this.stop()
  }

  start() {
    this._interval = requestAnimationFrame(this.progress);
    this.setState(this.props.actions.startTimer(Date.now(), new Date(Date.now() + 30*1000)));
  }

  stop() {
    this.setState(this.props.actions.stopTimer());
  }

  progress = () => {
    this.setState(this.props.actions.tick(Date.now()))
    this._interval = requestAnimationFrame(this.progress);
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
    return `${s}`;
  }

  render() {
    return (
      <div className="submit">
        <h1>Time: {this.format(this.state.time)}</h1>
      </div>
    );
  }
}

export default Timer
