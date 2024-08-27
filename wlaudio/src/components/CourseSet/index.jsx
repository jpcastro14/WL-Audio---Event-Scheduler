import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  InputGroup,
  Modal,
  ModalHeader,
  Alert,
  Toast,
  ToastBody,
  ToastContainer,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { Container, Navigator, ToastField } from "./styles";
import returnbtn from "../../assets/returnbtn.svg";
import axios from "axios";

function CourseSet() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [show, setShow] = useState(false);
  const [putCourse, setPutcourse] = useState({});
  const [disabledurl, setDisabledurl] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
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
      .catch((err) => console.log(err.status))
      .then((res) => {
        if (res.status === 200) {
          setAlertMessage(` editado com sucesso!`);
          setShowMessage(true);
          console.log(res.status);
        }
      });
  }

  function handleDel() {
    setShow(!show);

    axios
      .delete(`http://localhost:8000/api/v2/courses/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          setShowMessage(!showMessage);
          setAlertMessage(` excluído com sucesso!`);
        }
      })
      .catch((err) => console.log(err.status));

    setTimeout(() => {
      navigate("/courselist");
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
      <Navigator>
        <img
          onClick={() => navigate("/courselist")}
          src={returnbtn}
          style={{ cursor: "pointer" }}
        />
      </Navigator>

      <div>
        <Modal show={show} onHide={toggleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Deseja apagar esse curso?</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display: "flex" }}>
            <Button variant="warning" onClick={() => setShow(!show)}>
              Cancelar
            </Button>
            <Button onClick={handleDel} variant="danger">
              Confirmar
            </Button>
          </Modal.Body>
        </Modal>
      </div>

      <div id="alert-container">
        <Alert
          show={showMessage}
          variant="primary"
          dismissible
          onClose={() => setShowMessage(!showMessage)}
        >
          <u>
            <b>{putCourse.title}</b>
          </u>{" "}
          {alertMessage}
        </Alert>
      </div>

      <Card style={{ maxWidth: "1000px" }}>
        <Card.Header className="mt-2">
          <Form.Label>Feedbacks do colaborador</Form.Label>
        </Card.Header>
        <Card.Body>
          <Card.Title>#{course.id}</Card.Title>
          <div className="d-grid gap-2">
            {course ? (
              <>
                <Form onSubmit={HandlePut}>
                  <InputGroup className="mb-3">
                    <Button
                      onClick={toggledisabledname}
                      variant="outline-danger"
                      id="button-addon1"
                    >
                      Editar
                    </Button>
                    <Form.Control
                      onSubmit={HandlePut}
                      onChange={handleType}
                      disabled={disabledname}
                      defaultValue={course.title}
                      type="text"
                      name="title"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Button
                      onClick={toggledisabledurl}
                      variant="outline-danger"
                      id="button-addon1"
                    >
                      Editar
                    </Button>
                    <Form.Control
                      onSubmit={HandlePut}
                      onChange={handleType}
                      disabled={disabledurl}
                      defaultValue={course.url}
                      type="text"
                      name="url"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <Form.Control type="submit" />
                </Form>
                <div className="d-gid gap-2">
                  <InputGroup className="mb-3">
                    <ToastField>
                      {course.ratings
                        ? course.ratings.map((item) => (
                            <Toast style={{ width: "100%" }}>
                              <Toast.Header closeButton={false}>
                                <small>
                                  {item.rating} - <strong>{item.name}</strong>
                                </small>
                                {/*  <strong>{item.name}</strong> */}
                              </Toast.Header>
                              <Toast.Body>{item.comment}</Toast.Body>
                            </Toast>
                          ))
                        : ""}
                    </ToastField>
                  </InputGroup>
                </div>
              </>
            ) : (
              <p>Sem dados</p>
            )}
          </div>

          <div className="d-grid gap-2">
            <Button onClick={HandlePut} variant="success">
              Salvar
            </Button>
            <Button onClick={() => setShow(!show)} variant="danger">
              Apagar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseSet;
