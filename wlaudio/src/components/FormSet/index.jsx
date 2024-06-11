import { Container, MaterialInput, Label } from "./styles";
import React from "react";

function FormSet({ func01 }) {
  return (
    <Container>
      <Label>Material</Label>
      <MaterialInput onChange={func01} />
    </Container>
  );
}

export default FormSet;
