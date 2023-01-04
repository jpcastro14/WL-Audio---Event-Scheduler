import { FaSistrix } from "react-icons/fa";
import { Container } from "./styles";
import React from "react";

function Topnav() {
  return (
    <Container>
      <p>WL Audio Pro</p>
      <div>
        <a>
          <FaSistrix />
        </a>
        <a></a>
      </div>
    </Container>
  );
}

export default Topnav;
