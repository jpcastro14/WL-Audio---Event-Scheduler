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
import { AuthProvider } from "./providers/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/list" element={<EventList />} />
          <Route path="/eventset/:id" element={<EventSet />} />
          <Route path="/courseform" element={<CourseForm />} />
          <Route path="/courseput" element={<CoursePut />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
