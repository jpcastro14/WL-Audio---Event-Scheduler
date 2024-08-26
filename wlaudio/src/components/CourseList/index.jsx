import React, { useEffect, useState } from "react";
import { CardContainer, Container } from "./styles";
import { Card } from "react-bootstrap";
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
    <Container>
      <CardContainer>
        {course.map((item) => (
          <Card key={item.title} style={{ width: "18rem" }}>
            <Card.Header>{item.title}</Card.Header>
            <Card.Body>
              <Card.Text>{item.url}</Card.Text>
              <div className="d-grid gap-2">
                <ConnButton text="Ver mais" to={`/courseset/${item.id}`} />
              </div>
            </Card.Body>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

export default CourseList;
