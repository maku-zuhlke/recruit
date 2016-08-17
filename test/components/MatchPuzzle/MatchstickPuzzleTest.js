/**
 * Created by lewa on 19/07/2016.
 */
import expect from 'expect';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import ConnectedMatchstickPuzzle, { MatchstickPuzzle } from 'components/MatchPuzzle/MatchstickPuzzle';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import { winText, timesUpText, outOfMovesText, matchPuzzleInstruction } from 'data/strings';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('MatchstickPuzzleShallowComponent', () => {
  let MatchstickPuzzleComponent;

  beforeEach(() => {
    MatchstickPuzzleComponent = createComponent(MatchstickPuzzle, {matches: {numbers: [[],[],[]], operation: [], correctPositions: {numbers:[[],[],[]], operation:[]}}});
  });

  it('should be div', () => {
    expect(MatchstickPuzzleComponent.type).toEqual('div');
  });
});

describe('MatchstickPuzzleUnconnectedComponent', () => {
  let matchstickPuzzle;
  let matches;

  beforeEach(() => {
    matches = {
      numbers :[[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,1,1,1,0,0,0]],
      operation: [1,0,0],
      moves: 1,
      correctPositions: {numbers: [[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]], operation:[1,1,0]},
      win: false
    };

    var actions = {
      removeMatch: expect.createSpy(),
      placeMatch: expect.createSpy(),
      checkMatchesPositions: expect.createSpy(),
      timeIsUp: expect.createSpy()
    };
    var MatchstickPuzzleContext = DragDropContext(TestBackend) (MatchstickPuzzle);
    var DecoratedMatchstickPuzzle = TestUtils.renderIntoDocument(
      <MatchstickPuzzleContext matches={matches} actions={actions} />
    );
    matchstickPuzzle = DecoratedMatchstickPuzzle.refs.child;
  });

  it('should call removeMatch after match movement', () => {
    expect(matchstickPuzzle.props.actions.removeMatch.calls.length).toEqual(0);
    matchstickPuzzle.handleDrop({pos: [0, 0]}, [1, 2]);
    expect(matchstickPuzzle.props.actions.removeMatch.calls.length).toEqual(1);
  });

  it('should call placeMatch after match movement', () => {
    expect(matchstickPuzzle.props.actions.placeMatch.calls.length).toEqual(0);
    matchstickPuzzle.handleDrop({pos: [0, 0]}, [1, 2]);
    expect(matchstickPuzzle.props.actions.placeMatch.calls.length).toEqual(1);
  });

  it('should call checkMatchesPositions after match movement', () => {
    expect(matchstickPuzzle.props.actions.checkMatchesPositions.calls.length).toEqual(0);
    matchstickPuzzle.handleDrop({pos: [0, 0]}, [1, 2]);
    expect(matchstickPuzzle.props.actions.checkMatchesPositions.calls.length).toEqual(1);
  });

  it('should call timeIsUp', () => {
    expect(matchstickPuzzle.props.actions.timeIsUp.calls.length).toEqual(0);
    matchstickPuzzle.timeIsUp();
    expect(matchstickPuzzle.props.actions.timeIsUp.calls.length).toEqual(1);
  });

  it('should render singular instruction', () => {
    expect(matchstickPuzzle.resolveInstruction()).toEqual(matchPuzzleInstruction + '1 match');
  });

  it('should render plural instruction', () => {
    matches.moves = 2;
    matchstickPuzzle.setState({ matches: matches });
    expect(matchstickPuzzle.resolveInstruction()).toEqual(matchPuzzleInstruction + '2 matches');
  });

  it('should map binary list to matchstick number', () => {
    var result = [{ hidden: true }, { hidden: true }, { hidden: false, pos: [0, 2] },
      { hidden: false, pos: [0, 3] }, { hidden: true }, { hidden: true }, { hidden: true }];
    expect(matchstickPuzzle.mapNumber(0)).toEqual(result);
  });

  it('should map binary list to matchstick operation', () => {
    var result = [{ hidden: false, pos: [3, 0] }, { hidden: true }, { hidden: true }];
    expect(matchstickPuzzle.mapOperation()).toEqual(result);
  });
});

