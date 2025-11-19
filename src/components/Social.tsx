import React from 'react';
import { Github, Linkedin, Codepen, Instagram, Twitter } from 'lucide-react';
import { userData } from '../data';

const Social: React.FC = () => {
  return (
    <ul className="social-links">
      <li>
        <a href={userData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={24} />
        </a>
      </li>
      <li>
        <a href={userData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={24} />
        </a>
      </li>
      <li>
        <a href={userData.social.codepen} target="_blank" rel="noopener noreferrer" aria-label="CodePen">
          <Codepen size={24} />
        </a>
      </li>
      <li>
        <a href={userData.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram size={24} />
        </a>
      </li>
      <li>
        <a href={userData.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter size={24} />
        </a>
      </li>
      <style>{`
        .social-links {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 40px;
        }
        .social-links a {
          color: var(--slate);
        }
        .social-links a:hover {
          color: var(--lightest-slate);
        }
      `}</style>
    </ul>
  );
};

export default Social;
