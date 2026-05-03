import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { stats } from '../data/portfolioData';
import AnimatedCounter from './AnimatedCounter';

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-primary py-20 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-accent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          {/* Visual Element */}
          <motion.div 
            className="flex justify-center mb-8"
            variants={fadeUp}
          >
            <motion.div className="relative w-full max-w-2xl h-64 rounded-lg overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/50 to-accent/10" />
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 right-8 text-6xl"
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                💻
              </motion.div>
              
              <motion.div
                className="absolute top-20 left-8 text-5xl"
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                🚀
              </motion.div>
              
              <motion.div
                className="absolute bottom-8 right-16 text-5xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                ⚡
              </motion.div>
              
              <motion.div
                className="absolute bottom-12 left-12 text-6xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ⚛️
              </motion.div>

              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-accent text-lg font-syne font-bold">Full Stack Developer</p>
                  <p className="text-gray-300 text-sm font-dm mt-2">MERN Stack Specialist</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio Content */}
          <motion.div variants={fadeUp}>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-dm">
              I&apos;m a full-stack developer and Computer Science student at Lovely Professional 
              University, passionate about building scalable web applications with the MERN stack. 
              I specialize in React, Node.js, Express, and MongoDB, with additional expertise in 
              C++ and AWS cloud architecture.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-dm">
              Currently pursuing challenging projects in AR/VR, real-time systems, and cloud 
              infrastructure. I&apos;ve earned certifications from NPTEL (Cloud Computing) and Oracle 
              (AWS Developer Professional). Active on LeetCode with 150+ problems solved and 
              consistent GitHub contributions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <AnimatedCounter to={10} duration={2} label="Projects Completed" icon="🚀" />
              <AnimatedCounter to={150} duration={2.5} label="LeetCode Problems" icon="📊" />
              <AnimatedCounter to={2} duration={1.5} label="Certifications" icon="🏆" />
              <AnimatedCounter to={500} duration={2.5} label="GitHub Contributions" icon="📈" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
