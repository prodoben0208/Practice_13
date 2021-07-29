import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import thunk from "redux-thunk";


const history = createBrowserHistory();
const middlewares = [thunk.withExtraArgument({ history })];
const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const rootReducer = combineReducers({

  router: connectRouter(history),
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

export { history };
export default store;