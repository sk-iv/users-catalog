import { CHOOSE_FILTER, CHOOSE_TEXT } from "./";

export const chooseFilter = ({group, value, type}) => ({
  type: CHOOSE_FILTER,
  payload: { group, value, type }
});

export const chooseText = (value) => ({
  type: CHOOSE_TEXT,
  payload: value
});
