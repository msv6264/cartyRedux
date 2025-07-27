import Navbar from "./components/Nav";
import Home  from "./components/Home";
import CItems  from "./components/CartItems";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/CartItems" element={<CItems />}/>
      </Routes>
    </Router>
  )
}

export default App
