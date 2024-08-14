import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './assets/pages/Login/Login';
import Projects from './assets/pages/Projects/Projects';
import Tasks from './assets/pages/Tasks/Tasks';
import NotFound from './assets/pages/NotFound/NotFound';
import Dashboard from './assets/pages/Dashboard/Dashboard';
import Admim from './assets/pages/Admim/Admim';


//import ProtectedRoute from './assets/Service/ProtectedRoute';
//import { AuthProvider } from './assets/context/AuthContext';

function App() {
  {/*
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<ProtectedRoute element={Dashboard} />} />
          <Route path="/Projects" element={<ProtectedRoute element={Projects} />} />
          <Route path="/Tasks" element={<ProtectedRoute element={Tasks} />} />
          <Route path="/Admim" element={<ProtectedRoute element={Admim} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
  */}

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Remove a proteção de rota */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Admim" element={<Admim />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
