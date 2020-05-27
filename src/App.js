import React from 'react';
import './App.css';
import { connect } from "react-redux";
import fetchList from './models/users/fetchList';
import List from './features/list';
import Filters from './features/filters';
import SearchInput from './features/searchInput';

function App({ list, filters, onFetchList }) {

  React.useEffect(()=>{
    onFetchList()
  }, [])

  React.useEffect(()=>{
    onFetchList(filters)
  }, [filters])

  

  return (
    <div className="container">
      <SearchInput />
      <Filters />
      <List
        loading={list.loading}
        error={list.error}
        list={list.data?.results}
      />
    </div>
  );
}
const mapStateToProps = state => {
  const { list, filters } = state;
  return { list, filters: filters.filtersSelected };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchList: args => {
      dispatch(fetchList(args));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
