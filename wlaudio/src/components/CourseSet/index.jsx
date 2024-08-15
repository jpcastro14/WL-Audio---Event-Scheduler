import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Container } from "./styles";
import axios from "axios";

function CourseSet() {
  const { id } = useParams();
  const [course, SetCourse] = useState([]);
  const [ratings, Setratings] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/v2/courses/${id}/`
      );

      SetCourse(response.data);
      Setratings(response.data.ratings);
    };
    getdata();
  }, []);

  return (
    <Container>
      <Card>
        <Card.Header>{course.title}</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <div className="d-grid gap-1">
            <Button>{id}</Button>
          </div>
          <ul>
            {ratings.map((item) => (
              <p>{item.rating}</p>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseSet;
