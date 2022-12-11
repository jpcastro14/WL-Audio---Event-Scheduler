import Topnav from "./components/Topnav";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [Evlist, Setevlist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/posts").then((response) => {
      const data = response.data;
      Setevlist(data);
      console.log(Evlist);
    });
  }, []);

  return (
    <>
      <Topnav />
      <EventForm />
      <EventList />
    </>
  );
}

export default App;
