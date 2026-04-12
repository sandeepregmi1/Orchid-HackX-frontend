
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import SelectionCriteria from './pages/SelectionCriteria';
import CodeOfConduct from './pages/CodeOfConduct';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/selection-criteria" element={<SelectionCriteria />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
      </Routes>
    </Router>
  );
}
