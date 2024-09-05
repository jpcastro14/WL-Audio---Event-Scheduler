import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  InputGroup,
  Modal,
  Alert,
  Toast,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import {
  Container,
  Navigator,
  ToastField,
  CreateFeed,
  ConfirmLayout,
  FeedLayout,
  RangeContainer,
} from "./styles";
import returnbtn from "../../assets/returnbtn.svg";
import axios from "axios";
import RangeSlider from "react-bootstrap-range-slider";

function CourseSet() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [rating, setRating] = useState({});
  const [deleteShow, setDeleteshow] = useState(false);
  const [putCourse, setPutcourse] = useState({});
  const [disabledurl, setDisabledurl] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [createShow, setCreateshow] = useState(false);
  const [disabledname, setDisabledname] = useState(true);
  const [rangeValue, setRangeValue] = useState(0);

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

  function HandlePut(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/v2/courses/${id}/`, putCourse)
      .catch((err) => console.log(err.status))
      .then((res) => {
        if (res.status === 200) {
          setShowMessage(true);
        }
      });
  }

  function handleDel() {
    setDeleteshow(!deleteShow);

    axios
      .delete(`http://localhost:8000/api/v2/courses/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          setShowMessage(!showMessage);
        }
      })
      .catch((err) => console.log(err.status));

    setTimeout(() => {
      navigate("/courselist");
    }, 4000);
  }

  function handleType(e, course) {
    const { name, value } = e.target;

    setPutcourse((course) => {
      return { ...course, [name]: value };
    });

    console.log(putCourse);
  }

  function handleRating(e) {
    const { name, value } = e.target;

    setRating((course) => {
      return { ...course, course: course.id, [name]: value };
    });
  }

  function showRating(e, id) {
    e.preventDefault();

    const sendRating = Object.assign(rating, { course: course.id });
    axios
      .post(`http://localhost:8000/api/v2/ratings/`, sendRating)
      .then((res) => {
        if (res.status == 201) {
          console.log(res.status, "Feedback criado com sucesso");
        }
      })
      .catch((err) => console.log(`Erro ocorrido ${err.status}`));

    console.log(sendRating);
    setTimeout(() => {
      navigate(`/courseset/${id}`);
    }, 3000);
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

      <div id="confirm_delete">
        <Modal show={deleteShow} onHide={() => setDeleteshow(!deleteShow)}>
          <Modal.Header closeButton>
            <Modal.Title>Deseja apagar esse feedback?</Modal.Title>
          </Modal.Header>
          <Modal.Body /* style={{ display: "flex" }} */>
            <ConfirmLayout>
              <Button
                variant="warning"
                onClick={() => setDeleteshow(!deleteShow)}
              >
                Cancelar
              </Button>
              <Button onClick={handleDel} variant="danger">
                Confirmar
              </Button>
            </ConfirmLayout>
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
          <b>Usuário editado com sucesso</b>
        </Alert>
      </div>

      <CreateFeed>
        <Modal show={createShow} onHide={() => setCreateshow(!createShow)}>
          <Modal.Header closeButton>
            <Modal.Title>Criar feedback de colaborador</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FeedLayout>
              <Form onSubmit={showRating}>
                <Form.Group className="mb-2">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    name="name"
                    type="Text"
                    onChange={handleRating}
                    defaultValue={rating.name}
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleRating}
                    defaultValue={rating.email}
                  />
                  <Form.Label>Avaliação</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="comment"
                    onChange={handleRating}
                    defaultValue={rating.comment}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Nota Média</Form.Label>
                  <RangeContainer>
                    <Form.Control
                      onChange={handleRating}
                      size="lg"
                      name="rating"
                      type="number"
                      min={0}
                      max={5}
                    />
                  </RangeContainer>
                </Form.Group>
                <ConfirmLayout>
                  <Button
                    variant="warning"
                    onClick={() => setCreateshow(!createShow)}
                  >
                    Cancelar
                  </Button>
                  <Button as="input" type="submit" value="Criar feedback" />
                </ConfirmLayout>
              </Form>
            </FeedLayout>
          </Modal.Body>
        </Modal>
      </CreateFeed>

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
                      onClick={() => setDisabledname(!disabledname)}
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
                      onClick={() => setDisabledurl(!disabledurl)}
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
                  <Button
                    as="input"
                    type="submit"
                    variant="warning"
                    size="sm"
                    value="Salvar informações"
                  />
                </Form>
                <div className="d-gid gap-2">
                  <ToastField>
                    {course.ratings
                      ? course.ratings.map((item) => (
                          <Toast key={item.id} style={{ width: "100%" }}>
                            <Toast.Header closeButton={false}>
                              <small>
                                {item.rating} - <strong>{item.name}</strong>
                              </small>
                            </Toast.Header>
                            <Toast.Body>{item.comment}</Toast.Body>
                          </Toast>
                        ))
                      : ""}
                  </ToastField>
                </div>
              </>
            ) : (
              <p>Sem dados</p>
            )}
          </div>

          <CreateFeed>
            <Button
              variant="outline-success"
              onClick={() => setCreateshow(!createShow)}
            >
              Criar feedback
            </Button>
            <Button onClick={() => setDeleteshow(!deleteShow)} variant="danger">
              Apagar feedback
            </Button>
          </CreateFeed>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseSet;
