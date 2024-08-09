import React, { useState, useEffect } from "react";
import { Container, Input } from "./styles";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

function CourseForm() {
  const [courses, SetCourses] = useState({});

  const [putCourse, SetputCourse] = useState({
    title: "",
    url: "",
    ratings: [" "],
  });

  const handleType = (e) => {
    const { name, value } = e.target;

    SetputCourse((putCourse) => {
      return { ...putCourse, [name]: value };
    });
    console.log(putCourse);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get("http://localhost:8000/api/v2/courses/1/")
        .catch((err) => console.log("Erro ocorrido", "=>", err.message));
      {
        response
          ? SetCourses(response.data)
          : console.log("Não foi possível recuperar os dados");
      }
    };
    getData();
    console.log(courses);
  }, []);

  const handlePost = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8000/api/v2/courses/1/", putCourse)
      .then((res) => console.log(res));

    console.log(putCourse);
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
      {/*  <Button variant="danger">Teste</Button>
      <form onSubmit={handlePost}>
        <Input
          type="text"
          name="title"
          defaultValue={courses.title}
          onChange={handleType}
        />

        <Input
          type="text"
          name="url"
          defaultValue={courses.url}
          onChange={handleType}
        />
        <Input type="submit" />
      </form> */}
      <Form onSubmit={handlePost}>
        <Row>
          <Col>
            <Form.Group id="control01" className="mb-3">
              <Form.Label>Curso </Form.Label>
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
            <Form.Group id="control02" className="mb-3">
              <Form.Label>URL </Form.Label>
              <Form.Control
                type="text"
                defaultValue={courses.url}
                onChange={handleType}
                name="url"
              />
              <Form.Text>Digite aqui o endereço do curso</Form.Text>
            </Form.Group>
          </Col>
          <Button variant="info" onClick={handlePost}>
            Salvar
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default CourseForm;
