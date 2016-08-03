/**
 * Created by lewa on 07/07/2016.
 */
'use strict';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import Timer from 'components/Timer';
import React from 'react';
import ReactDOM from 'react-dom';

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
  let timerProps;
  let timer;

  beforeEach(() => {
    timerProps = {
      time: 0,
      timesup: false
    };
    let actions = {
      startTimer: expect.createSpy(),
      stopTimer: expect.createSpy(),
      tick: expect.createSpy()
    };
    let callback = expect.createSpy();
    timer = TestUtils.renderIntoDocument(<Timer timer={timerProps} actions={actions} callback={callback} />);
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(timer)).toBe(true);
  });

  it('should have state', () => {
    expect(timer.state).toExist();
  });

  it('should match props.timer to param timer', () => {
    expect(timer.props.timer).toEqual(timerProps);
  });

  it('should have called startTimer when mounting', () => {
    expect(timer.props.actions.startTimer.calls.length).toEqual(1);
  });

  it('should call startTimer within start()', () => {
    expect(timer.props.actions.startTimer.calls.length).toEqual(1);
    timer.start();
    expect(timer.props.actions.startTimer.calls.length).toEqual(2);
  });

  it('should call stopTimer within stop()', () => {
    expect(timer.props.actions.stopTimer.calls.length).toEqual(0);
    timer.stop();
    expect(timer.props.actions.stopTimer.calls.length).toEqual(1);
  });

  it('should call tick within progress()', () => {
    expect(timer.props.actions.tick.calls.length).toEqual(0);
    timer.progress();
    expect(timer.props.actions.tick.calls.length).toEqual(1);
  });

  it('should update props within progress()', () => {
    var timeOver = -59001;
    expect(timer.props.timer.timesup).toEqual(false);
    expect(timer.props.callback.calls.length).toEqual(0);
    expect(timer.props.actions.stopTimer.calls.length).toEqual(0);
    timer.props.timer.time = timeOver;
    timer.progress();
    expect(timer.props.timer.timesup).toEqual(true);
    expect(timer.props.callback.calls.length).toEqual(1);
    expect(timer.props.actions.stopTimer.calls.length).toEqual(1);
  });
});
