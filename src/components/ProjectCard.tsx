import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, tech }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h3 className="project-title">
          {title} <ExternalLink size={16} className="external-icon" />
        </h3>
        <p className="description">{description}</p>
        <ul className="tech-list">
          {tech.map((item, index) => (
            <li key={index} className="tech-item">{item}</li>
          ))}
        </ul>
      </div>
      <style>{`
        .project-card {
          display: flex;
          flex-direction: column;
          margin-bottom: 40px;
          padding: 20px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
          cursor: pointer;
        }
        .project-card:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        .project-card:hover .project-title {
          color: var(--green);
        }
        @media (min-width: 768px) {
          .project-card {
            flex-direction: row;
            align-items: flex-start;
          }
        }
        .image-container {
          flex-shrink: 0;
          width: 100%;
          margin-bottom: 20px;
          border-radius: 4px;
          overflow: hidden;
          border: 2px solid rgba(148, 163, 184, 0.1);
          transition: border-color 0.2s ease;
        }
        .project-card:hover .image-container {
          border-color: rgba(148, 163, 184, 0.3);
        }
        @media (min-width: 768px) {
          .image-container {
            width: 120px;
            height: 70px;
            margin-bottom: 0;
            margin-right: 20px;
          }
        }
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .content {
          flex-grow: 1;
        }
        .project-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 500;
          color: var(--lightest-slate);
          margin-bottom: 10px;
          transition: color 0.2s ease;
        }
        .external-icon {
          transition: transform 0.2s ease;
        }
        .project-card:hover .external-icon {
          transform: translate(2px, -2px);
        }
        .description {
          font-size: 14px;
          color: var(--slate);
          margin-bottom: 20px;
        }
        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tech-item {
          background-color: rgba(94, 234, 212, 0.1);
          color: var(--green);
          font-size: 12px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 15px;
        }
      `}</style>
    </a>
  );
};

export default ProjectCard;
