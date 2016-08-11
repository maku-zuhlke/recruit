/**
 * Created by lewa on 27/06/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import TestUtils from 'react-addons-test-utils';
import ConnectedBlockList, { BlockList } from 'components/BlockChallenge/BlockList';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import { winText, timesUpText, wrongAnswerText } from 'data/strings';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('BlockListShallowComponent', () => {
  let BlockListComponent;

  beforeEach(() => {
    BlockListComponent = createComponent(BlockList, {blocks: {blocks: [], correctOrder:[], end: false}});
  });

  it('should be div', () => {
    expect(BlockListComponent.type).toEqual('div');
  });
});

describe('BlockListUnconnectedComponent', () => {
  let blockList;

  beforeEach(() => {
    var blocks = {
      correctOrder: [2, 1],
      blocks: [
        {text: 'pieceOfCode1', id: 1},
        {text: 'pieceOfCode2', id: 2}],
    };
    var actions = {
      checkSolution: expect.createSpy(),
      timeIsUp: expect.createSpy(),
      moveCodeBlock: expect.createSpy()
    };
    var BlockListContext = DragDropContext(TestBackend) (BlockList);
    var DecoratedBlockList = TestUtils.renderIntoDocument(
      <BlockListContext blocks={blocks} actions={actions} />
    );
    blockList = DecoratedBlockList.refs.child;
  });

  it('should call checkSolution', () => {
    expect(blockList.props.actions.checkSolution.calls.length).toEqual(0);
    blockList.done();
    expect(blockList.props.actions.checkSolution.calls.length).toEqual(1);
  });

  it('should call timeIsUp', () => {
    expect(blockList.props.actions.timeIsUp.calls.length).toEqual(0);
    blockList.timeIsUp();
    expect(blockList.props.actions.timeIsUp.calls.length).toEqual(1);
  });

  it('should call moveBlock', () => {
    expect(blockList.props.actions.moveCodeBlock.calls.length).toEqual(0);
    blockList.moveBlock(0, 1);
    expect(blockList.props.actions.moveCodeBlock.calls.length).toEqual(1);
  });
});

describe('BlockListConnectedComponent', () => {
  let blockList;
  let blockListDnD;
  let initialState;
  let BlockListContext;
  let mockStore;
  let store;

  beforeEach(() => {
    BlockListContext = DragDropContext(TestBackend) (ConnectedBlockList);
    initialState = {
      blocks: {
        correctOrder: [2, 1],
        blocks: [
          {text: 'pieceOfCode1', id: 1},
          {text: 'pieceOfCode2', id: 2}],
        win: false
      }
    };
    mockStore = configureStore([]);
    store = mockStore(initialState);
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <BlockListContext/>
      </Provider>
    );
    blockListDnD = TestUtils.findRenderedComponentWithType(provider, BlockListContext);

    blockList = blockListDnD.refs.child;
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(blockListDnD)).toBe(true);
  });

  it('should have props', () => {
    expect(blockList.stateProps).toExist();
  });

  it('should have stateProps.blocks', () => {
    expect(blockList.stateProps.blocks).toExist();
  });

  it('should not have stateProps.attempt and stateProps.end', () => {
    expect(blockList.stateProps.attempt).toBe(undefined);
    expect(blockList.stateProps.end).toBe(undefined);
  });

  it('should match param blocks', () => {
    expect(blockList.stateProps.blocks).toEqual(initialState.blocks);
  });

  it('should render WrongAnswer component if an unsuccessful attempt was made', () => {
    var blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children[0].children[0].children[0].children.length).toEqual(2);
    expect(blockListNode.innerText.includes(wrongAnswerText)).toBe(false);

    initialState.blocks.attempt = true;
    store = mockStore(initialState);
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <BlockListContext/>
      </Provider>
    );
    blockListDnD = TestUtils.findRenderedComponentWithType(provider, BlockListContext);
    blockList = blockListDnD.refs.child;

    blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children[0].children[0].children[0].children.length).toEqual(3);
    expect(blockListNode.innerText.includes(wrongAnswerText)).toBe(true);
  });

  it('should render Win component if numberOfItemsInWrongPosition is 0', () => {
    var blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children[0].children[0].children[0].children.length).toEqual(2);
    expect(blockListNode.innerText.includes(winText)).toBe(false);

    initialState.blocks.numberOfItemsInWrongPosition = 0;
    store = mockStore(initialState);
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <BlockListContext/>
      </Provider>
    );
    blockListDnD = TestUtils.findRenderedComponentWithType(provider, BlockListContext);
    blockList = blockListDnD.refs.child;

    blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children[0].children[0].children[0].children.length).toEqual(3);
    expect(blockListNode.innerText.includes(winText)).toBe(true);
  });

  it('should render Fail component if end is true', () => {
    var blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children[0].children[0].children[0].children.length).toEqual(2);
    expect(blockListNode.innerText.includes(timesUpText)).toBe(false);

    initialState.blocks.end = true;
    store = mockStore(initialState);
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <BlockListContext/>
      </Provider>
    );
    blockListDnD = TestUtils.findRenderedComponentWithType(provider, BlockListContext);
    blockList = blockListDnD.refs.child;

    blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children[0].children[0].children[0].children.length).toEqual(3);
    expect(blockListNode.innerText.includes(timesUpText)).toBe(true);
  });

  it('should not render Fail component if end is true but numberOfItemsInWrongPosition is 0', () => {
    var blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children[0].children[0].children[0].children.length).toEqual(2);
    expect(blockListNode.innerText.includes(timesUpText)).toBe(false);
    expect(blockListNode.innerText.includes(winText)).toBe(false);

    initialState.blocks.end = true;
    initialState.blocks.numberOfItemsInWrongPosition = 0;
    store = mockStore(initialState);
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <BlockListContext/>
      </Provider>
    );
    blockListDnD = TestUtils.findRenderedComponentWithType(provider, BlockListContext);
    blockList = blockListDnD.refs.child;

    blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children[0].children[0].children[0].children.length).toEqual(3);
    expect(blockListNode.innerText.includes(timesUpText)).toBe(false);
    expect(blockListNode.innerText.includes(winText)).toBe(true);
  });

  it('should have checkSolution action', () => {
    expect(blockList.dispatchProps.actions.checkSolution).toExist();
    expect(typeof(blockList.dispatchProps.actions.checkSolution)).toBe('function');
  });

  it('should have timeIsUp action', () => {
    expect(blockList.dispatchProps.actions.timeIsUp).toExist();
    expect(typeof(blockList.dispatchProps.actions.timeIsUp)).toBe('function');
  });

  it('should have moveCodeBlock action', () => {
    expect(blockList.dispatchProps.actions.moveCodeBlock).toExist();
    expect(typeof(blockList.dispatchProps.actions.moveCodeBlock)).toBe('function');
  });
});


