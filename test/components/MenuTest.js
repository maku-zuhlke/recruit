/**
 * Created by lewa on 10/08/2016.
 */
'use strict';
import expect from 'expect';
import createComponent from 'helpers/shallowRenderHelper';
import Menu from 'components/Menu';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
//import Simulate from 'react-addons-test-utils';
import { codingChallengeButton, puzzleChallengeButton, registerButton } from 'data/strings';
import { Router, Route, browserHistory } from 'react-router';
import BlockList from "../../src/components/BlockChallenge/BlockList";
import MatchstickPuzzle from "../../src/components/MatchPuzzle/MatchstickPuzzle";
import DetailsForm from "../../src/components/DetailsForm";
import App from "../../src/containers/App";

describe('MenuComponent', () => {

  it('should be div', () => {
    let MenuComponent = createComponent(Menu);
    expect(MenuComponent.type).toEqual('div');
  });

  it('should have challenge selection and register links', () => {
    let menu = TestUtils.renderIntoDocument(<Menu/>);
    let links = TestUtils.scryRenderedDOMComponentsWithTag(menu, 'span');
    expect(ReactDOM.findDOMNode(links[0]).textContent).toBe(codingChallengeButton);
    expect(ReactDOM.findDOMNode(links[1]).textContent).toBe(puzzleChallengeButton);
    expect(ReactDOM.findDOMNode(links[2]).textContent).toBe(registerButton);

  });

  // it('should redirect codingChallenge button to coding page', () => {
  //
  //
  //   const routes =
  //     <Router history={browserHistory}>
  //       <Route component={App}>
  //         <Route path="/" component={Menu} />
  //         <Route path="/coding" component={BlockList} />
  //         <Route path="/puzzle" component={MatchstickPuzzle} />
  //         <Route path="/details" component={DetailsForm} />
  //       </Route>
  //     </Router>;
  //
  //   let expectedRoute = '/coding';
  //
  //   let menu = TestUtils.renderIntoDocument(<Menu/>);
  //   let links = TestUtils.scryRenderedDOMComponentsWithTag(menu, 'span');
  //   TestUtils.Simulate.click(links[0]);
  //   console.log(browserHistory.peek());
  //   expect(browserHistory.peek().toBe('/coding'));
  // });


});

