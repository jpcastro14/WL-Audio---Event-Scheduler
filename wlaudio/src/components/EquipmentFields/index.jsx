import React from "react";
import { AudioField, Container, LigthField, StrutField, Li } from "./styles";
import trash from "../../assets/trash.svg";

function EquipmentFields({ data, Pdata }) {
  const AudioParts = Pdata
    ? Pdata.filter((item) => item.category === "audio")
    : data.filter((item) => item.category === "audio");
  /* const LightParts = data.filter((item) => item.category === "light");
  const StrutParts = data.filter((item) => item.category === "structures"); */

  return (
    <Container>
      <AudioField>
        <p>Audio</p>
        {AudioParts.map((item) => (
          <Li>
            {item.name}
            <img src={trash} />
          </Li>
        ))}
      </AudioField>
      <LigthField>
        <p>Iluminação</p>
        {/* {LightParts.map((item) => (
          <Li>{item.name}</Li>
        ))} */}
      </LigthField>
      <StrutField>
        <p>Estruturas</p>
        {/* {StrutParts.map((item) => (
          <Li>{item.name}</Li>
        ))} */}
      </StrutField>
    </Container>
  );
}

export default EquipmentFields;
