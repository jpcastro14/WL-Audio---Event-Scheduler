import {
  ButtonContainer,
  AudioButton,
  LightButton,
  StructureButton,
  OtherButton,
} from "./styles";
import React from "react";

function ButtonFormSet({ LightManage, AudioManage, StructureManage }) {
  return (
    <ButtonContainer>
      <LightButton onClick={LightManage}>Iluminação</LightButton>
      <AudioButton onClick={AudioManage}>Som</AudioButton>
      <StructureButton onClick={StructureManage}>Estrutura</StructureButton>
      <OtherButton>Outros</OtherButton>
    </ButtonContainer>
  );
}

export default ButtonFormSet;
