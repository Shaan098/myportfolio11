import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';
import ResumeButtons from './ResumeButtons';

export default function Hero() {
  const cubeRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'React.js Developer', 'Backend Developer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => setCurrentRole((role) => (role + 1) % roles.length), 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMove = (event) => {
    if (!cubeRef.current) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 26;
    const y = (event.clientY / window.innerHeight - 0.5) * -26;
    cubeRef.current.style.transform = `rotateX(${y - 14}deg) rotateY(${x - 24}deg) rotateZ(-3deg)`;
  };

  return (
    <motion.section id="hero" className="hero-neo" onMouseMove={handleMove} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="parallax-shape" style={{ width: 90, height: 90, right: '10%', top: '18%', background: 'var(--mustard)', transform: 'rotate(14deg)' }} />
      <div className="parallax-shape" style={{ width: 35, height: 35, left: '8%', bottom: '19%', background: 'var(--brick)', transform: 'rotate(-18deg)' }} />
      <div className="hero-sticker">AVAILABLE FOR GOOD WORK</div>
      <div className="hero-grid">
        <div>
          <p className="hero-kicker">01 / Hello, I&apos;m Shaan Saurav</p>
          <h1 className="hero-title">I build <em>useful</em> things for the web.</h1>
          <p className="hero-copy">
            {roles[currentRole]} who likes clear interfaces, sturdy backends, and solving the awkward parts of a product.
          </p>
          <div className="hero-actions"><ResumeButtons /></div>
          <div className="hero-links">
            <a href={socialLinks.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>
        <div className="hero-stage">
          <div className="cube-shadow" />
          <div className="code-cube" ref={cubeRef} aria-label="Interactive 3D code cube">
            <div className="cube-face cube-front">&lt;/&gt;</div>
            <div className="cube-face cube-back">{'{ }'}</div>
            <div className="cube-face cube-right">JS</div>
            <div className="cube-face cube-left">PY</div>
            <div className="cube-face cube-top">C++</div>
            <div className="cube-face cube-bottom">API</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
