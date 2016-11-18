/**
 * Created by lewa on 28/06/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import {Win} from 'components/Win';
import React from 'react';
import * as TestUtils from "react/lib/ReactTestUtils";

describe('WinShallowComponent', () => {
  let WinComponent;
  beforeEach(() => {
    WinComponent = createComponent(Win);
    //FailComponent = TestUtils.createRenderer(Fail);

  });

  it('should be div', () => {
    expect(WinComponent.type).toEqual('div');
  });
});


describe('WinComponent', () => {
  let WinComponent;
  let restartButton;

  beforeEach(() => {
    var action = {restartChallenge: expect.createSpy()};
    WinComponent = TestUtils.renderIntoDocument(<Win actions={action}/>);
    restartButton = TestUtils.findRenderedDOMComponentWithTag(WinComponent,'button');

  });


  it('should dispatch restart action when the component unmounts', () => {
    expect(WinComponent.props.actions.restartChallenge.calls.length).toEqual(0);
    WinComponent.componentWillUnmount();
    expect(WinComponent.props.actions.restartChallenge.calls.length).toEqual(1);

  })
});
