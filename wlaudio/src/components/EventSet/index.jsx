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

  const PostMaterial = () => {
    Event.material = materialList;
    axios.put(`http://localhost:4000/posts/${id}`, {
      ...Event,
    });
  };

  const RemoveMaterial = () => {
    delete Event.material;
    axios.put(`http://localhost:4000/posts/${id}`, {
      ...Event,
    });
    const fetchdata = async () => {
      const response = await axios.get(`http://localhost:4000/posts/${id}`);
      SetEvent(response.data);
    };
    fetchdata();
    console.log(Event);
  };

  return (
    <>
      <Topnav />
      <Container>
        <Goback src={Arrow} to="/list" />
        <EventHeader>
          <button onClick={PostMaterial}>Mandar</button>
          <button onClick={RemoveMaterial}>Limpar material</button>
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
        <EquipmentFields data={materialList} Pdata={Event.material} />
      </Container>
    </>
  );
}

export default EventSet;
