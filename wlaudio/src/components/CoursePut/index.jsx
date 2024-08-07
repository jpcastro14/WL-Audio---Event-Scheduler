import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import axios from "axios";

function CourseForm() {
  const [courses, SetCourses] = useState({});

  const [putCourse, SetputCourse] = useState({
    title: "",
    url: "",
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
      const response = await axios.get(
        "http://localhost:8000/api/v2/courses/2/"
      );

      SetCourses(response.data);
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
        <input
          type="text"
          name="title"
          defaultValue={courses.title}
          onChange={handleType}
        />
        <input
          type="text"
          name="url"
          defaultValue={courses.url}
          onChange={handleType}
        />
        <input type="submit" />
      </form>
    </Container>
  );
}

export default CourseForm;
