import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const menuItems = [['Home', 'hero'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Journey', 'timeline'], ['Contact', 'contact']];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      menuItems.forEach(([, id]) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 120 && section.getBoundingClientRect().bottom > 120) setActive(id);
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`neo-nav ${scrolled ? 'scrolled' : ''} ${isOpen ? 'mobile-open' : ''}`}>
      <div className="neo-nav-inner">
        <a href="#hero" className="neo-logo">Shaan<span>.</span></a>
        <div className="neo-links">
          {menuItems.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setIsOpen(false)}>{label}</a>)}
        </div>
        <div className="neo-socials">
          <a className="neo-social" href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a className="neo-social" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">{isOpen ? <FiX /> : <FiMenu />}</button>
      </div>
    </nav>
  );
}
