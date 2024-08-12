import React from "react";
import { Container } from "./styles";
import Card from "react-bootstrap/Card";

function CourseCard() {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Header>Titulo</Card.Header>
        <Card.Body>
          <Card.Title>Teste</Card.Title>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseCard;
