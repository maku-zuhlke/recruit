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
      offset: Date.now()
    };
    let actions = {
      startTimer: expect.createSpy()
    };
    timer = TestUtils.renderIntoDocument(<Timer timer={timerProps} actions={actions} />);
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(timer)).toBe(true);
  });

  it('should have state', () => {
    expect(timer.state).toExist();
  });

  it('should match state to param timer', () => {
    expect(timer.state).toEqual(timerProps);
  });

  it('should match props.timer to param timer', () => {
    expect(timer.props.timer).toEqual(timerProps);
  });

  it('should have called startTimer when mounting', () => {
    expect(timer.props.actions.startTimer.calls.length).toEqual(1);
  });
});
