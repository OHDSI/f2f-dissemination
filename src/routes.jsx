import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import Welcome from 'components/pages/Welcome';
import EvidenceGraph from 'components/pages/EvidenceGraph';
import AppContainer from './AppContainer';

export default function({ store, history }) {
	return (
	  <Provider store={store}>
	    <Router history={history}>
		    <Route component={ AppContainer }>
		      <Route path="/" component={ Welcome } />
		      <Route path="/evidence-graph" component={ EvidenceGraph } />
		    </Route>
	    </Router>
	  </Provider>
	);
}