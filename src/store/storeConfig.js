import { createStore, combineReducers } from "redux";

import numeros from './reducers/numeros';

const reducers = combineReducers({
  numeros: numeros,

  nomes: function (state, action) {
    console.log("Reducer Nomes...");
    console.log(state, " ", action);
    return ["Ana", "Patricia", "Jordana"];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
