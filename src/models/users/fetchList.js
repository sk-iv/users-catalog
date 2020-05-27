import {listSuccess, listFailure, listLoading} from "./actions/list";
import request from '../../features/common';
import usersApi from '../../api/users';

const fetchList = (props) => {
  return dispatch => {

    dispatch(listLoading());

    usersApi.getList(props)
      .then(res => {
        dispatch(listSuccess(res));
        // throw new Error(res.statusText)
      })
      .catch(err => {
        dispatch(listFailure(err));
      });

  };
};

export default fetchList;
