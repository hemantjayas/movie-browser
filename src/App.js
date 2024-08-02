import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Favourites from './pages/Favourites'
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites/>} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
