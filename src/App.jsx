import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './assets/pages/Login/Login';

import Projects from './assets/pages/Projects';
import Reports from './assets/pages/Reports';
import Tasks from './assets/pages/Tasks';
import NotFound from './assets/pages/NotFound/NotFound';
import Dashboard from './assets/pages/Dashboard/Dashboard';
import { LoginProvider } from './assets/context/LoginContext';

function App() {


  return (
    <LoginProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Reports" element={<Reports/>} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </LoginProvider>
  )
}

export default App