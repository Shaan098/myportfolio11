import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="neo-footer">
      <div className="neo-footer-inner">
        <div><h3>Let&apos;s make<br />something useful.</h3><p>© {new Date().getFullYear()} Shaan Saurav</p></div>
        <div className="neo-socials">
          <a className="neo-social" href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a className="neo-social" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a className="neo-social" href="#hero" aria-label="Back to top"><FaArrowUp /></a>
        </div>
      </div>
    </footer>
  );
}
