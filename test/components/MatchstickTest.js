/**
 * Created by lewa on 19/07/2016.
 */
import expect from 'expect';
import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import Matchstick from 'components/MatchPuzzle/Matchstick';
import MatchPlaceholder from 'components/MatchPuzzle/MatchPlaceholder';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';

describe('MatchstickShallowComponent', () => {
  let MatchstickComponent;

  beforeEach(() => {
    const identity = el => el;
    MatchstickComponent = createComponent(Matchstick.DecoratedComponent, {connectDragSource: identity, isDragging: false, pos: [0, 0]});
  });

  it('should be div', () => {
    expect(MatchstickComponent.type).toEqual('img');
  });
});

describe('MatchstickClass', () => {
  let match;
  let backend;
  let placeholder;

  beforeEach(() => {
    var Context = DragDropContext(TestBackend);
    const MatchstickContext = (Context) (Matchstick);
    const pos = [1, 2];
    match =  TestUtils.renderIntoDocument(
      <MatchstickContext pos={pos} type={'MATCH'} />
    );
    const PlaceholderContext = (Context) (MatchPlaceholder);
    const noMatch = {hidden: true};
    const onDrop = expect.createSpy();
    const place = [0, 0];
    placeholder = TestUtils.renderIntoDocument(
      <PlaceholderContext pos={place} match={noMatch} onDrop={onDrop} />
    );
    backend = match.getManager().getBackend();
  });

  it('should call beginDrag when dragging and onDrop after drop', () => {
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
});
