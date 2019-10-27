import React from "react";

const Select = props => {
  const validateSelect = e => {
    if (e.target.value === props.data[0]) {
      console.log("change it");
    }
  };
  return (
    <div>
      <select
        className="form-control"
        onChange={props.onChange}
        onBlur={e => validateSelect(e)}
      >
        {props.data.map(item => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      <p className="form-error-message">{props.error}</p>
    </div>
  );
};

export default Select;
