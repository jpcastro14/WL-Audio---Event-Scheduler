import {
  Container,
  ListItem,
  ListHeader,
  OverList,
  Evdate,
  Evname,
  ButtonContainer,
  Crewbtn,
  EquipBtn,
  LeaderField,
} from "./styles";
import GoButton from "../GoButton";
import Crew from "../../assets/crew.svg";
import Material from "../../assets/material.svg";
import { AuthContext } from "../../providers/auth";
import Topnav from "../Topnav";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EventList() {
  const { Evlist } = React.useContext(AuthContext);

  const primary = Boolean;

  function deleteItem(id) {
    axios.delete(`http://172.16.255.255:4000/posts/${id}`).then((resp) => {
      console.log(resp);
    });
  }
  return (
    <>
      <Topnav />
      <Container>
        <ListHeader>
          <p>Listagem</p>
          <h6>{Evlist.length} Eventos</h6>
        </ListHeader>
        <OverList>
          {Evlist.length > 0 ? (
            Evlist.map((ev) => (
              <ListItem key={ev.id}>
                <Evname>{ev.Evname}</Evname>
                <Evdate>{ev.Evdate}</Evdate>
                <ButtonContainer>
                  <GoButton
                    to={`/eventset/${ev.id}`}
                    text="Materiais"
                    icon={Material}
                  >
                    <img src={Crew} />
                    Material
                  </GoButton>
                  <GoButton primary={true.toString()} icon={Crew} text="Equipe">
                    <img src={Material} />
                    Equipe
                  </GoButton>
                </ButtonContainer>
                <LeaderField>
                  Responsável :<p>{ev.Evleader}</p>
                </LeaderField>
              </ListItem>
            ))
          ) : (
            <p>Sem Dados</p>
          )}
        </OverList>
      </Container>
    </>
  );
}
export default EventList;
