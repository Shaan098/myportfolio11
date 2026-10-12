import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, scaleUp } from '../animations/variants';
import { achievements, certificates, stats } from '../data/portfolioData';

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
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-accent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div className="flex justify-center mb-8" variants={fadeUp}>
            <motion.div className="relative w-full max-w-2xl h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/50 to-accent/10" />
              <motion.div className="absolute top-4 right-8 text-6xl" animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }}>💻</motion.div>
              <motion.div className="absolute top-20 left-8 text-5xl" animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity }}>🚀</motion.div>
              <motion.div className="absolute bottom-8 right-16 text-5xl" animate={{ y: [0, -15, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>⚡</motion.div>
              <motion.div className="absolute bottom-12 left-12 text-6xl" animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>⚛️</motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-accent text-lg font-syne font-bold">Full Stack Developer</p>
                  <p className="text-gray-300 text-sm font-dm mt-2">Computer Science Student</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-dm">
              I&apos;m a Computer Science and Engineering student at Lovely Professional University
              and a full-stack developer who enjoys building reliable, user-focused web applications.
              My experience spans React, Node.js, Express.js, Django, MongoDB, and REST APIs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-dm">
              My projects include a real-time collaborative editor, a sprint and bug tracker, and an
              online judge platform. I also enjoy problem-solving, collaborative work, and learning
              new technologies.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div key={stat.label} className="p-4 bg-secondary/50 rounded-lg border border-accent/20" variants={scaleUp}>
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-accent text-2xl font-syne font-bold">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-dm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-syne font-bold text-accent mb-4">Certificates</h3>
                <div className="space-y-4">
                  {certificates.map((certificate) => (
                    <div key={certificate.title} className="border-l-2 border-accent pl-4">
                      <p className="text-white font-dm">{certificate.title}</p>
                      <p className="text-gray-400 text-sm font-dm">{certificate.issuer} · {certificate.date}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-syne font-bold text-accent mb-4">Achievements</h3>
                <ul className="space-y-3 text-gray-300 text-sm font-dm list-disc list-inside">
                  {achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
