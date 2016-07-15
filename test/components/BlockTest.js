/**
 * Created by lewa on 28/06/2016.
 */
'use strict';
import expect from 'expect';
import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import Block from 'components/Block';

function wrapInTestContext(DecoratedComponent) {
  return DragDropContext(TestBackend)(
    class TestContextContainer extends Component {
      render() {
        return <DecoratedComponent {...this.props} />;
      }
    }
  );
}

describe('BlockComponent', () => {
  it('should be rendered', () => {
    const OriginalBlock = Block.DecoratedComponent.DecoratedComponent;
    const b = {text: 'test', id: 0};
    const moveCard = () => {};
    const identity = el => el;
    let root = TestUtils.renderIntoDocument(
      <OriginalBlock connectDragSource={identity} connectDropTarget={identity} block={b} index={0} isDragging={false} moveCard={moveCard} />
    );
    expect(TestUtils.findRenderedDOMComponentWithTag(root, 'pre')).toExist();
  });
});


describe('BlockClass', () => {
  let block;
  let backend;

  beforeEach(() => {
    const  BlockContext = wrapInTestContext(Block);
    const b = {text: 'test', id: 0};
    const moveCard = expect.createSpy();
    block = TestUtils.renderIntoDocument(
      <BlockContext block={b} index={0} isDragging={false} moveCard={moveCard}/>
    );
    backend = block.getManager().getBackend();
  })

});
