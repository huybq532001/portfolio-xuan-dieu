// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// src/App.jsx
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white font-sans">
        <Navbar />

        {/* CHỈ MAIN SCROLL – CHIỀU CAO 100VH */}
        <main className="flex-1 overflow-y-auto snap-y snap-mandatory scrollbar-hide">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="snap-start min-h-screen"><Hero /></section>
                  <section className="snap-start min-h-screen"><About /></section>
                  <section className="snap-start min-h-screen"><Skills /></section>
                  <section className="snap-start min-h-screen"><Education /></section>
                  <section className="snap-start min-h-screen"><Projects /></section>
                  <section className="snap-start min-h-screen"><Contact /></section>
                </>
              }
            />
          </Routes>
        </main>

        {/* FOOTER LUÔN DƯỚI CÙNG – KHÔNG SCROLL */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;