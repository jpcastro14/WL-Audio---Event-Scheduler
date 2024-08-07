import React, { useState, useEffect } from "react";
import { A, Container } from "./styles";
import axios from "axios";

function CourseForm() {
  const [courses, SetCourses] = useState([]);

  const [postCourse, SetpostCourse] = useState({
    title: "",
    url: "",
  });

  const handleType = (e) => {
    const { name, value } = e.target;

    SetpostCourse((postCourse) => {
      return { ...postCourse, [name]: value };
    });
    console.log(postCourse);
  };

  const handlePost = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/v2/courses/", postCourse)
      .then((res) => console.log(res));

    console.log(postCourse);
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
          value={postCourse.title}
          onChange={handleType}
        />
        <input
          type="text"
          name="url"
          value={postCourse.url}
          onChange={handleType}
        />
        <input type="submit" />
      </form>
    </Container>
  );
}

export default CourseForm;
