import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import gsap from 'gsap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';
import ResumeButtons from './ResumeButtons';

export default function Hero() {
  const textRef = useRef(null);
  const roles = ['Full Stack Developer', 'MERN Stack Expert', 'Cloud Architect', 'Problem Solver', 'Open Source Contributor'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    // Animated text reveal
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.querySelectorAll('span'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.8, delay: 0.2 }
      );
    }

    // Cycle through roles
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0a0f1f] to-primary -z-10" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Main Heading */}
        <motion.h1
          ref={textRef}
          className="text-5xl md:text-7xl font-syne font-bold mb-4 leading-tight"
          variants={fadeUp}
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span className="text-accent">Shaan Saurav</span>
        </motion.h1>

        {/* Typing Effect Role */}
        <motion.div
          className="text-xl md:text-2xl text-gray-300 mb-6 h-12 flex items-center justify-center"
          variants={fadeUp}
        >
          <span className="text-accent font-dm">
            {roles[currentRole]}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed font-dm"
          variants={fadeUp}
        >
          Building stunning, performant web experiences with the MERN stack. 
          Passionate about clean code, great design, and solving real-world problems.
        </motion.p>

        {/* Resume Buttons */}
        <motion.div className="mb-12" variants={fadeUp}>
          <ResumeButtons />
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex gap-6 justify-center" variants={fadeUp}>
          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-accent/50 text-accent hover:bg-accent/10 transition"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-accent/50 text-accent hover:bg-accent/10 transition"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-accent text-sm">Scroll to explore</div>
          <div className="text-accent text-2xl">↓</div>
        </motion.div>
      </div>
    </motion.section>
  );
}
