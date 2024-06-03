import { AuthProvider } from "./providers/auth";
import { AuthContext } from "./providers/auth";
import Topnav from "./components/Topnav";
import EventForm from "./components/EventForm";
import React from "react";

import "./App.css";

function App() {

  return (
    <>
      <AuthProvider>
        <Topnav />
        <EventForm />
      </AuthProvider>
    </>
  );
}

export default App;
