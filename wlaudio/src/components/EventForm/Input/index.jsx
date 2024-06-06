import { InputContainer, Label, Input } from "./styles";
import React from "react";

function PInput({ text, type, name, placeholder, onChange, value }) {
  return (
    <InputContainer>
      <Label>{text}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></Input>
    </InputContainer>
  );
}

export default PInput;
