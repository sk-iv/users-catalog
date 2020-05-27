import { CHOOSE_FILTER } from "./";

export const chooseFilter = ({group, value, type}) => ({
  type: CHOOSE_FILTER,
  payload: { group, value, type }
});
