import { Container } from "./styles";
import { FaSistrix } from "react-icons/fa";

function Topnav() {
  return (
    <Container>
      <p>WL Audio Pro</p>

      <div>
        <a>
          <FaSistrix />
        </a>
        <a>Materiais</a>
        <a>Licitações</a>
      </div>
    </Container>
  );
}

export default Topnav;
