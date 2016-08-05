import React, { Component } from 'react';

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
    return `${s}`
  }

  render() {
    return (
      <div className="timer">
        <span>{ this.format(this.state.time) }</span>
      </div>
    );
  }
}

Timer.defaultProps = {
  time: 60
};

export default Timer


