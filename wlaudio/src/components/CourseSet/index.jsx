import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Container } from "./styles";
import axios from "axios";

function CourseSet() {
  const { id } = useParams();
  const [course, setCourse] = useState({
    title: "",
    url: "",
    ratings: [" "],
  });
  const [ratings, setRatings] = useState([]);

  /*   useEffect(() => {
    const getdata = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/v2/courses/${id}/`
      );
      const courses = await response.json();

      setCourse(courses);
      console.log(course);
    };
    getdata();
  }, []); */

  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/v2/courses/${id}/`
      );
      setCourse(response.data);
    };

    getdata();
  }, []);

  return (
    <Container>
      <Card>
        <Card.Header>{course.title}</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <div className="d-grid gap-2"></div>
          <div className="d-grid gap-2">
            {course.ratings.map((item) => (
              <Button>{item.name}</Button>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseSet;
