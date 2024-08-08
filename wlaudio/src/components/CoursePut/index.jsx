import React, { useState, useEffect } from "react";
import { Container, Input } from "./styles";
import axios from "axios";

function CourseForm() {
  const [courses, SetCourses] = useState({});

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
        .get("http://localhost:8000/api/v2/courses/1/")
        .catch((err) => console.log("Erro ocorrido", "=>", err.message));
      {
        response
          ? SetCourses(response.data)
          : console.log("Não foi possível recuperar os dados");
      }
    };
    getData();
    console.log(courses);
  }, []);

  const handlePost = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8000/api/v2/courses/1/", putCourse)
      .then((res) => console.log(res));

    console.log(putCourse);
  };

  /*   useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:8000/api/v2/courses/");
      const result = await response.json();
      SetCourses(result);
    };

    getData();
  }, []); */

  return (
    <Container>
      <form onSubmit={handlePost}>
        <Input
          type="text"
          name="title"
          defaultValue={courses.title}
          onChange={handleType}
        />
        <Input
          type="text"
          name="url"
          defaultValue={courses.url}
          onChange={handleType}
        />
        <Input type="submit" />
      </form>
    </Container>
  );
}

export default CourseForm;
