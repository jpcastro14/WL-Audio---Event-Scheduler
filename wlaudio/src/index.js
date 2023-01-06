import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import EventList from "../src/components/EventList/index"
import { AuthProvider } from "./providers/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list" element={<EventList />}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
