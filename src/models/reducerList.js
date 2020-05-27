import { LIST_SUCCESS, LIST_FAILURE, LIST_LOADING } from "./users/actions";
import { CHOOSE_TEXT } from "./filters/actions";

const initialState = {
  loading:null,
  error:null,
  data:null,
  filtersText:""
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
        data: action.payload,
        filtersText:""
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
    case CHOOSE_TEXT: {
      let regex = new RegExp(`^${action.payload}`, );
      return {
        ...state,
        filtersText: action.payload,
       data: { results: state.data.results.reduce((a,s) => {
          return (
              regex.test(s.name.first)
            || regex.test(s.name.last)
            || regex.test(s.location.city)
            || regex.test(s.location.country)
          )
          ? [...a, {...s, filtered:false}]
          : [...a, {...s, filtered:true}]
        }, [])}

      };
    }
    default:
    return state;
  }
}
