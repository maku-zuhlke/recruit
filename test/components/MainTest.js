/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import Main from 'components/Main';
import BlockList from 'components/BlockChallenge/BlockList';
import MatchstickPuzzle from 'components/MatchPuzzle/MatchstickPuzzle';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';

describe('MainComponent', () => {
  let MainComponent;
  beforeEach(() => {
    MainComponent = createComponent(Main.DecoratedComponent);
  });

  it('should have its component named as default className', () => {
    expect(MainComponent.props.className).toEqual('index');
  });
});

describe('MainClass', () => {
  let main;
  let blocks;
  let matches;

  beforeEach(() => {
    const MainContext = DragDropContext(TestBackend) (Main);
    blocks = {
      correctOrder: [2, 1],
      blocks: [
        {text: 'pieceOfCode1', id: 1},
        {text: 'pieceOfCode2', id: 2}],
      win: false
    };
    matches = {
      numbers :[[1,1,0,1,1,0,1],[0,1,1,0,1,1,1],[1,1,1,1,1,1,1]],
      operation: [1,0,0],
      moves: 2,
      correctPositions: {numbers: [[1,1,1,1,1,0,1],[0,1,1,1,1,0,1],[1,1,0,1,1,1,1]], operation:[1,0,0]},
      win: false
    };
    let timer = {
      time: 0,
      offset: Date.now()
    };
    let timerActions = {
      startTimer: expect.createSpy(),
      tick: expect.createSpy()
    };
    let mainDnD = TestUtils.renderIntoDocument(
      <MainContext blocks={blocks} matches={matches} timer={timer} timerActions={timerActions} />
    );
    main = mainDnD.getDecoratedComponentInstance().refs.child;
  });

  it('should return BlockList component', () => {
    expect(main.renderBlockList().type).toBe(BlockList);
  });

  it('should have blocks inside BlockList component', () => {
    expect(main.renderBlockList().props.blocks).toEqual(blocks);
  });

  it('should return MatchstickPuzzle component', () => {
    expect(main.renderMatchstickPuzzle().type).toBe(MatchstickPuzzle);
  });

  it('should have matches inside MatchstickPuzzle component', () => {
    expect(main.renderMatchstickPuzzle().props.matches).toEqual(matches);
  });

  it('should set state.startCoding to true', () => {
    expect(main.state.startCoding).toEqual(false);
    main.startCoding();
    expect(main.state.startCoding).toEqual(true);
  });

  it('should render BlockList component after starting the coding challenge', () => {
    var mainNode = ReactDOM.findDOMNode(main);
    expect(mainNode.children.length).toEqual(2); /* rows */
    expect(mainNode.children[1].children.length).toEqual(1); /* content row */
    expect(mainNode.children[1].children[0].children.length).toEqual(2); /* content div */
    expect(mainNode.children[1].children[0].children[0].children.length).toEqual(1); /* button element */
    expect(mainNode.children[1].children[0].children[0].children[0].children.length).toEqual(0); /* span element */
    main.startCoding();
    mainNode = ReactDOM.findDOMNode(main);
    expect(mainNode.children.length).toEqual(2); /* rows */
    expect(mainNode.children[1].children.length).toEqual(1); /* content row */
    expect(mainNode.children[1].children[0].children.length).toEqual(1); /* content div */
    expect(mainNode.children[1].children[0].children[0].children.length).toEqual(1);  /* list element */
    expect(mainNode.children[1].children[0].children[0].children[0].children.length).toBeGreaterThan(0);  /* block element */
  });

  it('should set state.startPuzzle to true', () => {
    expect(main.state.startPuzzle).toEqual(false);
    main.startPuzzle();
    expect(main.state.startPuzzle).toEqual(true);
  });

  it('should render MatchstickPuzzle component after starting the puzzle challenge', () => {
    var mainNode = ReactDOM.findDOMNode(main);
    expect(mainNode.children.length).toEqual(2); /* rows */
    expect(mainNode.children[1].children.length).toEqual(1); /* content row */
    expect(mainNode.children[1].children[0].children.length).toEqual(2); /* content div */
    expect(mainNode.children[1].children[0].children[0].children.length).toEqual(1); /* button element */
    expect(mainNode.children[1].children[0].children[0].children[0].children.length).toEqual(0); /* span element */
    main.startPuzzle();
    mainNode = ReactDOM.findDOMNode(main);
    expect(mainNode.children.length).toEqual(2); /* rows */
    expect(mainNode.children[1].children.length).toEqual(1); /* content row */
    expect(mainNode.children[1].children[0].children.length).toEqual(1); /* content div */
    expect(mainNode.children[1].children[0].children[0].children.length).toEqual(1);  /* list element */
    expect(mainNode.children[1].children[0].children[0].children[0].children.length).toBeGreaterThan(0);  /* block element */
  });
});
