/**
 * Created by lewa on 07/07/2016.
 */
'use strict';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import Timer from 'components/Timer';
import React from 'react';

describe('TimerShallowComponent', () => {
  let TimerComponent;

  beforeEach(() => {
    TimerComponent = createComponent(Timer, {timer: {time: 0, offset: Date.now()}});
  });

  it('should be div', () => {
    expect(TimerComponent.type).toEqual('div');
  });

  it('should have its component named as timer className', () => {
    expect(TimerComponent.props.className).toEqual('timer');
  });
});

describe('TimerClass', () => {
  let timer;
  let callback;
  let oldTimerProp = false;

  beforeEach(() => {
    callback = expect.createSpy();
    timer = TestUtils.renderIntoDocument(<Timer callback={callback} timerProp={oldTimerProp}/>);
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(timer)).toBe(true);
  });

  it('should have state', () => {
    expect(timer.state).toExist();
  });

  it('should match props.timer to param timer', () => {
    var timerProps = {
      callback: callback,
      time: 60,
      timerProp: oldTimerProp
    };
    expect(timer.props).toEqual(timerProps);
  });

  it('should have called start, and set offset, when mounting', () => {
    expect(timer.state.offset).toExist();
  });

  it('should change offset after start()', () => {
    var oldOffset = timer.state.offset;
    expect(timer.state.offset).toEqual(oldOffset);
    timer.start();
    expect(timer.state.offset).toBeGreaterThanOrEqualTo(oldOffset);
  });

  it('should return to initial state after stop()', () => {
    var initialState = {
      time: 0,
      timesup: false,
      offset: timer.state.offset
    };
    expect(timer.state.time).toEqual(60000);
    expect(timer.state).toNotEqual(initialState);
    timer.stop();
    expect(timer.state.time).toEqual(0);
    expect(timer.state).toEqual(initialState);
  });

  it('should decrease time after progress()', () => {
    var currentState = {...timer.state};
    expect(timer.state).toEqual(currentState);
    timer.progress();
    expect(timer.state.time).toBeLessThanOrEqualTo(currentState.time);
    expect(timer.state.offset).toBeGreaterThanOrEqualTo(currentState.offset);
  });

  it('should call callback function when time is up', () => {
    timer.setState({time: 0});
    expect(timer.props.callback.calls.length).toEqual(0);
    timer.progress();
    expect(timer.props.callback.calls.length).toEqual(1);
  });

  it('should call stop() after unmount', () => {
    var initialState = {
      time: 0,
      timesup: false,
      offset: timer.state.offset
    };
    timer.componentWillUnmount();
    expect(timer.state.time).toEqual(0);
    expect(timer.state).toEqual(initialState);
  });

  it('should reset timer', () => {
    var initialState = {
      time: 60 * 1000,
      timesup: false,
      offset: timer.state.offset
    };
    timer.resetTimer();
    // Round the time to allow for variations in processing speed
    expect(initialState.time).toBe(timer.state.time);
    expect(timer.state.timesup).toEqual(false);
  })

  it('should reset timer when receiving new timerProp', () => {
    var initialState = {
      time: 60 * 1000,
      timesup: false,
      offset: timer.state.offset
    };
    timer.start();
    timer.componentWillReceiveProps(oldTimerProp);
    expect(timer.state.timesup).toEqual(false);

    var newTimerProp = true;

    timer.componentWillReceiveProps(newTimerProp);
    expect(initialState.time).toBe(timer.state.time);
    expect(timer.state.timesup).toEqual(false);

  })

});

const then = (callback, timeout) => {
  setTimeout(callback, timeout > 0 ? timeout : 0);
  return {then: then};
};
