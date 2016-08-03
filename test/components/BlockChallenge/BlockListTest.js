/**
 * Created by lewa on 27/06/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import TestUtils from 'react-addons-test-utils';
import BlockList from 'components/BlockChallenge/BlockList';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';

describe('BlockListShallowComponent', () => {
  let BlockListComponent;

  beforeEach(() => {
    BlockListComponent = createComponent(BlockList, {blocks: {blocks: [], win: false, correctOrder:[], end: false}});
  });

  it('should be div', () => {
    expect(BlockListComponent.type).toEqual('div');
  });
});

describe('BlockListClass', () => {
  let blockList;
  let blockListDnD;
  let blocks;
  let winText;
  let timesupText;

  beforeEach(() => {
    winText = "Register with Zühlke's talent database";
    timesupText = "Time's up, game over!";
    const BlockListContext = DragDropContext(TestBackend) (BlockList);
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
      verifyCodeOrder: expect.createSpy(),
      repositionCodeBlocks: expect.createSpy()
    };
    let timerActions = {
      startTimer: expect.createSpy(),
      tick: expect.createSpy()
    };
    blockListDnD = TestUtils.renderIntoDocument(
      <BlockListContext blocks={blocks} actions={actions} timer={timer} timerActions={timerActions}/>
    );
    blockList = blockListDnD.refs.child;
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(blockListDnD)).toBe(true);
  });

  it('should have props/state', () => {
    expect(blockListDnD.props).toExist();
    expect(blockList.state).toExist();
  });

  it('should have props.blocks/state.blocks', () => {
    expect(blockListDnD.props.blocks).toExist();
    expect(blockList.state.blocks).toExist();
  });

  it('should have false state.attempt and state.end', () => {
    expect(blockList.state.attempt).toBe(false);
    expect(blockList.state.end).toBe(false);
  });

  it('should match param blocks', () => {
    expect(blockListDnD.props.blocks).toEqual(blocks);
    expect(blockList.state.blocks).toEqual(blocks);
  });

  it('should change state.attempt when attempt of submission is made', () => {
    expect(blockList.state.attempt).toEqual(false);
    blockList.submitOrder();
    expect(blockList.state.attempt).toEqual(true);
  });

  it('should call verifyCodeOrder after submission', () => {
    expect(blockListDnD.props.actions.verifyCodeOrder.calls.length).toEqual(0);
    expect(blockList.props.actions.verifyCodeOrder.calls.length).toEqual(0);
    blockList.submitOrder();
    expect(blockListDnD.props.actions.verifyCodeOrder.calls.length).toEqual(1);
    expect(blockList.props.actions.verifyCodeOrder.calls.length).toEqual(1);
  });

  it('should render Win component if win is true', () => {
    var blockListNode = ReactDOM.findDOMNode(blockListDnD);
    expect(blockListNode.children.length).toEqual(2);
    expect(blockListNode.innerText.includes(winText)).toBe(false);

    blocks.win = true;
    blockList.setState({ blocks: blocks });

    blockListNode = ReactDOM.findDOMNode(blockListDnD);
    expect(blockListNode.children.length).toEqual(3);
    expect(blockListNode.innerText.includes(winText)).toBe(true);
  });

  it('should render Fail component if time is up', () => {
    var blockListNode = ReactDOM.findDOMNode(blockListDnD);
    expect(blockListNode.children.length).toEqual(2);
    expect(blockListNode.innerText.includes(timesupText)).toBe(false);
    var newState = { blocks: blocks };

    blockListDnD.props.timer.timesup = false;
    blockList.timeIsUp(newState);
    blockListNode = ReactDOM.findDOMNode(blockListDnD);
    expect(blockListNode.children.length).toEqual(2);
    expect(blockListNode.innerText.includes(timesupText)).toBe(false);

    blockListDnD.props.timer.timesup = true;
    blockList.timeIsUp(newState);
    blockListNode = ReactDOM.findDOMNode(blockListDnD);
    expect(blockListNode.children.length).toEqual(3);
    expect(blockListNode.innerText.includes(timesupText)).toBe(true);
  });

  it('should not render Fail component if time is up but win is true', () => {
    var blockListNode = ReactDOM.findDOMNode(blockListDnD);
    expect(blockListNode.children.length).toEqual(2);
    expect(blockListNode.innerText.includes(timesupText)).toBe(false);
    expect(blockListNode.innerText.includes(winText)).toBe(false);
    blocks.win = true;
    var newState = { blocks: blocks };

    blockListDnD.props.timer.timesup = true;
    blockList.timeIsUp(newState);
    blockListNode = ReactDOM.findDOMNode(blockListDnD);
    expect(blockListNode.children.length).toEqual(3);
    expect(blockListNode.innerText.includes(timesupText)).toBe(false);
    expect(blockListNode.innerText.includes(winText)).toBe(true);
  });

  it('should call repositionCodeBlocks after block movement', () => {
    expect(blockListDnD.props.actions.repositionCodeBlocks.calls.length).toEqual(0);
    expect(blockList.props.actions.repositionCodeBlocks.calls.length).toEqual(0);
    blockList.moveBlock();
    expect(blockListDnD.props.actions.repositionCodeBlocks.calls.length).toEqual(1);
    expect(blockList.props.actions.repositionCodeBlocks.calls.length).toEqual(1);
  });
});
