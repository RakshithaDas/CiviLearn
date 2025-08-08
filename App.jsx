import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './app.css';

import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from './components/Navbar';

import Modules from './pages/Modules';
import Quizzes from './pages/Quizzes';
import Stories from './pages/Stories';
import Alerts from './pages/Alerts';
import Chatbot from './pages/Chatbot';
import Emergency from './pages/Emergency';

import RightsModule from './pages/RightsModule';
import RightToEducation from './pages/RightToEducation';
import RightToEquality from './pages/RightToEquality';
import RightToFreedom from './pages/RightToFreedom';
import RightAgainstExploitation from './pages/RightAgainstExploitation';
import RightToFreedomOfReligion from './pages/RightToFreedomOfReligion';
import CulturalAndEducationalRights from './pages/CulturalAndEducationalRights';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        
        {/* Protected Routes */}
        <Route path="/home" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Home /></ProtectedRoute>} />
        <Route path="/modules" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Modules /></ProtectedRoute>} />
        <Route path="/quizzes" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Quizzes /></ProtectedRoute>} />
        <Route path="/stories" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Stories /></ProtectedRoute>} />
        <Route path="/alerts" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Alerts /></ProtectedRoute>} />
        <Route path="/chatbot" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Chatbot /></ProtectedRoute>} />
        <Route path="/emergency" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Emergency /></ProtectedRoute>} />

        {/* Rights Pages */}
        <Route path="/RightsModule" element={<ProtectedRoute isLoggedIn={isLoggedIn}><RightsModule /></ProtectedRoute>} />
        <Route path="/right-to-education" element={<ProtectedRoute isLoggedIn={isLoggedIn}><RightToEducation /></ProtectedRoute>} />
        <Route path="/right-to-equality" element={<ProtectedRoute isLoggedIn={isLoggedIn}><RightToEquality /></ProtectedRoute>} />
        <Route path="/right-to-freedom" element={<ProtectedRoute isLoggedIn={isLoggedIn}><RightToFreedom /></ProtectedRoute>} />
        <Route path="/right-against-exploitation" element={<ProtectedRoute isLoggedIn={isLoggedIn}><RightAgainstExploitation /></ProtectedRoute>} />
        <Route path="/right-to-freedom-of-religion" element={<ProtectedRoute isLoggedIn={isLoggedIn}><RightToFreedomOfReligion /></ProtectedRoute>} />
        <Route path="/cultural-and-educational-rights" element={<ProtectedRoute isLoggedIn={isLoggedIn}><CulturalAndEducationalRights /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
