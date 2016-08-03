/**
 * Created by lewa on 28/06/2016.
 */
'use strict';
import expect from 'expect';
import * as blockActions from 'actions/indexBlock';
import * as matchesActions from 'actions/indexMatches';
import * as timerActions from 'actions/indexTimer';
import * as types from 'actions/const';

describe('blockActions', () => {
  it('should create an action to verify the state/order of the blocks', () => {
    const expectedAction = {
      type: types.VERIFY_CODE_ORDER
    };
    expect(blockActions.verifyCodeOrder()).toEqual(expectedAction)
  });

  it('should create an action to reposition blocks of code', () => {
    const dragIndex = 0;
    const hoverIndex = 1;
    const expectedAction = {
      type: types.REPOSITION_CODE_BLOCKS,
      dragIndex,
      hoverIndex
    };
    expect(blockActions.repositionCodeBlocks(dragIndex, hoverIndex)).toEqual(expectedAction)
  });
});

describe('matchesActions', () => {
  it('should create an action to remove match', () => {
    const before = [0, 0];
    const expectedAction = {
      type: types.REMOVE_MATCH,
      before
    };
    expect(matchesActions.removeMatch(before)).toEqual(expectedAction);
  });

  it('should create an action to place match', () => {
    const after = [1, 2];
    const expectedAction = {
      type: types.PLACE_MATCH,
      after
    };
    expect(matchesActions.placeMatch(after)).toEqual(expectedAction);
  });

  it('should create an action to check matches positions', () => {
    const expectedAction = {
      type: types.CHECK
    };
    expect(matchesActions.checkMatches()).toEqual(expectedAction);
  });
});

describe('timerActions', () => {
  it('should create an action to start timer', () => {
    const offset = 10;
    const expectedAction = {
      type: types.START_TIMER,
      offset
    };
    expect(timerActions.startTimer(offset)).toEqual(expectedAction);
  });

  it('should create an action to tick timer', () => {
    const time = 60;
    const expectedAction = {
      type: types.TICK_TIMER,
      time
    };
    expect(timerActions.tickTimer(time)).toEqual(expectedAction);
  });

  it('should create an action to stop timer', () => {
    const expectedAction = {
      type: types.STOP_TIMER
    };
    expect(timerActions.stopTimer()).toEqual(expectedAction);
  });
});
