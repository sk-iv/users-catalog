import React from 'react';
import './App.css';
import { connect } from "react-redux";
import fetchList from './models/users/fetchList';
import List from './features/list';
import Filters from './features/filters';
import SearchInput from './features/searchInput';

function App({ list, filters, onFetchList, onFilterText }) {


  React.useEffect(()=>{
    onFetchList(filters)
  }, [filters.filtersSelected])

  return (
    <div className="container">
      <SearchInput value={list.filtersText} />
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
  return { list, filters };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchList: args => {
      dispatch(fetchList(args.filtersSelected));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
