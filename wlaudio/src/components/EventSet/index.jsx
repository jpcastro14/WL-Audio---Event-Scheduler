import React, { useState } from "react";
import Topnav from "../Topnav";
import FormSet from "../FormSet/index";
import { Goback } from "./styles";
import Arrow from "../../assets/arrow.svg";
import ButtonFormSet from "../ButtonFormSet";
import {
  Container,
  EventHeader,
  EventDate,
  EventLeader,
  EventName,
} from "./styles";

function EventSet() {
  const [material, SetMaterial] = useState({});

  const handleMaterial = (e) => {
    SetMaterial(e.target.value);
    console.log(material);
  };

  return (
    <>
      <Topnav />
      <Container>
        <Goback src={Arrow} />
        <EventHeader>
          <EventName>Quintal dona Graça</EventName>
          <EventDate>12/02/2024</EventDate>
          <EventLeader>Responsável: Lucas Macedo</EventLeader>
          <FormSet func01={handleMaterial} />
          <ButtonFormSet />
        </EventHeader>
      </Container>
    </>
  );
}

export default EventSet;
