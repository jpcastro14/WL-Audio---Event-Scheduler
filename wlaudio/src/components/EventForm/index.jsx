import {
  Container,
  FormDiv,
  Goback,
  ButtonContainer,
  SubmitButton,
  CancelButton,
} from "./styles";
import PInput from "./Input";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Titlediv } from "./styles";

function EventForm() {
  const navigate = useNavigate();
  const posthost = "http://172.16.235.128:3000/posts";

  const [event, SetEvent] = useState({
    Evname: "",
    Evdate: "",
    Evleader: "",
    Evaudiotechnician: "",
    Evlighttechnician: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    SetEvent((event) => {
      return { ...event, [name]: value };
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
    /* axios
      .post(posthost, event)
      .then((response) => console.log(response.status)); */
    console.log(event);
    navigate("/list");
    SetEvent({
      Evname: "",
      Evdate: "",
      Evleader: "",
      Evaudiotechnician: "",
      Evlighttechnician: "",
    });
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
            type="text"
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
