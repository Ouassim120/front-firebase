import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './SignIn';
import Signup from './SignUp';
import Dashboard from './Dashboard';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* <Route path="/signup" element={<Signup />} /> */}

            <Route path="/signin" element={<Signin />} />

            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
