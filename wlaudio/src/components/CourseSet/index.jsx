import React, { useEffect, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { useParams } from "react-router";
import { Container } from "./styles";
import axios from "axios";

function CourseSet() {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [putCourse, setPutcourse] = useState({});
  const [disabledurl, setDisabledurl] = useState(true);
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
      .catch((err) => console.log(err));

    console.log(putCourse);
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
          </div>
          <Form></Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseSet;
