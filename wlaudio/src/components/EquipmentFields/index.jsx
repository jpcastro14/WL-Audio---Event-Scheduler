import React from "react";
import { AudioField, Container, LigthField, StrutField, Li } from "./styles";
import trash from "../../assets/trash.svg";

function EquipmentFields({ data, Pdata, RemoveItem }) {
  const AudioParts = Pdata
    ? Pdata.filter((item) => item.category === "audio")
    : data.filter((item) => item.category === "audio");

  const LightParts = Pdata
    ? Pdata.filter((item) => item.category === "light")
    : data.filter((item) => item.category === "light");

  const StrutParts = Pdata
    ? Pdata.filter((item) => item.category === "structures")
    : data.filter((item) => item.category === "structures");

  return (
    <Container>
      <AudioField>
        <p>Audio</p>
        {AudioParts.map((item) => (
          <Li key={item.id}>
            {item.name}
            <img
              alt="trash"
              src={trash}
              onClick={() => RemoveItem(AudioParts.indexOf(item.id))}
            />
          </Li>
        ))}
      </AudioField>
      <LigthField>
        <p>Iluminação</p>
        {LightParts.map((item) => (
          <Li key={item.id}>
            {item.name}
            <img alt="trash" src={trash} onClick={() => RemoveItem(item.id)} />
          </Li>
        ))}
      </LigthField>
      <StrutField>
        <p>Estruturas</p>
        {StrutParts.map((item) => (
          <Li key={item.id}>
            {item.name}
            <img alt="trash" src={trash} onClick={() => RemoveItem(item.id)} />
          </Li>
        ))}
      </StrutField>
    </Container>
  );
}

export default EquipmentFields;
