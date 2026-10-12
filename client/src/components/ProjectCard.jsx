import { useRef } from 'react';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';

export default function ProjectCard({ project, index, onViewDetails }) {
  const cardRef = useRef(null);
  const handleMove = (event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const rotateY = ((event.clientX - rect.left) / rect.width - .5) * 12;
    const rotateX = ((event.clientY - rect.top) / rect.height - .5) * -12;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const reset = () => { if (cardRef.current) cardRef.current.style.transform = ''; };

  return (
    <div ref={cardRef} className="project-card-neo" onMouseMove={handleMove} onMouseLeave={reset} onClick={() => onViewDetails?.(project)}>
      <div className="project-image-neo"><img src={project.imageUrl} alt="" /></div>
      <div className="project-body-neo">
        <span className="project-number">0{index + 1} / PROJECT</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">{project.techStack.map((tech) => <span className="project-tag" key={tech}>{tech}</span>)}</div>
        <div className="flex gap-4 mt-5">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}><FaGithub /> Code</a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}><FaArrowUpRightFromSquare /> Live</a>}
        </div>
      </div>
    </div>
  );
}
