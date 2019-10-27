import React from "react";
import Cleave from "cleave.js/react";

const FormControl = props => {
  return (
    <div className="input-group">
      <label>{props.label}</label>
      {props.children}
      <Cleave
        className={props.className}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        options={{ numeral: true, numeralThousandsGroupStyle: "thousand" }}
      />
      <p className="form-error-message">{props.error}</p>
    </div>
  );
};

export default FormControl;
