import { LIST_SUCCESS, LIST_FAILURE, LIST_LOADING } from "./";

export const listSuccess = list => ({
  type: LIST_SUCCESS,
  payload: list
});

export const listFailure = error => ({
  type: LIST_FAILURE,
  payload: {
    error
  }
});

export const listLoading = () => ({
  type: LIST_LOADING
});
