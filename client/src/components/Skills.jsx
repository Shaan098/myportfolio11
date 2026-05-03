import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { skills } from '../data/portfolioData';
import SkillBar from './SkillBar';

export default function Skills() {
  const categories = ['frontend', 'backend', 'devops', 'tools'];

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
              {category === 'devops' ? 'DevOps' : category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    variants={fadeUp}
                  >
                    <div className="p-4 bg-secondary/30 rounded-lg border border-accent/20 hover:border-accent/50 transition">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{skill.icon}</span>
                        <div className="flex-1">
                          <SkillBar skill={skill.name} proficiency={skill.level} />
                        </div>
                      </div>
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
