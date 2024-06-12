import React from "react";
import { AudioField, Container, LigthField, StrutField } from "./styles";

function EquipmentFields() {
  return (
    <Container>
      <AudioField>Audio</AudioField>
      <LigthField>Light</LigthField>
      <StrutField>Structure</StrutField>
    </Container>
  );
}

export default EquipmentFields;
