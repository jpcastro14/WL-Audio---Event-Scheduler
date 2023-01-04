import { Container } from "./styles";
import { useState } from "react";
import axios from "axios";


function EventForm() {
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
      .post("http://localhost:4000/posts", event)
      .then((response) => console.log(response))
      .then(alert( 'evento criado com sucesso!'))

    SetEvent({
      Evname: "",
      Evdate: "",
      Evlocation: "",
      Evobs: "",
    });
  };

  return (
    <Container>
      <p>Criar novo evento</p>
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
