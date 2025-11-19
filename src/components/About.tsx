import React from 'react';
import { userData } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="sticky-header">
        <h2 className="section-heading">ABOUT</h2>
      </div>
      <div className="about-content">
        {userData.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <style>{`
        .section {
          margin-bottom: 100px;
          scroll-margin-top: 100px;
        }
        @media (min-width: 1024px) {
          .section-heading {
            display: none;
          }
        }
        .about-content p {
          margin-bottom: 15px;
          color: var(--slate);
          font-size: 16px;
        }
      `}</style>
    </section>
  );
};

export default About;
