import React from "react";

const FormControl = props => {
  return (
    <div>
      <input
        className="form-control"
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default FormControl;
