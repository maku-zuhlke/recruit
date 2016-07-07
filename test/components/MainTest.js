/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import Main from 'components/Main';
import BlockList from 'components/BlockList';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';


describe('MainComponent', () => {
  let MainComponent;

  beforeEach(() => {
    MainComponent = createComponent(Main);
  });

  it('should have its component name as default className', () => {
    expect(MainComponent.props.className).toEqual('index');
  });
});

describe('MainClass', () => {
  let main;
  let blocks;

  beforeEach(() => {

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
    let timerActions = {
      startTimer: expect.createSpy()
    };
    main = TestUtils.renderIntoDocument(
      <Main blocks={blocks} timer={timer} timerActions={timerActions} />
    )
  });

  it('should return BlockList component', () => {
    expect(main.renderBlockList().type).toBe(BlockList);
  });

  it('should have blocks inside BlockList component', () => {
    expect(main.renderBlockList().props.blocks).toEqual(blocks);
  });

  it('should set state.startChallenge to true', () => {
    expect(main.state.startChallenge).toEqual(false);
    main.start();
    expect(main.state.startChallenge).toEqual(true);
  });

  it('should render BlockList component after starting the challenge', () => {
    var mainNode = ReactDOM.findDOMNode(main);
    expect(mainNode.children.length).toEqual(1);
    main.start();
    mainNode = ReactDOM.findDOMNode(main);
    expect(mainNode.children.length).toBeGreaterThan(1);
  });
});
