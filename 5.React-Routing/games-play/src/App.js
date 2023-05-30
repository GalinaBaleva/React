import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

import * as gameServices from './services/gameServices'

import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreateGame from './components/Create/CreateGame';
import Catalog from './components/Catalog/Catalog';
import GameDetails from './components/GameDetails/GameDetails';

function App() {

  const [games, setGamas] = useState([]);

  useEffect(() => {
    gameServices.getAll()
      .then(result => {
        setGamas(result)
      });
  }, []);

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/catalog" element={<Catalog games={games} />} />
          <Route path="/catalog/:gameId" element={<GameDetails />} />

        </Routes>
      </main>
    </div>

  );
}

export default App;
