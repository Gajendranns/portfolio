import React from 'react';
import { userData } from '../data';
import Nav from './Nav';
import Social from './Social';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div>
        <h1 className="name">
          <a href="/">{userData.name}</a>
        </h1>
        <h2 className="title">{userData.title}</h2>
        <p className="tagline">{userData.tagline}</p>
        <Nav />
      </div>
      <Social />
      <style>{`
        .header {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (min-width: 1024px) {
          .header {
            position: sticky;
            top: 0;
            height: 100vh;
            padding: 96px 0;
            width: 50%;
          }
        }
        .name {
          font-size: 48px;
          font-weight: 700;
          color: var(--lightest-slate);
          margin-bottom: 10px;
        }
        .title {
          font-size: 20px;
          font-weight: 500;
          color: var(--lightest-slate);
          margin-bottom: 20px;
        }
        .tagline {
          max-width: 300px;
          color: var(--slate);
          line-height: 1.5;
        }
      `}</style>
    </header>
  );
};

export default Header;
