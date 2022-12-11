import { Container } from "./styles";
import { FaExpandArrowsAlt } from "react-icons/fa";

function EventList() {
  return (
    <Container>
      <p>Eventos em Andamento</p>
      <ul>
        <li>
          <div id="datecont">
            <h2>18/01</h2>
          </div>
          <p>Barril 68</p>
          <FaExpandArrowsAlt />
        </li>
      </ul>
    </Container>
  );
}

export default EventList;
