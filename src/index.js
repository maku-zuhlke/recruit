import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import BlockList from './components/BlockChallenge/BlockList';
import MatchstickPuzzle from './components/MatchPuzzle/MatchstickPuzzle';
import Menu from './components/Menu';

const store = configureStore();

render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={Menu} />
          <Route path="/coding" component={BlockList} />
          <Route path="/puzzle" component={MatchstickPuzzle} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('app')
);