describe('MatchstickPuzzleClass', () => {
  let matches;
  let MatchstickPuzzleContext;
  let matchPuzzleDnD;
  let matchPuzzle;
  let initialState;
  let mockStore;
  let store;

  beforeEach(() => {
    MatchstickPuzzleContext = DragDropContext(TestBackend) (ConnectedMatchstickPuzzle);
    initialState = {
      matches: {
        numbers :[[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,1,1,1,0,0,0]],
        operation: [1,0,0],
        moves: 1,
        correctPositions: {numbers: [[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]], operation:[1,1,0]},
        correctNumbers: false,
        correctOperation: false,
        win: false
      }
    };
    mockStore = configureStore([]);
    store = mockStore(initialState);
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <MatchstickPuzzleContext/>
      </Provider>
    );
    matchPuzzleDnD = TestUtils.findRenderedComponentWithType(provider, MatchstickPuzzleContext);
    matchPuzzle = matchPuzzleDnD.refs.child;
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(matchPuzzleDnD)).toBe(true);
  });

  it('should have stateProps', () => {
    expect(matchPuzzle.stateProps).toExist();
  });

  it('should have stateProps.matches', () => {
    expect(matchPuzzle.stateProps.matches).toExist();
  });

  it('should not have stateProps.end', () => {
    expect(matchPuzzle.stateProps.end).toBe(undefined);
  });

  it('should match param matches', () => {
    expect(matchPuzzle.stateProps.matches).toEqual(initialState.matches);
  });

  it('should render Win component if correctNumber and correctOperation are true and moves == 0', () => {
    var matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzle);
    expect(matchPuzzleNode.children[0].children[0].children.length).toEqual(3);
    expect(matchPuzzleNode.innerText.includes(winText)).toBe(false);

    initialState.matches.correctNumbers = true;
    initialState.matches.correctOperation = true;
    initialState.matches.moves = 0;
    store = mockStore(initialState);
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <MatchstickPuzzleContext/>
      </Provider>
    );
    matchPuzzleDnD = TestUtils.findRenderedComponentWithType(provider, MatchstickPuzzleContext);
    matchPuzzle = matchPuzzleDnD.refs.child;

    matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzle);
    expect(matchPuzzleNode.children[0].children[0].children.length).toEqual(4);
    expect(matchPuzzleNode.innerText.includes(winText)).toBe(true);
  });

  it('should render Fail component if end is true', () => {
    var matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzle);
    expect(matchPuzzleNode.children[0].children[0].children.length).toEqual(3);
    expect(matchPuzzleNode.innerText.includes(timesUpText)).toBe(false);

    initialState.matches.end = true;
    store = mockStore(initialState);
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <MatchstickPuzzleContext/>
      </Provider>
    );
    matchPuzzleDnD = TestUtils.findRenderedComponentWithType(provider, MatchstickPuzzleContext);
    matchPuzzle = matchPuzzleDnD.refs.child;

    matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzle);
    expect(matchPuzzleNode.children[0].children[0].children.length).toEqual(4);
    expect(matchPuzzleNode.innerText.includes(timesUpText)).toBe(true);
  });

  it('should not render Fail component if and is true but correctNumber and correctOperation are true and moves == 0', () => {
    var matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzle);
    expect(matchPuzzleNode.children[0].children[0].children.length).toEqual(3);
    expect(matchPuzzleNode.innerText.includes(winText)).toBe(false);
    expect(matchPuzzleNode.innerText.includes(timesUpText)).toBe(false);

    initialState.matches.end = true;
    initialState.matches.correctNumbers = true;
    initialState.matches.correctOperation = true;
    initialState.matches.moves = 0;
    store = mockStore(initialState);
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <MatchstickPuzzleContext/>
      </Provider>
    );
    matchPuzzleDnD = TestUtils.findRenderedComponentWithType(provider, MatchstickPuzzleContext);
    matchPuzzle = matchPuzzleDnD.refs.child;

    matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzle);
    expect(matchPuzzleNode.children[0].children[0].children.length).toEqual(4);
    expect(matchPuzzleNode.innerText.includes(winText)).toBe(true);
    expect(matchPuzzleNode.innerText.includes(timesUpText)).toBe(false);
  });

  it('should render Fail component if out of moves', () => {
    var matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzle);
    expect(matchPuzzleNode.children[0].children[0].children.length).toEqual(3);
    expect(matchPuzzleNode.innerText.includes(outOfMovesText)).toBe(false);

    initialState.matches.moves = 0;
    store = mockStore(initialState);
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <MatchstickPuzzleContext/>
      </Provider>
    );
    matchPuzzleDnD = TestUtils.findRenderedComponentWithType(provider, MatchstickPuzzleContext);
    matchPuzzle = matchPuzzleDnD.refs.child;

    matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzle);
    expect(matchPuzzleNode.children[0].children[0].children.length).toEqual(4);
    expect(matchPuzzleNode.innerText.includes(outOfMovesText)).toBe(true);
  });

  it('should have removeMatch action', () => {
    expect(matchPuzzle.dispatchProps.actions.removeMatch).toExist();
    expect(typeof(matchPuzzle.dispatchProps.actions.removeMatch)).toBe('function');
  });

  it('should have placeMatch action', () => {
    expect(matchPuzzle.dispatchProps.actions.placeMatch).toExist();
    expect(typeof(matchPuzzle.dispatchProps.actions.placeMatch)).toBe('function');
  });

  it('should have timeIsUp action', () => {
    expect(matchPuzzle.dispatchProps.actions.timeIsUp).toExist();
    expect(typeof(matchPuzzle.dispatchProps.actions.timeIsUp)).toBe('function');
  });

  it('should have checkMatchesPositions action', () => {
    expect(matchPuzzle.dispatchProps.actions.checkMatchesPositions).toExist();
    expect(typeof(matchPuzzle.dispatchProps.actions.checkMatchesPositions)).toBe('function');
  });
});
