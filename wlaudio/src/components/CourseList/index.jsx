import React, { useEffect, useState } from "react";
import { CardContainer, Container, TopNav, InfoContainer } from "./styles";
import { Card, Col, Button } from "react-bootstrap";
import ConnButton from "../ConnButton";
import axios from "axios";

function CourseList() {
  const [course, Setcourse] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get("http://localhost:8000/api/v2/courses/")
        .catch((err) => console.log(`Erro ocorrido => ${err}`));
      response
        ? Setcourse(response.data)
        : console.log("Não foi possível recuperar os dados");
    };

    getData();
  }, []);

  return (
    <>
      <TopNav>
        <span>CRP - Frontlines</span>
      </TopNav>
      <Container>
        <Col>
          <InfoContainer>
            <h2>Claudio Cesário</h2>
            <h6>Gestor de desenvolvimento</h6>
            <span>CRP - Frontlines - 158510</span>
          </InfoContainer>
        </Col>
        <Col>
          <div className="d-grid gap2">
            <CardContainer>
              <Card style={{ width: "100%" }}>
                <Card.Body>Colaboradores sob supervisão</Card.Body>
              </Card>

              {course.map((item) => (
                <Card key={item.title} style={{ width: "100%" }}>
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Body>
                    <Card.Text>{item.url}</Card.Text>
                    <div className="d-grid gap-2">
                      <ConnButton
                        text="Ver mais"
                        to={`/courseset/${item.id}`}
                      />
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </CardContainer>
          </div>
        </Col>
      </Container>
    </>
  );
}

export default CourseList;
