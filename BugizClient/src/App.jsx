import { useState } from 'react';
import { Route, Routes } from 'react-router'; // Import from 'react-router-dom'
import SignIn from './pages/auth/SignIn';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import AddProject from './pages/AddProject';
import Settings from './pages/Settings';
import Messages from './pages/Messages';
import NavBar from './components/ui/NavBar';
import './App.css';
import AuthNavBar from './components/ui/AuthNavBar';

function App() {
  const [auth, setAuth] = useState(false);

  function setAuthentication() {
    setAuth(true);
  }

  return (
    <>
      {auth ? (
        <div className='flex relative'>
          <NavBar />
          <main className="flex-1 p-6 absolute top-0 left-60"> {/* Main content area */}
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/AddProject" element={<AddProject />} />
          </Routes>
          </main>
        </div>
      ) : (
        <div className='flex relative'>
          <AuthNavBar />
          <main className="flex-1 p-6 left-50"> {/* Main content area */}
          <Routes>
            <Route index element={<SignIn setAuthentication={setAuthentication} />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<SignIn setAuthentication={setAuthentication} />} />
          </Routes>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
