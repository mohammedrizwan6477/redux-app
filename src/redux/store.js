import { createStore, combineReducers } from "redux";
import CounterReducer from "./reducers/counter";

const ConfigStore = () => {
  const store = createStore(
    combineReducers({ CounterReducer: CounterReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default ConfigStore;
