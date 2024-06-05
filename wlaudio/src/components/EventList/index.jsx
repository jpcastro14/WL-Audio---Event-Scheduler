import { Container } from "./styles";
import { AuthContext } from "../../providers/auth";
import { useState } from "react";
import Test from "../Modal";
import Topnav from "../Topnav";
import React from "react";
import axios from "axios";

function EventList() {
  const { Evlist } = React.useContext(AuthContext);

  function deleteItem(id) {
    axios.delete(`http://172.16.255.255:4000/posts/${id}`).then((resp) => {
      console.log(resp);
    });
  }
  return (
    <>
      <Topnav />
      <Container>
        <p>Eventos em Andamento</p>
        <ul>
          {Evlist.length > 0 ? (
            Evlist.map((ev) => (
              <li key={ev.id}>
                <div id="datecont">
                  <h2>{ev.Evdate}</h2>
                </div>
                <p>{ev.Evname}</p>
                <Test
                  event={() => deleteItem(ev.id)}
                  id={ev.id}
                  name={ev.Evname}
                />
              </li>
            ))
          ) : (
            <p>Sem Dados</p>
          )}
        </ul>
      </Container>
    </>
  );
}
export default EventList;
