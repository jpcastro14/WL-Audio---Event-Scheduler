import { Container, MaterialInput, Label } from "./styles";
import React from "react";

function FormSet({ handler, value }) {
  return (
    <Container>
      <Label>Material</Label>
      <MaterialInput onChange={handler} value={value} />
    </Container>
  );
}

export default FormSet;
