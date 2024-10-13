import './App.css';
import Home from './components/home';
import Error from './components/errorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<Error />} />
          </Routes>
      </Router>
  )
}

export default App