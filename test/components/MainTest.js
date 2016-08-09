/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import Main from 'components/Main';
import MatchstickPuzzle from 'components/MatchPuzzle/MatchstickPuzzle';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

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
  let initialState;
  let matches;
  let buttonsText;

  beforeEach(() => {
    buttonsText = "Coding challengePuzzle challenge";
    const MainContext = DragDropContext(TestBackend) (Main);
    initialState = {
      blocks: {
        correctOrder: [2, 1],
        blocks: [
          {text: 'pieceOfCode1', id: 1},
          {text: 'pieceOfCode2', id: 2}],
        win: false,
        numberOfItemsInWrongPosition: 2
      },
      matches: {
        numbers :[[1,1,0,1,1,0,1],[0,1,1,0,1,1,1],[1,1,1,1,1,1,1]],
        operation: [1,0,0],
        moves: 2,
        correctPositions: {numbers: [[1,1,1,1,1,0,1],[0,1,1,1,1,0,1],[1,1,0,1,1,1,1]], operation:[1,0,0]},
        win: false,
        correctOperation: false,
        correctNumbers: false
      }
    };

    const mockStore = configureStore([]);
    const store = mockStore(initialState);
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <MainContext />
      </Provider>
    );
    var mainDnD = TestUtils.findRenderedComponentWithType(provider, MainContext);
    main = mainDnD.getDecoratedComponentInstance().refs.child;
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
    expect(mainNode.children[1].children[0].children.length).toEqual(1); /* content div */
    expect(mainNode.children[1].children[0].children[0].children.length).toEqual(2); /* buttons'div */
    expect(mainNode.children[1].children[0].children[0].children[0].children.length).toEqual(1); /* button element */
    expect(mainNode.children[1].children[0].children[0].children[0].children[0].children.length).toEqual(0); /* span element */
    expect(mainNode.innerText.includes(buttonsText)).toBe(true);
    expect(mainNode.innerText.includes(initialState.blocks.blocks[0].text)).toBe(false);
    expect(mainNode.innerText.includes(initialState.blocks.blocks[1].text)).toBe(false);

    main.startCoding();

    mainNode = ReactDOM.findDOMNode(main);
    expect(mainNode.children.length).toEqual(2); /* rows */
    expect(mainNode.children[1].children.length).toEqual(1); /* content row */
    expect(mainNode.children[1].children[0].children.length).toEqual(1); /* content div */
    expect(mainNode.children[1].children[0].children[0].children.length).toEqual(1);  /* list element */
    expect(mainNode.children[1].children[0].children[0].children[0].children.length).toBeGreaterThan(0);  /* block element */
    expect(mainNode.innerText.includes(buttonsText)).toBe(false);
    expect(mainNode.innerText.includes(initialState.blocks.blocks[0].text)).toBe(true);
    expect(mainNode.innerText.includes(initialState.blocks.blocks[1].text)).toBe(true);
  });

  it('should set state.startPuzzle to true', () => {
    expect(main.state.startPuzzle).toEqual(false);
    main.startPuzzle();
    expect(main.state.startPuzzle).toEqual(true);
  });

  it('should render MatchstickPuzzle component after starting the puzzle challenge', () => {
    var instruction = "Solve the equation moving " + initialState.matches.moves + " matches";
    var mainNode = ReactDOM.findDOMNode(main);
    expect(mainNode.children.length).toEqual(2); /* rows */
    expect(mainNode.children[1].children.length).toEqual(1); /* content row */
    expect(mainNode.children[1].children[0].children.length).toEqual(1); /* content div */
    expect(mainNode.children[1].children[0].children[0].children.length).toEqual(2); /* buttons'div */
    expect(mainNode.children[1].children[0].children[0].children[0].children.length).toEqual(1); /* button element */
    expect(mainNode.children[1].children[0].children[0].children[0].children[0].children.length).toEqual(0); /* span element */
    expect(mainNode.innerText.includes(buttonsText)).toBe(true);
    expect(mainNode.innerText.includes(instruction)).toBe(false);

    main.startPuzzle();

    mainNode = ReactDOM.findDOMNode(main);
    expect(mainNode.children.length).toEqual(2); /* rows */
    expect(mainNode.children[1].children.length).toEqual(1); /* content row */
    expect(mainNode.children[1].children[0].children.length).toEqual(1); /* content div */
    expect(mainNode.children[1].children[0].children[0].children.length).toEqual(1);  /* list element */
    expect(mainNode.children[1].children[0].children[0].children[0].children.length).toBeGreaterThan(0);  /* block element */
    expect(mainNode.innerText.includes(buttonsText)).toBe(false);
    expect(mainNode.innerText.includes(instruction)).toBe(true);
  });
});



