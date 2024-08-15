import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Alert } from "react-bootstrap";

function CoursePut() {
  const [courses, SetCourses] = useState({});

  const [show, Setshow] = useState(false);
  const [message, Setmessage] = useState(null);
  const [nmr] = useState(1);

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
        .get(`http://localhost:8000/api/v2/courses/${nmr}/`)
        .catch((err) => console.log("Erro ocorrido", "=>", err.message));
      {
        response
          ? SetCourses(response.data)
          : console.log("Não foi possível recuperar os dados");
      }
    };
    getData();
  }, []);

  const handlePost = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/v2/courses/${nmr}/`, putCourse)
      .then((res) => console.log(res))
      .then(Setshow(true));

    Setshow(true);
    Setmessage(`${putCourse.title} editado com sucesso`);

    setTimeout(() => {
      Setshow(false);
    }, 3000);
  };

  return (
    <Container>
      <Form onSubmit={handlePost}>
        <Alert show={show} variant="warning">
          {message}
        </Alert>
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
          {courses.ratings ? (
            courses.ratings.map((item) => <input value={item.comment} />)
          ) : (
            <p>sem dados</p>
          )}
        </Row>
      </Form>
    </Container>
  );
}

export default CoursePut;
