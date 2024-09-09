import React, { useState, useEffect } from "react";
import { A, Container, HeaderDiv } from "./styles";
import axios from "axios";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";

function CourseForm() {
  const [courses] = useState([]);
  const [show, Setshow] = useState(false);
  const [message, setMessage] = useState(null);

  const [postCourse, SetpostCourse] = useState({
    title: "",
    url: "",
  });

  const handleType = (e) => {
    const { name, value } = e.target;

    SetpostCourse((postCourse) => {
      return { ...postCourse, [name]: value };
    });
    console.log(postCourse);
  };

  const handlePost = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/v2/courses/", postCourse)
      .catch((err) => console.log(err))
      .then(
        (res) => console.log(res),
        Setshow(true),
        setMessage("Curso cadastrado com sucesso!")
      );

    setTimeout(() => {
      Setshow(false);
    }, 3000);
  };

  /*   useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:8000/api/v2/courses/");
      const result = await response.json();
      SetCourses(result);
    };

    getData();
  }, []); */

  return (
    <Container>
      <HeaderDiv>
        <h2>Informar colaborador</h2>
      </HeaderDiv>
      <Form onSubmit={handlePost}>
        <Alert show={show}>{message}</Alert>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Nome do Colaborador</Form.Label>
              <Form.Control
                type="text"
                defaultValue={courses.title}
                onChange={handleType}
                name="title"
              />
              <Form.Text>Digite aqui o nome do colaborador</Form.Text>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Setor do colaborador</Form.Label>
              <Form.Control
                type="text"
                defaultValue={courses.url}
                onChange={handleType}
                name="url"
              />
              <Form.Text>Digite aqui o nome do setor</Form.Text>
            </Form.Group>
          </Col>
          <Button variant="warning" onClick={handlePost}>
            Salvar
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default CourseForm;
