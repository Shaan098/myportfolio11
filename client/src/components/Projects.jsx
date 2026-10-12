import { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projects" className="neo-section" style={{ background: 'var(--brick)', color: 'var(--paper)' }}>
      <div className="neo-wrap">
        <div className="section-intro">
          <div><span className="paper-label">03 / Made with intent</span><h2 className="section-title mt-5">Selected<br /><span className="hand-underline">work.</span></h2></div>
          <p>Three projects from the CV. Each one started with a practical problem and ended with a few more questions.</p>
        </div>
        <div className="project-grid">{projectsData.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onViewDetails={setSelectedProject} />)}</div>
      </div>
      <ProjectModal project={selectedProject} isOpen={Boolean(selectedProject)} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
