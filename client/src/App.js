import { useContext } from 'react';
import Home from './pages/home/Home'
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {AuthContext} from './context/AuthContext'
import RequireAuth from './components/auth';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
    <Routes>
      <Route path="/" element={ 
       <RequireAuth><Home /> </RequireAuth>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:username" element={<Profile />}/>
    </Routes>
  </Router>
  );
}

export default App;
