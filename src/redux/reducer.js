import { AddComp } from "./actions";
import { EditComp } from "./actions";
import { DeleteComp } from "./actions";

const init = {
  loading: false,
  error: false,
  data: []
};
export const componentReducer = (state = init, { type, payload }) => {
  switch (type) {
    case AddComp: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [...init.data, payload]
      };
    }
    case DeleteComp: {
      return {
        ...state,
        loading: true,
        error: false,
        data: payload
      };
    }
    case EditComp: {
      return {
        ...state,
        loading: true,
        error: false,
        data: payload
      };
    }
    default: {
      return state;
    }
  }
};
