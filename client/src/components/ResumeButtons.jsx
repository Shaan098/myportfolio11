import { FaArrowRight, FaDownload } from 'react-icons/fa';

export default function ResumeButtons() {
  return (
    <div className="flex gap-4 flex-wrap">
      <a className="ink-button" href="#projects">See my work <FaArrowRight size={13} /></a>
      <a className="ink-button secondary" href="/resume.pdf" download="Shaan-Saurav-Resume.pdf"><FaDownload size={13} /> Resume</a>
    </div>
  );
}
