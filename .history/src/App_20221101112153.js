import './App.css';
import Main from './componets/Main'
import Portfolio from './componets/Portfolio';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />
       </Routes>
    </Router>
  )
}

export default App;
