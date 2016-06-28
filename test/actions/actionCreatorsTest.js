/**
 * Created by lewa on 28/06/2016.
 */
'use strict';
import expect from 'expect';
import * as actions from 'actions/index';
import * as types from 'actions/const';

describe('actions', () => {
  it('should create an action to verify the state of the blocks', () => {
    const expectedAction = {
      type: types.VERIFY
    };
    expect(actions.verifyOrder()).toEqual(expectedAction)
  });
});
