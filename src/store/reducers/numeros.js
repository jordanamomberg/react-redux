import { NUM_UM_ALTERADO, NUM_DOIS_ALTERADO } from '../actions/actionTypes';

const initialState = {
        num1: 3,
        num2: 20,
}


export default function (state = initialState, action) {
    switch (action.type) {
      case NUM_UM_ALTERADO:
        return {
          ...state,
          num1: action.payload,
        };
      case NUM_DOIS_ALTERADO:
        return {
          ...state,
          num2: action.payload,
        };
      default:
        return state
    }
}