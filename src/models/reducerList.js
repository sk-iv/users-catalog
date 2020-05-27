import { LIST_SUCCESS, LIST_FAILURE, LIST_LOADING } from "./users/actions";

const initialState = {
  loading:null,
  error:null,
  data:null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LIST_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      };
    }
    case LIST_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error
      };
    }
    default:
      return state;
  }
}
