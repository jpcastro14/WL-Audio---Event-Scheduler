import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  InputGroup,
  Modal,
  ModalHeader,
  Alert,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { Container } from "./styles";
import { Navigate } from "react-router";
import axios from "axios";

function CourseSet() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [show, setShow] = useState(false);
  const [putCourse, setPutcourse] = useState({});
  const [disabledurl, setDisabledurl] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [disabledname, setDisabledname] = useState(true);

  useEffect(() => {
    const getdata = async () => {
      const response = await fetch(
        `http://localhost:8000/api/v2/courses/${id}/`
      );
      const result = await response.json();
      setCourse(result);
    };

    getdata();

    return () => {};
  }, [id]);

  const toggleShow = () => {
    setShow(!show);
  };

  const toggledisabledname = () => {
    setDisabledname(!disabledname);
  };

  const toggledisabledurl = () => {
    setDisabledurl(!disabledurl);
  };

  function HandlePut(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/v2/courses/${id}/`, putCourse)
      .catch((err) => console.log(err))
      .then((res) => console.log(res.status));

    console.log(putCourse);
  }

  function handleDel() {
    setShow(!show);

    axios
      .delete(`http://localhost:8000/api/v2/courses/${id}/`)
      .then((res) => {
        if ((res.status = 204)) {
          setShowMessage(!showMessage);
        }
      })
      .catch((err) => console.log(err.status));

    setTimeout(() => {
      navigate("/courselist");
      setShow(!show);
      setShowMessage(!showMessage);
    }, 4000);
  }

  function handleType(e) {
    const { name, value } = e.target;

    setPutcourse((course) => {
      return { ...course, [name]: value };
    });
    console.log(putCourse);
  }

  return (
    <Container>
      <div className="modal show">
        <Modal show={show} onHide={toggleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Deseja apagar esse curso?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="warning" onClick={() => setShow(!show)}>
              Cancelar
            </Button>
            <Button onClick={handleDel} variant="danger">
              Confirmar
            </Button>
          </Modal.Body>
        </Modal>
      </div>
      <div className="d-grid gap-2">
        <Alert show={showMessage} variant="primary">
          Curso{" "}
          <u>
            <b>{course.title}</b>
          </u>{" "}
          excluído com sucesso!
        </Alert>
      </div>

      <Card style={{ width: "58rem" }}>
        <Card.Header className="mt-2">
          <Form.Label>Editar um curso</Form.Label>
        </Card.Header>
        <Card.Body>
          <Card.Title>#{course.id}</Card.Title>
          <div className="d-grid gap-2">
            {course ? (
              <>
                <InputGroup className="mb-3">
                  <Button
                    onClick={toggledisabledname}
                    variant="outline-danger"
                    id="button-addon1"
                  >
                    Editar
                  </Button>
                  <Form.Control
                    onChange={handleType}
                    disabled={disabledname}
                    defaultValue={course.title}
                    type="text"
                    name="title"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                {/*------------------------------------------------------ */}
                <InputGroup className="mb-3">
                  <Button
                    onClick={toggledisabledurl}
                    variant="outline-danger"
                    id="button-addon1"
                  >
                    Editar
                  </Button>
                  <Form.Control
                    onChange={handleType}
                    disabled={disabledurl}
                    defaultValue={course.url}
                    type="text"
                    name="url"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </>
            ) : (
              <p>Sem dados</p>
            )}
          </div>
          <div className="d-grid gap-2">
            <Button onClick={HandlePut} variant="warning">
              Salvar
            </Button>
            <Button onClick={() => setShow(!show)} variant="danger">
              Apagar
            </Button>
          </div>
          <Form></Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseSet;
