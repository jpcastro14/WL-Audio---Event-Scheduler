import { Container } from "./styles";
import React from "react";
import { Link } from "react-router-dom";

function Topnav() {
  return (
    <Container>
      <p>WL Audio Pro</p>
      <div id="div_li">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">Listagem</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Topnav;
