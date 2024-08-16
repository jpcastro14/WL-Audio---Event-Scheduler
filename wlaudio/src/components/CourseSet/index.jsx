import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Container } from "./styles";
import axios from "axios";

function CourseSet() {
  const { id } = useParams();
  const [course, setCourse] = useState({});

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

  return (
    <Container>
      <Card>
        <Card.Header>{course ? course.title : <p>Sem dados</p>}</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <div className="d-grid gap-2"></div>
          <div className="d-grid gap-2"></div>
          {course.ratings ? (
            course.ratings.map((item) => <input defaultValue={item.comment} />)
          ) : (
            <p>Sem dados</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseSet;
