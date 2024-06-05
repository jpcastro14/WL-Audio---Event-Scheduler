import { Container } from "./styles";
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
    Evlocation: "",
    Evobs: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    SetEvent((event) => {
      return { ...event, [name]: value };
    });
  };

  const Handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(posthost, event)
      .then((response) => console.log(response.status));
    navigate("/list");
    SetEvent({
      Evname: "",
      Evdate: "",
      Evlocation: "",
      Evobs: "",
    });
  };

  return (
    <Container>
      <Titlediv>Novo Evento</Titlediv>
      <div>
        <form onSubmit={Handlesubmit}>
          <input
            type="text"
            name="Evname"
            placeholder="Nome Do Evento"
            onChange={HandleChange}
            value={event.Evname}
          />
          <input
            type="date"
            name="Evdate"
            placeholder="Dia Do evento"
            onChange={HandleChange}
            value={event.Evdate}
          />

          <input
            type="text"
            name="Evlocation"
            placeholder="Local Do evento"
            onChange={HandleChange}
            value={event.Evlocation}
          />

          <input
            type="text"
            name="Evobs"
            placeholder="Observações"
            onChange={HandleChange}
            value={event.Evobs}
          />
          <input type="submit" id="Evsubmit" value="Criar evento" />
        </form>
      </div>
    </Container>
  );
}

export default EventForm;
