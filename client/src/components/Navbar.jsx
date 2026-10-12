import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = [['Home', 'hero'], ['Why I do this', 'about'], ['Stuff I know', 'skills'], ['Stuff I made', 'projects'], ['The route here', 'timeline'], ['Say hi', 'contact']];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`desk-nav ${scrolled ? 'scrolled' : ''} ${open ? 'mobile-open' : ''}`}>
      <div className="desk-nav-inner">
        <a href="#hero" className="desk-logo">Shaan<span>.</span></a>
        <div className="desk-links">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</div>
        <div className="desk-socials">
          <a className="desk-social" href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={14} /></a>
          <a className="desk-social" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={14} /></a>
        </div>
        <button className="desk-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <FiX /> : <FiMenu />}</button>
      </div>
    </nav>
  );
}
