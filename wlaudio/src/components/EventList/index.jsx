import {
  Container,
  ListItem,
  ListHeader,
  OverList,
  Evdate,
  Evname,
  ButtonContainer,
  LeaderField,
} from "./styles";
import GoButton from "../GoButton";
import Crew from "../../assets/crew.svg";
import Material from "../../assets/material.svg";
//import { AuthContext } from "../../providers/auth";
import Topnav from "../Topnav";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function EventList() {
  /* const { Evlist } = React.useContext(AuthContext); */

  const [Evlist, Setevlist] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios
        .get("http://localhost:8000/api/v1/techs")
        .catch((error) => {
          console.log("Erro ocorrido -> " + error);
        });
      Setevlist(response.data);
      console.log(response);
    };

    fetchdata();
  }, []);

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
                    <img alt="crew" src={Crew} />
                    Material
                  </GoButton>
                  <GoButton primary={true.toString()} icon={Crew} text="Equipe">
                    <img alt="crew" src={Material} />
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
