export default function ProjectCard({ project, index, onViewDetails }) {
  return <article className="desk-project" onClick={() => onViewDetails(project)}>
    <div className="desk-project-image"><img src={project.imageUrl} alt={`${project.title} illustration`} /></div>
    <div className="desk-project-body"><div className="desk-project-number">0{index + 1} / PROJECT</div><h3>{project.title}</h3><p>{project.description}</p><div className="desk-tags">{project.techStack.map((tech) => <span className="desk-tag" key={tech}>{tech}</span>)}</div></div>
  </article>;
}
