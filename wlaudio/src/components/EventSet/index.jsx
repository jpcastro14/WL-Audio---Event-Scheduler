import React, { useEffect, useState } from "react";
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
import EquipmentFields from "../EquipmentFields";

let nextId = 0;
function EventSet() {
  const [materialname, SetMaterialname] = useState([]);
  const [materialList, SetmaterialList] = useState([]);

  const handleMaterial = (e) => {
    SetMaterialname(e.target.value);
  };

  const LightSet = () => {
    SetmaterialList([
      ...materialList,
      { id: nextId++, name: materialname, category: "light" },
    ]);
    console.log(materialList);
    SetMaterialname("");
  };

  const AudioSet = () => {
    SetmaterialList([
      ...materialList,
      { id: nextId++, name: materialname, category: "audio" },
    ]);
    console.log(materialList);
    SetMaterialname("");
  };

  const StrutSet = () => {
    SetmaterialList([
      ...materialList,
      { id: nextId++, name: materialname, category: "structures" },
    ]);
    console.log(materialList);
    SetMaterialname("");
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
          <FormSet handler={handleMaterial} value={materialname} />
        </EventHeader>
        <ButtonFormSet
          LightManage={LightSet}
          AudioManage={AudioSet}
          StructureManage={StrutSet}
        />
        <EquipmentFields />
      </Container>
    </>
  );
}

export default EventSet;
