import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Menù from './Components/Menù';
import Prenotazione from './Components/Prenotazione';
import './App.css';
import Registrazione from './Components/Registrazione';
import Disponibilità from './Components/Disponibilità';



function App() {
  const [token, setToken] = useState('');

  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Registrazione />} />
        <Route path="/menù" element={<Menù token={token} />} />
        <Route path="/prenotazione" element={<Prenotazione token={token} />} />
        <Route path="/disponibilita" element={<Disponibilità />} />
       
    </Routes>
    </Router>
  );
}

export default App;
