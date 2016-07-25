/**
 * Created by lewa on 25/07/2016.
 */
import expect from 'expect';
import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import Matchstick from 'components/MatchPuzzle/Matchstick';
import MatchPlaceholder from 'components/MatchPuzzle/MatchPlaceholder';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';

describe('MatchPlaceholderShallowComponent', () => {
  let MatchPlaceholderComponent;

  beforeEach(() => {
    const identity = el => el;
    MatchPlaceholderComponent = createComponent(MatchPlaceholder.DecoratedComponent,
      {connectDropTarget: identity, match: {hidden: true}, pos: [0, 0], onDrop: identity(), classes: "", isOver: false});
  });

  it('should be div', () => {
    expect(MatchPlaceholderComponent.type).toEqual('div');
  });
});

describe('MatchPlaceholderClass', () => {
  let placeholder;
  let backend;
  let match;
  let PlaceholderContext;
  let place;
  let onDrop;

  beforeEach(() => {
    var Context = DragDropContext(TestBackend);
    PlaceholderContext = (Context) (MatchPlaceholder);
    onDrop = expect.createSpy();
    place = [0, 0];

    const MatchstickContext = (Context) (Matchstick);
    const pos = [1, 2];
    match =  TestUtils.renderIntoDocument(
      <MatchstickContext pos={pos} type={'MATCH'} />
    );
  });

  it('should call onDrop after drop', () => {
    const noMatch = {hidden: true};
    placeholder = TestUtils.renderIntoDocument(
      <PlaceholderContext pos={place} match={noMatch} onDrop={onDrop} classes=""/>
    );
    backend = placeholder.getManager().getBackend();
    let matchComponent = TestUtils.findRenderedComponentWithType(match, Matchstick);
    let placeholderComponent = TestUtils.findRenderedComponentWithType(placeholder, MatchPlaceholder);

    expect(placeholderComponent.props.onDrop.calls.length).toEqual(0);
    backend.simulateBeginDrag([matchComponent.getHandlerId()]);
    expect(placeholderComponent.props.onDrop.calls.length).toEqual(0);
    backend.simulateHover([placeholderComponent.getHandlerId()]);
    expect(placeholderComponent.props.onDrop.calls.length).toEqual(0);

    backend.simulateDrop();
    expect(placeholderComponent.props.onDrop.calls.length).toEqual(1);
  });

  it('should not call onDrop after drop if the place is occupied', () => {
    const existentMatch = {hidden: false, pos:[0,0]};
    placeholder = TestUtils.renderIntoDocument(
      <PlaceholderContext pos={place} match={existentMatch} onDrop={onDrop} classes=""/>
    );
    backend = placeholder.getManager().getBackend();
    let matchComponent = TestUtils.findRenderedComponentWithType(match, Matchstick);
    let placeholderComponent = TestUtils.findRenderedComponentWithType(placeholder, MatchPlaceholder);

    expect(placeholderComponent.props.onDrop.calls.length).toEqual(0);
    backend.simulateBeginDrag([matchComponent.getHandlerId()]);
    expect(placeholderComponent.props.onDrop.calls.length).toEqual(0);
    backend.simulateHover([placeholderComponent.getHandlerId()]);
    expect(placeholderComponent.props.onDrop.calls.length).toEqual(0);
    backend.simulateDrop();
    expect(placeholderComponent.props.onDrop.calls.length).toEqual(0);
  });
});

