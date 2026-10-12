import { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return <section id="projects" className="desk-section desk-projects"><div className="desk-wrap">
    <div className="desk-section-head"><div><div className="desk-kicker">03 / Stuff I made</div><h2 className="desk-heading">A few things<br />that <em>exist.</em></h2></div><p>Three projects from my CV. Each started as a problem I wanted to understand.</p></div>
    <div className="desk-project-grid">{projectsData.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onViewDetails={setSelectedProject} />)}</div>
  </div><ProjectModal project={selectedProject} isOpen={Boolean(selectedProject)} onClose={() => setSelectedProject(null)} /></section>;
}
