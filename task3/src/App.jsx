import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StudentProvider } from './StudentContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import CourseDetail from './pages/CourseDetail';
import './App.css';

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/about" element={<About />} />
              <Route path="/course/:id" element={<CourseDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;
