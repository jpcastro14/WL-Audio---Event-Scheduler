import Topnav from "./components/Topnav";
import EventForm from "./components/EventForm";
import "./App.css";
import { AuthProvider } from "./providers/auth";


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
