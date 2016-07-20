/**
 * Created by lewa on 19/07/2016.
 */
import expect from 'expect';
import React, { Component } from 'react';
import createComponent from 'helpers/shallowRenderHelper';
import Matchstick from 'components/Matchstick';

describe('MatchstickShallowComponent', () => {
  let MatchstickComponent;

  beforeEach(() => {
    const identity = el => el;
    MatchstickComponent = createComponent(Matchstick.DecoratedComponent, {connectDragSource: identity, isDragging: false});
  });

  it('should be div', () => {
    expect(MatchstickComponent.type).toEqual('div');
  });
});
