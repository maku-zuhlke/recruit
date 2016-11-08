/**
 * Created by lewa on 22/07/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import {Fail} from 'components/Fail';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import {yesText, noText} from "../../src/data/strings";
import {DragDropContext} from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';


describe('FailShallowComponent', () => {
  let FailComponent;

  beforeEach(() => {
    FailComponent = createComponent(Fail);
    //FailComponent = TestUtils.createRenderer(Fail);

  });

  it('should be div', () => {
    expect(FailComponent.type).toEqual('div');
  });
});

describe('FailComponentButtons', () => {
  let fail, failChild
  beforeEach(() => {
    fail = TestUtils.renderIntoDocument(<Fail/>);
    var action = {restartChallenge: expect.createSpy()};
    var FailContext = DragDropContext(TestBackend)(Fail);
    var DecoratedFail = TestUtils.renderIntoDocument(
      <FailContext actions={action}/>
    );
    failChild = DecoratedFail.refs.child;
  });

  it('should be Yes button text', () => {
    let buttons = TestUtils.scryRenderedDOMComponentsWithTag(fail, 'button');
    expect(ReactDOM.findDOMNode(buttons[0]).textContent).toBe(yesText);
  });

  it('should be No button text', () => {
    let buttons = TestUtils.scryRenderedDOMComponentsWithTag(fail, 'button');
    expect(ReactDOM.findDOMNode(buttons[1]).textContent).toBe(noText);
  });

  it('should dispatch restart action', () => {

      expect(failChild.props.actions.restartChallenge.calls.length).toEqual(0);
      failChild.restartTheChallenge();
      expect(failChild.props.actions.restartChallenge.calls.length).toEqual(1);
    }
  );

});
