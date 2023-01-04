import { Container } from "./styles";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { AuthContext } from "../../providers/auth";
import React from "react";

function EventList() {
  const { Evlist } = React.useContext(AuthContext);

  console.log(Evlist);

  return (
    <Container>
      <p>Eventos em Andamento</p>
      <ul>
        {Evlist.map((ev, index) => (
          <li key={index}>
            <div id="datecont">
              <h2>{ev.Evdate}</h2>
            </div>
            <p>{ev.Evname}</p>
            <FaExpandArrowsAlt />
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default EventList;
