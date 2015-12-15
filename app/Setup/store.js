import Immutable from "immutable";
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "../Reducers/index";

import localStorage from "./localStorage";

const storeEnhancers = compose(
  applyMiddleware(thunk),
  localStorage()
)(createStore);

const initialAppState = Immutable.Map();

const store = storeEnhancers(rootReducer, initialAppState);

if(module.hot){
    module.hot.accept('../Reducers', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
}

export default store;
