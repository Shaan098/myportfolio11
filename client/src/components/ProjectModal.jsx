import { FaTimes } from 'react-icons/fa';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center p-5" style={{ background: 'rgba(23,23,23,.8)' }} onClick={onClose}>
      <article className="neo-form max-w-2xl max-h-[90vh] overflow-y-auto relative" onClick={(event) => event.stopPropagation()}>
        <button className="absolute top-4 right-4 border-2 border-black p-2 bg-yellow-300" onClick={onClose} aria-label="Close project details"><FaTimes /></button>
        <span className="paper-label">Project details</span>
        <h2 className="text-4xl font-syne mt-5 mb-4">{project.title}</h2>
        <p className="leading-relaxed">{project.longDescription}</p>
        <div className="project-tags mt-6">{project.techStack.map((tech) => <span className="project-tag" key={tech}>{tech}</span>)}</div>
      </article>
    </div>
  );
}
