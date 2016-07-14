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
  let blocks;

  beforeEach(() => {
    const BlockListContext = wrapInTestContext(BlockList);
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
    blockList = TestUtils.renderIntoDocument(
      <BlockListContext blocks={blocks} actions={actions} timer={timer} timerActions={timerActions}/>
    )
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(blockList)).toBe(true);
  });

  it('should have state', () => {
    expect(blockList.state).toExist();
  });

  it('should have state.draggindIndex set to null', () => {
    expect(blockList.state.draggingIndex).toBe(null);
  });

  it('should have state.blocks', () => {
    expect(blockList.state.blocks).toExist();
  });

  it('should match param blocks', () => {
    expect(blockList.state.blocks).toEqual(blocks);
  });

  it('should change state.attempt when attempt of submission is made', () => {
    expect(blockList.state.attempt).toEqual(false);
    blockList.submitOrder();
    expect(blockList.state.attempt).toEqual(true);
  });

  it('should not change state.attempt unless attempt', () => {
    blockList.submitOrder();
    expect(blockList.state.attempt).toEqual(true);
    var newState = {blocks: blocks};
    newState.blocks.blocks = [
      {text: 'pieceOfCode2', id: 2},
      {text: 'pieceOfCode1', id: 1}];
    blockList.updateState(newState);
    expect(blockList.state.attempt).toEqual(false);
  });

  it('should call verifyOrder after submission', () => {
    expect(blockList.props.actions.verifyOrder.calls.length).toEqual(0);
    blockList.submitOrder();
    expect(blockList.props.actions.verifyOrder.calls.length).toEqual(1);
  });

  it('should change state after update', () => {
    var newState = {blocks: blocks};
    newState.blocks.blocks = [
      {text: 'pieceOfCode2', id: 2},
      {text: 'pieceOfCode1', id: 1}];

    expect(blockList.state.blocks).toEqual(blocks);
    expect(blockList.state.blocks).toNotEqual(newState.blocks.blocks);

    blockList.updateState(newState);

    expect(blockList.state.blocks).toNotEqual(newState.blocks.blocks);
    expect(blockList.state.blocks).toEqual(blocks);
  });

  it('should render Win component if win state', () => {
    var newState = {blocks: blocks};
    newState.blocks.win = true;

    var blockListNode = ReactDOM.findDOMNode(blockList);

    expect(blockListNode.children.length).toEqual(2);
    blockList.updateState(newState);
    blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children.length).toEqual(3);
  });

  it('should render Win component if time is up / end state', () => {
    var blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children.length).toEqual(2);
    var newState = {blocks: blocks};

    blockList.props.timer.timesup = false;
    blockList.timeIsUp(newState);
    blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children.length).toEqual(2);

    blockList.props.timer.timesup = true;
    blockList.timeIsUp(newState);
    blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children.length).toEqual(3);
  });
});
