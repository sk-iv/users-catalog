import { CHOOSE_FILTER } from "./actions";

const initialState = {
  filtersSelected: [
      {
        group:'gender',
        value: '',
        type: 'radio'
      },
      {
        group:'age',
        value: '35-65',
        type: 'checkbox'
      }
    ],
  filtersList:{
    gender: [
      {label:"Все", value:""},
      {label:"Только женщины", value:"female"},
      {label:"Только мужчины", value:"male"}
    ],
    age: [
      {label:"0-18", value:"0-18"},
      {label:"18-35", value:"18-35"},
      {label:"35-65", value:"35-65"},
      {label:"65+", value:"65+"}
    ]
  }
};

const checkboxFilter = (filtersSelected, action) => {
  return filtersSelected.some(j=> j.value === action.payload.value && j.group === action.payload.group)
  ? filtersSelected.filter(j=> j.value !== action.payload.value)
  : [...filtersSelected, action.payload]
}

const radioFilter = (filtersSelected, action) => {
  return [...filtersSelected.filter(j=> j.group !== action.payload.group), action.payload]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_FILTER: {
      return {
        ...state,
        filtersSelected: action.payload.type === "radio"
        ? radioFilter(state.filtersSelected, action)
        : checkboxFilter(state.filtersSelected, action)
      };
    }
    default:
    return state;
  }
}
