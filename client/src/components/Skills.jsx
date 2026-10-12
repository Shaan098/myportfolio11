import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const categories = ['languages', 'frameworks', 'tools', 'soft skills'];

  return (
    <motion.section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-[#0a0f1f] to-primary py-20 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">
            <span className="text-white">My </span>
            <span className="text-accent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        {/* Skills by Category */}
        {categories.map((category) => (
          <motion.div key={category} className="mb-12" variants={fadeUp}>
            <h3 className="text-2xl font-syne font-bold text-accent mb-6 capitalize">
              {category}
            </h3>

            <div className="flex flex-wrap gap-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    variants={fadeUp}
                  >
                    <div className="flex items-center gap-3 px-4 py-3 bg-secondary/30 rounded-lg border border-accent/20 hover:border-accent/50 transition">
                      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">{skill.icon}</span>
                      <span className="text-gray-200 font-dm">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
