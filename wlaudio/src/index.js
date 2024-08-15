import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import EventSet from "./components/EventSet";
import EventList from "../src/components/EventList/index";
import CourseForm from "./components/CourseForm";
import CoursePut from "./components/CoursePut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseCard from "./components/CourseCard";
import CourseList from "./components/CourseList";
import CourseSet from "./components/CourseSet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list" element={<EventList />} />
        <Route path="/eventset/:id" element={<EventSet />} />
        <Route path="/courseform" element={<CourseForm />} />
        <Route path="/courseput" element={<CoursePut />} />
        <Route path="/coursecard" element={<CourseCard />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/courseset/:id" element={<CourseSet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
