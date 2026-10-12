import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';

export default function Footer() {
  return <footer className="desk-footer"><div className="desk-footer-inner"><div><h3>That&apos;s the desk.</h3><p className="text-sm opacity-70">© {new Date().getFullYear()} Shaan Saurav</p></div><div className="desk-socials"><a className="desk-social" href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={14} /></a><a className="desk-social" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={14} /></a><a className="desk-social" href="#hero" aria-label="Back to top"><FaArrowUp size={14} /></a></div></div></footer>;
}
