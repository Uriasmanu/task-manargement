import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './assets/pages/Login/Login';
import Projects from './assets/pages/Projects/Projects';
import Tasks from './assets/pages/Tasks/Tasks';
import NotFound from './assets/pages/NotFound/NotFound';
import Dashboard from './assets/pages/Dashboard/Dashboard';
import Admim from './assets/pages/Admim/Admim';
import { AuthProvider } from './assets/context/AuthContext';



function App() {

  return (
<AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Admim" element={<Admim />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
</AuthProvider>
  );
}

export default App;
