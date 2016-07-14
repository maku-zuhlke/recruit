/**
 * Created by lewa on 27/06/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import TestUtils from 'react-addons-test-utils';
import BlockList from 'components/BlockList';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';


function wrapInTestContext(DecoratedComponent) {
  return DragDropContext(TestBackend)(
    class TestContextContainer extends Component {
      render() {
        return <DecoratedComponent {...this.props} />;
      }
    }
  );
}

describe('BlockListShallowComponent', () => {
  let BlockListComponent;

  beforeEach(() => {
    BlockListComponent = createComponent(BlockList.DecoratedComponent, {blocks: {blocks: [], win: false, correctOrder:[], end: false}});
  });

  it('should be div', () => {
    expect(BlockListComponent.type).toEqual('div');
  });
});

describe('BlockListClass', () => {
  let blockList;
  let blockListDnD;
  let blocks;

  beforeEach(() => {
    const BlockListContext = DragDropContext(TestBackend) (BlockList);
      //wrapInTestContext(BlockList);
    blocks = {
      correctOrder: [2, 1],
      blocks: [
        {text: 'pieceOfCode1', id: 1},
        {text: 'pieceOfCode2', id: 2}],
      win: false
    };
    let timer = {
      time: 0,
      offset: Date.now()
    };
    let actions = {
      verifyOrder: expect.createSpy()
    };
    let timerActions = {
      startTimer: expect.createSpy()
    };
    blockListDnD = TestUtils.renderIntoDocument(
      <BlockListContext blocks={blocks} actions={actions} timer={timer} timerActions={timerActions}/>
    );
    blockList = blockListDnD.getDecoratedComponentInstance().refs.child;
    var backend = blockListDnD.getManager().getBackend();
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(blockListDnD)).toBe(true);
  });

  it('should have props', () => {
    expect(blockListDnD.props).toExist();
  });

  it('should have props.blocks', () => {
    expect(blockListDnD.props.blocks).toExist();
  });

  it('should match param blocks', () => {
    expect(blockListDnD.props.blocks).toEqual(blocks);
  });

  it('should change state.attempt when attempt of submission is made', () => {
    expect(blockList.state.attempt).toEqual(false);
    blockList.submitOrder();
    expect(blockList.state.attempt).toEqual(true);
  });

  it('should call verifyOrder after submission', () => {
    expect(blockListDnD.props.actions.verifyOrder.calls.length).toEqual(0);
    blockList.submitOrder();
    expect(blockListDnD.props.actions.verifyOrder.calls.length).toEqual(1);
  });

  it('should render Win component if time is up / end state', () => {
    var blockListNode = ReactDOM.findDOMNode(blockListDnD);
    expect(blockListNode.children.length).toEqual(2);
    var newState = {blocks: blocks};

    blockListDnD.props.timer.timesup = false;
    blockList.timeIsUp(newState);
    blockListNode = ReactDOM.findDOMNode(blockListDnD);
    expect(blockListNode.children.length).toEqual(2);

    blockListDnD.props.timer.timesup = true;
    blockList.timeIsUp(newState);
    blockListNode = ReactDOM.findDOMNode(blockListDnD);
    expect(blockListNode.children.length).toEqual(3);
  });
});
