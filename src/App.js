import React, { useState } from 'react';
import Layout from './pages/layout';
import HomePage from './pages/homepage';
import { Routes, Route} from "react-router-dom";
//import FeaturesPage from './pages/FeaturesPage';
//import StylePage from './pages/StylePage';
//import LivingPage from './pages/LivingPage';
//import AboutPage from './pages/AboutPage';
//import RegisterPage from './pages/RegisterPage';
//import LoginPage from './pages/LoginPage';
import './styles.css';
import IntroductionToGNN from './pages/posts/gnn/introGnnsite';
import GNNPart2 from './pages/posts/gnn/GNNpart2';
import BlogPost from './components/blogPost';

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
    <>
      <Layout
        user={user}
        onLogout={handleLogout}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/aidea/" element={<HomePage/>} />
          <Route path="/aidea/posts/:slug" element={<BlogPost/>}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;