import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App';
import BlockList from './components/BlockChallenge/BlockList';
import MatchstickPuzzle from './components/MatchPuzzle/MatchstickPuzzle';
import DetailsForm from './components/DetailsForm';
import Menu from './components/Menu';


const store = configureStore();
const routes =
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Menu} />
      <Route path="/coding" component={BlockList} />
      <Route path="/puzzle" component={MatchstickPuzzle} />
      <Route path="/details" component={DetailsForm} />
    </Route>
  </Router>;

render((
    <Provider store={store}>
      { routes }
    </Provider>
  ),
  document.getElementById('app'),
)
