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
import { useParams } from "react-router";
import axios from "axios";

let nextId = 0;
function EventSet() {
  const { id } = useParams();
  const [materialname, SetMaterialname] = useState([]);
  const [materialList, SetmaterialList] = useState([]);
  const [Event, SetEvent] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(`http://localhost:4000/posts/${id}`);
      SetEvent(response.data);
    };

    fetchdata();
  }, []);

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
          <EventName>{Event.Evname}</EventName>
          <EventDate>{Event.Evdate}</EventDate>
          <EventLeader>{Event.Evleader}</EventLeader>
          <FormSet handler={handleMaterial} value={materialname} />
        </EventHeader>
        <ButtonFormSet
          LightManage={LightSet}
          AudioManage={AudioSet}
          StructureManage={StrutSet}
        />
        <EquipmentFields data={materialList} />
      </Container>
    </>
  );
}

export default EventSet;
