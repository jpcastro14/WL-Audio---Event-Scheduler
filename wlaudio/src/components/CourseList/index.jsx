import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Card } from "react-bootstrap";
import axios from "axios";

function CourseList() {
  const [course, Setcourse] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get("http://localhost:8000/api/v1/courses/")
        .catch((err) => console.log(`Erro ocorrido => ${err}`));
      response
        ? Setcourse(response.data)
        : console.log("Não foi possível recuperar os dados");
    };

    getData();
  }, []);

  return (
    <Container>
      {course.map((item) => (
        <Card key={item.title} style={{ width: "18rem" }}>
          <Card.Header>{item.title}</Card.Header>
          <Card.Body>
            <Card.Title>{item.url}</Card.Title>
            <Card.Text>
              {item.ratings
                ? item.ratings.map((ratings) => (
                    <li key={ratings.id}>{ratings.rating}</li>
                  ))
                : console.log("sem dados")}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default CourseList;
