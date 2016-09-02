import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import { Router, Route, hashHistory } from 'react-router';
import App from './containers/App';
import BlockList from './components/BlockChallenge/BlockList';
import MatchstickPuzzle from './components/MatchPuzzle/MatchstickPuzzle';
import Menu from './components/Menu';

const store = configureStore();
const routes =
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Menu} />
      <Route path="/coding" component={BlockList} />
      <Route path="/puzzle" component={MatchstickPuzzle} />
    </Route>
  </Router>;

render((
    <Provider store={store}>
      { routes }
    </Provider>
  ),
  document.getElementById('app')
);
