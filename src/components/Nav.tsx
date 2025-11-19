import React, { useEffect, useState } from 'react';

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <ul>
        {['about', 'experience', 'projects'].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={activeSection === item ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
            >
              <span className="nav-indicator"></span>
              <span className="nav-text">{item.toUpperCase()}</span>
            </a>
          </li>
        ))}
      </ul>
      <style>{`
        .nav {
          display: none;
        }
        @media (min-width: 1024px) {
          .nav {
            display: block;
            margin-top: 60px;
          }
          .nav ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .nav a {
            display: flex;
            align-items: center;
            color: var(--slate);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.1em;
          }
          .nav-indicator {
            display: block;
            width: 30px;
            height: 1px;
            background-color: var(--slate);
            margin-right: 16px;
            transition: all 0.25s ease;
          }
          .nav a:hover .nav-indicator,
          .nav a.active .nav-indicator {
            width: 60px;
            background-color: var(--lightest-slate);
          }
          .nav a:hover,
          .nav a.active {
            color: var(--lightest-slate);
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
