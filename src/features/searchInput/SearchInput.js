import React, { useRef } from 'react';
import './searchInput.css';
import { connect } from "react-redux";
import { chooseText } from "../../models/filters/actions/chooseFilter";

const SearchInput = ({ value, placeholder = "Начните вводить...", onFilterText }) => {
  const inputEl = useRef(null);

  React.useEffect(()=>{
    if(value === "" && inputEl.current){
      inputEl.current.value = "";
    }
  }, [value])

  const handlerFilterText = () => {
    onFilterText(inputEl.current.value)
  };
  return(
    <div className="input my-4">
      <input ref={inputEl} className="input-field" type="text" placeholder={placeholder} />
      <button className="input-btn" onClick={handlerFilterText}>
        <svg className="material-glyph" viewBox="0 0 24 24">
          <path d="M17,9c0,4.4-3.6,8-8.1,8s-8.1-3.6-8.1-8s3.6-8,8.1-8S17,4.5,17,9z M23,23l-8.3-8.3"></path>
        </svg>
      </button>
    </div>
  )
};
const mapDispatchToProps = dispatch => {
  return {
    onFilterText: args => {
      dispatch(chooseText(args));
    }
  };
};
export default connect(null, mapDispatchToProps)(SearchInput);
