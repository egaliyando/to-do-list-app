import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import dashboardReducer from 'features/Dashboard/reducers';
import activityReducer from 'features/Activity/reducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  dashboard: dashboardReducer,
  activity: activityReducer,
});

const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));

export default store;
