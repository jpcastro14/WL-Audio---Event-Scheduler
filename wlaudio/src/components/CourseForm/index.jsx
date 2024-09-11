import React, { useState, useEffect } from "react";
import { A, Container, HeaderDiv } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";

function CourseForm() {
  const [show, Setshow] = useState(false);
  const [message, setMessage] = useState(null);
  const [alertClass, setAlertClass] = useState("");

  const [postCourse, SetpostCourse] = useState({});
  const navigate = useNavigate();

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
      .then((res) => {
        if (res.status == 201) {
          console.log(res.status);
        }
        setAlertClass("success");
        setMessage("Colaborador criado com sucesso");
        Setshow(!show);
        setTimeout(() => {
          navigate("/courselist/");
        }, 3000);
      })
      .catch(
        (err) => {
          console.log(err.response.status);
        },
        setMessage("Erro ao criar registro de colaborador!"),
        setAlertClass("danger"),
        Setshow(!show)
      );
  };

  return (
    <Container>
      <HeaderDiv>
        <h2>Informar colaborador</h2>
      </HeaderDiv>
      <Form onSubmit={handlePost}>
        <Alert
          variant={alertClass}
          onClose={() => Setshow(!show)}
          show={show}
          dismissible
        >
          {message}
        </Alert>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Nome do Colaborador</Form.Label>
              <Form.Control type="text" onChange={handleType} name="title" />
              <Form.Text>Digite aqui o nome do colaborador</Form.Text>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Setor do colaborador</Form.Label>
              <Form.Control type="text" onChange={handleType} name="url" />
              <Form.Text>Digite aqui o nome do setor</Form.Text>
            </Form.Group>
          </Col>
          <Button as="input" type="submit" variant="warning" value="Salvar" />
        </Row>
      </Form>
    </Container>
  );
}

export default CourseForm;
