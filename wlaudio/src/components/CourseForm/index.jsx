import React, { useState, useEffect } from "react";
import { A, Container } from "./styles";
import axios from "axios";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";

function CourseForm() {
  const [courses, SetCourses] = useState([]);
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
      .then((res) => console.log(res));

    console.log(postCourse);
    Setshow(true);
    setMessage("Curso cadastrado com sucesso!");

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
      {/* <form onSubmit={handlePost}>
        <input
        type="text"
        name="title"
        value={postCourse.title}
        onChange={handleType}
        />
        <input
        type="text"
        name="url"
        value={postCourse.url}
        onChange={handleType}
        />
        <input type="submit" />
        </form> */}
      <Form onSubmit={handlePost}>
        <Alert show={show}>{message}</Alert>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Nome do curso</Form.Label>
              <Form.Control
                type="text"
                defaultValue={courses.title}
                onChange={handleType}
                name="title"
              />
              <Form.Text>Digite aqui o nome do curso</Form.Text>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Endereço do curso</Form.Label>
              <Form.Control
                type="text"
                defaultValue={courses.url}
                onChange={handleType}
                name="url"
              />
              <Form.Text>Digite aqui o nome do curso</Form.Text>
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
