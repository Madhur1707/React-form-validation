import React, { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [occupied, setOccupied] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;
  const handleoccupied = (e) => {
    setOccupied(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleoccupied}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setOccupied(true)
        }
        occupied={occupied.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
