import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/portfolioData';
import ResumeButtons from './ResumeButtons';

const notes = [
  { className: 'note-one', title: 'Right now', text: 'B.Tech Computer Science student at Lovely Professional University. CGPA: 6.5.' },
  { className: 'note-two', title: 'I make', text: 'Collaborative editors, sprint boards, and online judge platforms.' },
  { className: 'note-three', title: 'Good to know', text: 'I solved 175+ LeetCode problems and keep learning by building.' },
];

export default function Hero() {
  const [positions, setPositions] = useState({});
  const [dragging, setDragging] = useState(null);
  const move = (event, note) => {
    if (!dragging || dragging !== note.className) return;
    setPositions((current) => ({ ...current, [note.className]: { x: event.clientX - 110, y: event.clientY - 40 } }));
  };
  return (
    <motion.section id="hero" className="desk-section desk-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="desk-wrap desk-hero-grid">
        <div>
          <div className="desk-kicker">A small portfolio / Shaan Saurav</div>
          <h1 className="desk-heading">I make websites that <em>do a job.</em></h1>
          <div className="desk-rule" />
          <p className="desk-copy">I am a full-stack developer. I work with React, Node.js, Django, Express.js, and MongoDB. This is a short tour of what I have made and what I am learning.</p>
          <div className="desk-hero-actions"><ResumeButtons /></div>
          <div className="flex gap-4 mt-5">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
        <div className="desk-note-board" onPointerMove={(event) => dragging && move(event, notes.find((note) => note.className === dragging))} onPointerUp={() => setDragging(null)} onPointerLeave={() => setDragging(null)}>
          <div className="desk-tape" />
          {notes.map((note) => {
            const position = positions[note.className];
            return <article key={note.className} className={`pin-note ${note.className}`} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); setDragging(note.className); }} style={position ? { left: position.x, top: position.y, transform: 'rotate(0deg)' } : undefined}>
              <h3>{note.title}</h3><p>{note.text}</p>
            </article>;
          })}
        </div>
      </div>
    </motion.section>
  );
}
