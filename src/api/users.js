import request from '../features/common';

const jj = (props) => {
  return `&${props.reduce((a, c)=> c.value !=="" ? [...a, `${c.group}=${c.value}`] : [...a], []).join('&')}`
}
const getList = (props = []) => request('GET', `/?results=30${props.length ? jj(props) : ''}`);


const usersApi = {
  getList,
};
export default usersApi;
