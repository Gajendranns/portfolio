import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      <div 
        className="pointer-glow"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />
      <div className="container">
        <Header />
        <main className="main-content">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
      <style>{`
        .app {
          min-height: 100vh;
        }
        .pointer-glow {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 30;
          transition: background 0.3s;
        }
        .container {
          max-width: 1280px;
          min-height: 100vh;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (min-width: 768px) {
          .container {
            padding: 0 48px;
          }
        }
        @media (min-width: 1024px) {
          .container {
            display: flex;
            justify-content: space-between;
            gap: 24px;
            padding: 0 96px;
          }
        }
        .main-content {
          padding-top: 24px;
        }
        @media (min-width: 1024px) {
          .main-content {
            width: 50%;
            padding-top: 96px;
            padding-bottom: 96px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
