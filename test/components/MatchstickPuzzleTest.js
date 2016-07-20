/**
 * Created by lewa on 19/07/2016.
 */
import expect from 'expect';
import React, { Component } from 'react';
import createComponent from 'helpers/shallowRenderHelper';
import MatchstickPuzzle from 'components/MatchstickPuzzle';

describe('MatchstickPuzzleShallowComponent', () => {
  let MatchstickPuzzleComponent;

  beforeEach(() => {
    MatchstickPuzzleComponent = createComponent(MatchstickPuzzle.DecoratedComponent);
  });

  it('should be div', () => {
    expect(MatchstickPuzzleComponent.type).toEqual('div');
  });
});