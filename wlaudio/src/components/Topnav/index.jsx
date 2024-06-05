import { Container, DivLinks, GoLink } from "./styles";
import React from "react";
//import { Link } from "react-router-dom";

function Topnav() {
  return (
    <Container>
      <p>WL Audio Pro</p>
      <DivLinks id="div_li">
        <ul>
          <li>
            <GoLink to="/">Home</GoLink>
          </li>
          <li>
            <GoLink to="/list">Listagem</GoLink>
          </li>
        </ul>
      </DivLinks>
    </Container>
  );
}

export default Topnav;
