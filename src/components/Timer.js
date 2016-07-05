import React, { Component } from 'react';

class Timer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {time: this.props.timer.time, isOn: this.props.timer.isOn, interval: this.props.timer.interval}
  }

  componentDidMount() {
    if (this._interval) cancelAnimationFrame(this._interval);
    this.start();
  }

  start() {
    this._interval = requestAnimationFrame(this.progress);
    this.props.actions.startTimer(Date.now());
    this.setState({ isOn: true });
  }

  progress = () => {
    this._interval = requestAnimationFrame(this.progress);
    this.setState(this.props.actions.tick(Date.now()))
  }

  stop() {
    cancelAnimationFrame(this._interval);
    this.props.actions.stopTimer();
    this.setState({ isOn: false });
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
        <button onClick={this.state.isOn ? this.stop.bind(this) : this.start.bind(this)}>
          { this.state.isOn ? 'Stop' : 'Start' }
        </button>
      </div>
    );
  }
}

export default Timer
