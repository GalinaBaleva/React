import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;
