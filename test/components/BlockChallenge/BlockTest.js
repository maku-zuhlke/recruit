/**
 * Created by lewa on 28/06/2016.
 */
'use strict';
import expect from 'expect';
import React, { Component } from 'react';
import TestUtils from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import Block from 'components/BlockChallenge/Block';

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
    const moveBlock = () => {};
    const identity = el => el;
    let root = TestUtils.renderIntoDocument(
      <OriginalBlock connectDragSource={identity} connectDropTarget={identity} block={b} index={0} isDragging={false} moveBlock={moveBlock} />
    );
    expect(TestUtils.findRenderedDOMComponentWithTag(root, 'pre')).toExist();
  });
});

describe('BlockClass', () => {
  let block;
  var test;
  let otherBlock;
  let backend;
  let ind;

  beforeEach(() => {
    const BlockContext = wrapInTestContext(Block);
    const firstBlock = {text: 'pieceOfCode', id: 0};
    const moveBlock = expect.createSpy();
    ind = 0;
    block = TestUtils.renderIntoDocument(
      <BlockContext block={firstBlock} index={ind} isDragging={false} moveBlock={moveBlock}/>
    );
    test = TestUtils.findRenderedComponentWithType(block, Block);
    backend = block.getManager().getBackend();

    const thirdBlock = {text: 'anotherPieceOfCode', id: 2};
    const moveAnotherBlock = expect.createSpy();
    /*otherBlock = TestUtils.renderIntoDocument(
      <BlockContext block={thirdBlock} index={2} isDragging={false} moveBlock={moveAnotherBlock}/>
    );*/
  });

  it('should not change index or call moveBlock while hovering itself', () => {
    expect(test.props.index).toEqual(ind);
    expect(test.props.moveBlock.calls.length).toEqual(0);
    console.log(test.getHandlerId())
    backend.simulateBeginDrag(['S3']);
    backend.simulateHover([test.getDecoratedComponentInstance().getHandlerId()]);
    expect(test.props.index).toEqual(ind);
    expect(test.props.moveBlock.calls.length).toEqual(0);
  });
/*
  it('should not call moveBlock while hovering a block below and not crossing its half', () => {
    let blockComponent = TestUtils.findRenderedComponentWithType(block, Block);
    let otherBlockComponent = TestUtils.findRenderedComponentWithType(otherBlock, Block);

    expect(otherBlockComponent.props.moveBlock.calls.length).toEqual(0);
    backend.simulateBeginDrag([blockComponent.getHandlerId()], {
      clientOffset: { x: -0.4, y: -0.4 },
      getSourceClientOffset: () => { return {x: -0.4, y: -0.4}; }
    });
    backend.simulateHover([otherBlockComponent.getDecoratedComponentInstance().getHandlerId()]);
    expect(otherBlockComponent.props.moveBlock.calls.length).toEqual(0);
  });

  it('should not call moveBlock while hovering a block above and not crossing its half', () => {
    let blockComponent = TestUtils.findRenderedComponentWithType(block, Block);
    let otherBlockComponent = TestUtils.findRenderedComponentWithType(otherBlock, Block);

    expect(blockComponent.props.moveBlock.calls.length).toEqual(0);
    backend.simulateBeginDrag([otherBlockComponent.getHandlerId()], {
      clientOffset: { x: 0.4, y: 0.4 },
      getSourceClientOffset: () => { return {x: 0.4, y: 0.4}; }
    });
    backend.simulateHover([blockComponent.getDecoratedComponentInstance().getHandlerId()]);
    expect(blockComponent.props.moveBlock.calls.length).toEqual(0);
  });

  it('should call moveBlock while hovering another block', () => {
    let blockComponent = TestUtils.findRenderedComponentWithType(block, Block);
    let otherBlockComponent = TestUtils.findRenderedComponentWithType(otherBlock, Block);
    expect(otherBlockComponent.props.moveBlock.calls.length).toEqual(0);
    backend.simulateBeginDrag([blockComponent.getHandlerId()], {
      clientOffset: { x: 5, y: 5 },
      getSourceClientOffset: () => { return {x: 5, y: 5}; }
    });
    backend.simulateHover([otherBlockComponent.getDecoratedComponentInstance().getHandlerId()]);
    expect(otherBlockComponent.props.moveBlock.calls.length).toEqual(1);
  });*/
});

