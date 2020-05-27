import React from 'react';
import { Checkbox } from '../../ui/inputs';

const FilterCheckbox = ({title, items, checked = [], onFilterSelect}) => {
  const handlerFilterSelect = (e) => {
    onFilterSelect( {
      group: e.target.name,
      value: e.target.value,
      type: "checkbox"
    });
  };

  return(
    <div className="filter mb-4">
      <div className="filter-title">{title}</div>
      <div className="filter-fields row">
        {
          !!items.length &&
          items.map(el=>(
            <div className="col-6 filter-field" key={el.value}>
              <Checkbox
                name="age"
                value={el.value}
                checked={checked.some(j=>j.value === el.value)}
                onChange={handlerFilterSelect}
                label={el.label}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
};
export default FilterCheckbox;
