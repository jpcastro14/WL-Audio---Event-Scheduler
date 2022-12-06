import Topnav from './components/Topnav';
import MainCont from './components/MainCont';
import EventForm from './components/EventForm'
import EventList from './components/EventList'
 

import './App.css';

function App() {
  return (
    <>
      <Topnav />
      
      <EventForm />
      <EventList />
      
    </>
  );
}

export default App;
