import {
  Container,
  FormDiv,
  Goback,
  ButtonContainer,
  SubmitButton,
  CancelButton,
} from "./styles";
import React from "react";
import axios from "axios";
import PInput from "./Input";
import { useState } from "react";
import { Titlediv } from "./styles";
import arrow from "../../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

let nextId = 0;

function EventForm() {
  const navigate = useNavigate();
  /* const posthost = "http://172.16.235.128:3000/posts"; */

  const [event, SetEvent] = useState({
    Evname: "",
    Evlocation: "",
    //Evleader: "",
    Evdate: "",
    Evaudiotechnician: "",
    //Evlighttechnician: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    SetEvent((event) => {
      return { ...event, [name]: value, nextId };
    });
  };

  const HandleClear = () => {
    SetEvent({
      Evname: "",
      Evdate: "",
      Evleader: "",
      Evaudiotechnician: "",
      Evlighttechnician: "",
    });
  };

  const Handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/events", event)
      .then((response) => console.log(response.status));
    console.log(event);
    navigate("/list");
    SetEvent({
      Evname: "",
      Evdate: "",
      Evleader: "",
      Evaudiotechnician: "",
      Evlighttechnician: "",
    });
    nextId++;
  };

  return (
    <Container>
      <Goback src={arrow} />
      <Titlediv>Novo Evento</Titlediv>
      <FormDiv>
        <form onSubmit={Handlesubmit}>
          <PInput
            type="text"
            text="Nome do Evento"
            name="Evname"
            onChange={HandleChange}
            value={event.Evname}
          />
          <PInput
            type="date"
            text="Data"
            name="Evdate"
            onChange={HandleChange}
            value={event.Evdate}
          />
          <PInput
            type="text"
            text="Responsável"
            name="Evleader"
            onChange={HandleChange}
            value={event.Evleader}
          />
          <PInput
            type="text"
            text="Técnico de som"
            name="Evaudiotechnician"
            onChange={HandleChange}
            value={event.Evaudiotechnician}
          />
          <PInput
            type="text"
            text="Técnico de Iluminação"
            name="Evlighttechnician"
            onChange={HandleChange}
            value={event.Evlighttechnician}
          />
          <ButtonContainer>
            <SubmitButton type="submit" id="Evsubmit" />
            <CancelButton
              type="reset"
              id="Evsubmit"
              value="Teste"
              onClick={HandleClear}
            />
          </ButtonContainer>
        </form>
      </FormDiv>
    </Container>
  );
}

export default EventForm;
