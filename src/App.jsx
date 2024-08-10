import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './assets/pages/Login/Login';

import Projects from './assets/pages/Projects';
import Reports from './assets/pages/Reports';
import Tasks from './assets/pages/Tasks';
import NotFound from './assets/pages/NotFound/NotFound';
import Dashboard from './assets/pages/Dashboard/Dashboard';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Reports" element={<Reports/>} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  )
}

export default App