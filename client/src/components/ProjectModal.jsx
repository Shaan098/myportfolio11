import { FaTimes } from 'react-icons/fa';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;
  return <div className="fixed inset-0 z-[70] grid place-items-center p-5 bg-[#2B2118]/80" onClick={onClose}><article className="desk-form max-w-2xl max-h-[90vh] overflow-y-auto relative" onClick={(event) => event.stopPropagation()}><button className="absolute right-4 top-4 border border-[#2B2118] bg-[#D99A2B] p-2" onClick={onClose} aria-label="Close project details"><FaTimes /></button><div className="desk-kicker">Project notes</div><h2 className="text-4xl font-syne mt-4 mb-4">{project.title}</h2><p className="leading-relaxed text-[#766957]">{project.longDescription}</p><div className="desk-tags mt-6">{project.techStack.map((tech) => <span className="desk-tag" key={tech}>{tech}</span>)}</div></article></div>;
}
