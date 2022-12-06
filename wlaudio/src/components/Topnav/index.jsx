import { Container } from "./styles";
import { FaSistrix } from "react-icons/fa";
import { HiSignal } from "react-icons/hi2";

function Topnav() {
  return (
    <Container>
      <a>WL Audio Pro</a>

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
