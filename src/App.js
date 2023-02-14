import './assets/css/App/App.css';

import Timer from "./components/Timer/Timer";
import Navbar from './components/Navbar/Navbar';
import Position from './components/Positions/Position';
import Error from './components/Error/Error';

import { Route, Routes } from 'react-router-dom';



function App() {




  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/lifestyle-react-project/" element={<Timer />} />
        <Route path="/positions" element={<Position />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>

  );
}



export default App;
