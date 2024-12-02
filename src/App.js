import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import HomePage from './pages/homepage';
//import FeaturesPage from './pages/FeaturesPage';
//import StylePage from './pages/StylePage';
//import LivingPage from './pages/LivingPage';
//import AboutPage from './pages/AboutPage';
//import RegisterPage from './pages/RegisterPage';
//import LoginPage from './pages/LoginPage';
import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <Layout 
        user={user} 
        onLogout={handleLogout} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      >
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/features" element={<HomePage/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;