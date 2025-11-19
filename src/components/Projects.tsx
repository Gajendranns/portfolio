import React from 'react';
import { userData } from '../data';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="sticky-header">
        <h2 className="section-heading">PROJECTS</h2>
      </div>
      <div>
        {userData.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
