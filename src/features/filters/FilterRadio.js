import React from 'react';
import {Radio} from '../../ui/inputs';

const FilterRadio = ({title, items, checked, onFilterSelect}) => {
  const handlerFilterSelect = (e) => {
    onFilterSelect( {group:e.target.name, value:e.target.value, type:"radio"} )
  };

  return(
    <div className="filter mb-4">
      <div className="filter-title">{title}</div>
      {
        !!items.length &&
        items.map(el=>(
          <div key={el.value}>
            <Radio
              name="gender"
              value={el.value}
              checked={el.value === checked.value}
              onChange={handlerFilterSelect}
              label={el.label}
            />
          </div>
        ))
      }
    </div>
  )
};
export default FilterRadio;
