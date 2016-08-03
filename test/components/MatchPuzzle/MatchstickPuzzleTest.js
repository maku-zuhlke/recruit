/**
 * Created by lewa on 19/07/2016.
 */
import expect from 'expect';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import MatchstickPuzzle from 'components/MatchPuzzle/MatchstickPuzzle';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';

describe('MatchstickPuzzleShallowComponent', () => {
  let MatchstickPuzzleComponent;

  beforeEach(() => {
    MatchstickPuzzleComponent = createComponent(MatchstickPuzzle, {matches: {numbers: [[],[],[]], operation: [], correctPositions: {numbers:[[],[],[]], operation:[]}}});
  });

  it('should be div', () => {
    expect(MatchstickPuzzleComponent.type).toEqual('div');
  });
});

describe('MatchstickPuzzleClass', () => {
  let matches;
  let matchPuzzleDnD;
  let matchPuzzle;
  let winText;
  let timesupText;
  let outOfMovesText;

  beforeEach(() => {
    winText = "Register with Zühlke's talent database";
    timesupText = "Time's up, game over!";
    outOfMovesText = "You're out of moves, game over!";
    const MatchstickPuzzleContext = DragDropContext(TestBackend) (MatchstickPuzzle);
    matches = {
      numbers :[[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,1,1,1,0,0,0]],
      operation: [1,0,0],
      moves: 1,
      correctPositions: {numbers: [[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]], operation:[1,1,0]},
      win: false
    };
    let timer = {
      time: 0,
      offset: Date.now()
    };
    let actions = {
      removeMatch: expect.createSpy(),
      placeMatch: expect.createSpy(),
      checkMatchesPositions: expect.createSpy()
    };
    let timerActions = {
      startTimer: expect.createSpy(),
      tickTimer: expect.createSpy()
    };
    matchPuzzleDnD = TestUtils.renderIntoDocument(
      <MatchstickPuzzleContext matches={matches} actions={actions} timer={timer} timerActions={timerActions}/>
    );
    matchPuzzle = matchPuzzleDnD.refs.child;
  });

  it('should exist', () => {
    expect(TestUtils.isCompositeComponent(matchPuzzleDnD)).toBe(true);
  });

  it('should have props/state', () => {
    expect(matchPuzzleDnD.props).toExist();
    expect(matchPuzzle.state).toExist();
  });

  it('should have props.matches/state.matches', () => {
    expect(matchPuzzleDnD.props.matches).toExist();
    expect(matchPuzzle.state.matches).toExist();
  });

  it('should have false state.end', () => {
    expect(matchPuzzle.state.end).toBe(false);
  });

  it('should match param matches', () => {
    expect(matchPuzzleDnD.props.matches).toEqual(matches);
    expect(matchPuzzle.state.matches).toEqual(matches);
  });

  it('should call removeMatch after match movement', () => {
    expect(matchPuzzleDnD.props.actions.removeMatch.calls.length).toEqual(0);
    expect(matchPuzzle.props.actions.removeMatch.calls.length).toEqual(0);

    matchPuzzle.handleDrop({pos: [0, 0]}, [1, 2]);

    expect(matchPuzzleDnD.props.actions.removeMatch.calls.length).toEqual(1);
    expect(matchPuzzle.props.actions.removeMatch.calls.length).toEqual(1);
  });

  it('should call placeMatch after match movement', () => {
    expect(matchPuzzleDnD.props.actions.placeMatch.calls.length).toEqual(0);
    expect(matchPuzzle.props.actions.placeMatch.calls.length).toEqual(0);

    matchPuzzle.handleDrop({pos: [0, 0]}, [1, 2]);

    expect(matchPuzzleDnD.props.actions.placeMatch.calls.length).toEqual(1);
    expect(matchPuzzle.props.actions.placeMatch.calls.length).toEqual(1);
  });

  it('should call checkMatchesPositions after match movement', () => {
    expect(matchPuzzleDnD.props.actions.checkMatchesPositions.calls.length).toEqual(0);
    expect(matchPuzzle.props.actions.checkMatchesPositions.calls.length).toEqual(0);

    matchPuzzle.handleDrop({pos: [0, 0]}, [1, 2]);

    expect(matchPuzzleDnD.props.actions.checkMatchesPositions.calls.length).toEqual(1);
    expect(matchPuzzle.props.actions.checkMatchesPositions.calls.length).toEqual(1);
  });

  it('should render Win component if win is true', () => {
    var matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzleDnD);
    expect(matchPuzzleNode.children.length).toEqual(3);
    expect(matchPuzzleNode.innerText.includes(winText)).toBe(false);

    matches.win = true;
    matches.moves = 0;
    matchPuzzle.setState({ matches: matches });

    matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzleDnD);
    expect(matchPuzzleNode.children.length).toEqual(4);
    expect(matchPuzzleNode.innerText.includes(winText)).toBe(true);
  });

  it('should render Fail component if time is up', () => {
    var matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzleDnD);
    expect(matchPuzzleNode.children.length).toEqual(3);
    expect(matchPuzzleNode.innerText.includes(timesupText)).toBe(false);
    var newState = { matches: matches };

    matchPuzzleDnD.props.timer.timesup = false;
    matchPuzzle.timeIsUp(newState);
    matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzleDnD);
    expect(matchPuzzleNode.children.length).toEqual(3);
    expect(matchPuzzleNode.innerText.includes(timesupText)).toBe(false);

    matchPuzzleDnD.props.timer.timesup = true;
    matchPuzzle.timeIsUp(newState);
    matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzleDnD);
    expect(matchPuzzleNode.children.length).toEqual(4);
    expect(matchPuzzleNode.innerText.includes(timesupText)).toBe(true);
  });

  it('should not render Fail component if time is up but win is true', () => {
    var matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzleDnD);
    expect(matchPuzzleNode.children.length).toEqual(3);
    expect(matchPuzzleNode.innerText.includes(winText)).toBe(false);
    expect(matchPuzzleNode.innerText.includes(timesupText)).toBe(false);

    matches.win = true;
    matches.moves = 0;
    matchPuzzle.setState({ matches: matches });

    matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzleDnD);
    expect(matchPuzzleNode.children.length).toEqual(4);
    expect(matchPuzzleNode.innerText.includes(winText)).toBe(true);
    expect(matchPuzzleNode.innerText.includes(timesupText)).toBe(false);

    var newState = { matches: matches };
    matchPuzzleDnD.props.timer.timesup = true;
    matchPuzzle.timeIsUp(newState);
    matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzleDnD);
    expect(matchPuzzleNode.children.length).toEqual(4);
    expect(matchPuzzleNode.innerText.includes(winText)).toBe(true);
    expect(matchPuzzleNode.innerText.includes(timesupText)).toBe(false);
  });

  it('should render Fail component if out of moves', () => {
    var matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzleDnD);
    expect(matchPuzzleNode.children.length).toEqual(3);
    expect(matchPuzzleNode.innerText.includes(outOfMovesText)).toBe(false);

    matches.moves = 0;
    matchPuzzle.setState({ matches: matches });

    matchPuzzleNode = ReactDOM.findDOMNode(matchPuzzleDnD);
    expect(matchPuzzleNode.children.length).toEqual(4);
    expect(matchPuzzleNode.innerText.includes(outOfMovesText)).toBe(true);
  });

  it('should render singular instruction', () => {
    expect(matchPuzzle.resolveInstruction()).toEqual('Solve the equation moving 1 match');
  });

  it('should render plural instruction', () => {
    matches.moves = 2;
    matchPuzzle.setState({ matches: matches });
    expect(matchPuzzle.resolveInstruction()).toEqual('Solve the equation moving 2 matches');
  });

  it('should map binary list to matchstick number', () => {
    var result = [{ hidden: true }, { hidden: true }, { hidden: false, pos: [0, 2] },
      { hidden: false, pos: [0, 3] }, { hidden: true }, { hidden: true }, { hidden: true }];
    expect(matchPuzzle.mapNumber(0)).toEqual(result);
  });

  it('should map binary list to matchstick operation', () => {
    var result = [{ hidden: false, pos: [3, 0] }, { hidden: true }, { hidden: true }];
    expect(matchPuzzle.mapOperation()).toEqual(result);
  });
});
