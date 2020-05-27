import React from 'react';
import FilterRadio from './FilterRadio';
import FilterCheckbox from './FilterCheckbox';
import { connect } from "react-redux";
import { chooseFilter} from "../../models/filters/actions/chooseFilter";
import './filters.css';

const Filters = ({filters, onFilterSelect}) => {

  return(
    <div className="filters">
      <FilterRadio
        title="Фильтр по полу"
        checked={filters.filtersSelected.filter(j => j.group === "gender")[0]}
        items={filters.filtersList.gender}
        onFilterSelect={onFilterSelect}
      />
      <FilterCheckbox
        title="Фильтр по возрастным группам"
        checked={filters.filtersSelected.filter(j => j.group === "age")}
        items={filters.filtersList.age}
        onFilterSelect={onFilterSelect}
      />
    </div>
  )
};
const mapStateToProps = state => {
  const { filters } = state;
  return { filters };
};
const mapDispatchToProps = dispatch => {
  return {
    onFilterSelect: args => {
      dispatch(chooseFilter(args));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
