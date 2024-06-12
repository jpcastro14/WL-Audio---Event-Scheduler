import React from "react";
import { AudioField, Container, LigthField, StrutField, Li } from "./styles";
import trash from "../../assets/trash.svg";

function EquipmentFields({ data }) {
  return (
    <Container>
      <AudioField>
        <p>Audio</p>
        {data.map((item) => (
          <Li>
            {item.name}
            <img src={trash} />
          </Li>
        ))}
      </AudioField>
      <LigthField>
        <p>Iluminação</p>
      </LigthField>
      <StrutField>
        <p>Estruturas</p>
      </StrutField>
    </Container>
  );
}

export default EquipmentFields;
