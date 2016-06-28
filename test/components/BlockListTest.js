/**
 * Created by lewa on 27/06/2016.
 */
'use strict';
import { createSpy } from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import TestUtils from 'react-addons-test-utils';
import BlockList from 'components/BlockList';
import React from 'react';
import ReactDOM from 'react-dom';

describe('BlockListShallowComponent', () => {
  let BlockListComponent;

  beforeEach(() => {
    BlockListComponent = createComponent(BlockList, {blocks: {blocks: [], win: false, correctOrder:[]}});
  });

  it('should be div', () => {
    expect(BlockListComponent.type).to.equal('div');
  });
});

describe('BlockListClass', () => {
  let blockList;
  let blocks;

  beforeEach(() => {
    blocks = {
      correctOrder: [2, 1],
      blocks: [
        {text: 'pieceOfCode1', id: 1},
        {text: 'pieceOfCode2', id: 2}],
      win: false
    };
    let actions = {
      verifyOrder: createSpy()
    }
    blockList = TestUtils.renderIntoDocument(
      <BlockList blocks={blocks} actions={actions} />
    )
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(blockList)).to.be.true;
  });

  it('should have state', () => {
    expect(blockList.state).to.be.defined;
  });

  it('should have a state.draggindIndex', () => {
    expect(blockList.state.draggingIndex).to.be.defined;
  });

  it('should have state.draggindIndex set to null', () => {
    expect(blockList.state.draggingIndex).to.be.null;
  });

  it('should have state.blocks', () => {
    expect(blockList.state.blocks).to.be.defined;
  });

  it('should match param blocks', () => {
    expect(blockList.state.blocks).to.equal(blocks);
  });

  it('should call verifyOrder when state is updated', () => {
    expect(blockList.props.actions.verifyOrder.calls.length).to.equal(0);
    blockList.updateState({});
    expect(blockList.props.actions.verifyOrder.calls.length).to.equal(1);
  });

  it('should change state after update', () => {
    var newState = {blocks: blocks};
    newState.blocks.blocks = [
      {text: 'pieceOfCode2', id: 2},
      {text: 'pieceOfCode1', id: 1}];

    expect(blockList.state.blocks).to.equal(blocks);
    expect(blockList.state.blocks).to.not.equal(newState.blocks.blocks);

    blockList.updateState(newState);

    expect(blockList.state.blocks).to.not.equal(newState.blocks.blocks);
    expect(blockList.state.blocks).to.equal(blocks);
  });

  it('should render Win component if win state', () => {
    var newState = {blocks: blocks};
    newState.blocks.win = true;

    var blockListNode = ReactDOM.findDOMNode(blockList);

    expect(blockListNode.children.length).to.equal(3);
    blockList.updateState(newState);
    blockListNode = ReactDOM.findDOMNode(blockList);
    expect(blockListNode.children.length).to.equal(4);
  });
})
