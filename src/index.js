import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import { Router, Route, hashHistory } from 'react-router';
import App from './containers/App';
import BlockList from './components/BlockChallenge/BlockList';
import MatchstickPuzzle from './components/MatchPuzzle/MatchstickPuzzle';
import DetailsForm from './components/DetailsForm';
import OfflineRegistrationForm from './components/OfflineRegistrationForm'
import Menu from './components/Menu';
import AdminForm from './components/AdminForm';


const store = configureStore();
const routes =
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Menu} />
      <Route path="/coding" component={BlockList} />
      <Route path="/puzzle" component={MatchstickPuzzle} />
      <Route path="/details" component={DetailsForm} />
      <Route path="/offlineRegistration" component={OfflineRegistrationForm} />
      <Route path="/admin" component={AdminForm} />
    </Route>
  </Router>;

render((
    <Provider store={store}>
      { routes }
    </Provider>
  ),
  document.getElementById('app'),
)
