import { InputContainer } from "./styles";
import React from "react";

function PInput({ text, type, name, placeholder, onChange, value }) {
  return (
    <InputContainer>
      <label>{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></input>
    </InputContainer>
  );
}

export default PInput;
