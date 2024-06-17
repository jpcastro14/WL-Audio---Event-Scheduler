import React from "react";
import { ButtonContainer } from "./styles";

function GoButton({ to, text, primary, icon }) {
  return (
    <ButtonContainer primary={primary} to={to}>
      <img alt="icon" src={icon} />
      {text}
    </ButtonContainer>
  );
}

export default GoButton;
