import React, { useState, useEffect } from "react";
import { A, Container } from "./styles";

function CourseForm() {
  const [courses, SetCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:8000/api/v2/courses/");
      const result = await response.json();
      SetCourses(result);
    };

    getData();
  }, []);

  return (
    <Container>
      {courses.map((item) => (
        <li>{item.url}</li>
      ))}
    </Container>
  );
}

export default CourseForm;
