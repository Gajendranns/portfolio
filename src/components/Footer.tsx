import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        Loosely designed in <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> and coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> by yours truly. Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>, deployed with <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>. All text is set in the <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">Inter</a> typeface.
      </p>
      <style>{`
        .footer {
          max-width: 540px;
          margin: 0 auto;
          padding: 40px 0;
          color: var(--slate);
          font-size: 14px;
          text-align: center;
        }
        @media (min-width: 1024px) {
          .footer {
            text-align: left;
            margin: 0;
          }
        }
        .footer a {
          color: var(--lightest-slate);
          font-weight: 500;
        }
        .footer a:hover {
          color: var(--green);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
