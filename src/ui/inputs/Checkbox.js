import React from 'react';
import './checkbox.css';
import clsx from 'clsx';

const Checkbox = ({label, checked, className, name, value, onChange}) => {
  return(
    <label className="input-checkboxLabel">
      <svg className="material-glyph input-checkboxCustom" viewBox="0 0 24 24">
        {
          checked
          ? <path className="input-checkboxCustom-checked" stroke="#FFCC33" d="M19,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v14C21,20.1,20.1,21,19,21z M5,12l4,4L19,6"></path>
          : <path d="M19,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v14C21,20.1,20.1,21,19,21z"></path>
        }

      </svg>
      <input className="input-checkboxFiled" name={name} type="checkbox" value={value} checked={checked} onChange={onChange}/>
      <span className="input-checkboxTxt">{label}</span>
    </label>
  )
};
export default Checkbox;
