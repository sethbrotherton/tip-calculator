import React from "react";

const Select = props => {
  return (
    <div>
      <select className="form-control" onChange={props.onChange}>
        {props.data.map(item => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
