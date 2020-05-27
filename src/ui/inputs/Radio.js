import React from 'react';
import './radio.css';
import clsx from 'clsx';

const Radio = ({label, checked, className, name, value, onChange}) => {
  return(
    <label className="input-radioLabel">
      <div className={clsx('input-radioCustom', checked && "input-radioCustom-checked")}></div>
      <input className="input-radioFiled" name={name} type="radio" value={value} checked={checked} onChange={onChange}/>
      <span>{label}</span>
    </label>
  )
};
export default Radio;
