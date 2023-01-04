import Topnav from "./components/Topnav";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import "./App.css";
import { AuthProvider } from "./providers/auth";

function App() {
  return (
    <>
      <AuthProvider>
        <Topnav />
        <EventForm />
        <EventList min={100} max={1000} />
      </AuthProvider>
    </>
  );
}

export default App;
