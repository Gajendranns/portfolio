import React from 'react';

interface ExperienceCardProps {
  date: string;
  title: string;
  company: string;
  link: string;
  description: string;
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ date, title, company, link, description, skills }) => {
  return (
    <div className="experience-card">
      <div className="date">{date}</div>
      <div className="content">
        <h3 className="job-title">
          {title} · <a href={link} target="_blank" rel="noopener noreferrer" className="company-link">{company}</a>
        </h3>
        <p className="description">{description}</p>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
      <style>{`
        .experience-card {
          display: flex;
          flex-direction: column;
          margin-bottom: 40px;
          padding: 20px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }
        .experience-card:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        @media (min-width: 768px) {
          .experience-card {
            flex-direction: row;
          }
        }
        .date {
          flex-shrink: 0;
          width: 120px;
          margin-bottom: 10px;
          font-size: 12px;
          font-weight: 600;
          color: var(--slate);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        @media (min-width: 768px) {
          .date {
            margin-bottom: 0;
            margin-right: 20px;
          }
        }
        .content {
          flex-grow: 1;
        }
        .job-title {
          font-size: 16px;
          font-weight: 500;
          color: var(--lightest-slate);
          margin-bottom: 10px;
        }
        .company-link {
          color: var(--lightest-slate);
        }
        .company-link:hover {
          color: var(--green);
        }
        .description {
          font-size: 14px;
          color: var(--slate);
          margin-bottom: 20px;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-item {
          background-color: rgba(94, 234, 212, 0.1);
          color: var(--green);
          font-size: 12px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 15px;
        }
      `}</style>
    </div>
  );
};

export default ExperienceCard;
