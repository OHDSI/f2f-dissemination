// polyfills
import 'es6-promise/auto';
import 'core-js/fn/object/values';
import 'core-js/fn/object/assign';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


import * as ReactDOM from 'react-dom';
import configureStore from 'stores/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('app');
const app = routes({ store, history });
ReactDOM.render(app, rootEl);
