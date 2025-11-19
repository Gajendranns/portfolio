import React from 'react';
import { userData } from '../data';
import ExperienceCard from './ExperienceCard';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="sticky-header">
        <h2 className="section-heading">EXPERIENCE</h2>
      </div>
      <div>
        {userData.experience.map((job, index) => (
          <ExperienceCard key={index} {...job} />
        ))}
      </div>
      <div className="resume-link-container">
        <a href="/resume.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">
          View Full Résumé
        </a>
      </div>
      <style>{`
        .resume-link-container {
          margin-top: 40px;
        }
        .resume-link {
          display: inline-block;
          font-size: 16px;
          font-weight: 600;
          color: var(--lightest-slate);
        }
        .resume-link:hover {
          color: var(--green);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
      `}</style>
    </section>
  );
};

export default Experience;
