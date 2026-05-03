import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { timeline } from '../data/portfolioData';

export default function Timeline() {
  return (
    <motion.section
      id="timeline"
      className="min-h-screen bg-gradient-to-b from-[#0a0f1f] to-primary py-20 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">
            <span className="text-white">My </span>
            <span className="text-accent">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                variants={fadeUp}
              >
                {/* Content */}
                <div className="w-1/2">
                  <motion.div
                    className="p-6 bg-secondary/30 rounded-lg border border-accent/20 hover:border-accent/50 transition"
                    whileHover={{ scale: 1.05, x: index % 2 === 0 ? 10 : -10 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-accent text-primary rounded-full text-xs font-syne font-bold">
                        {item.year}
                      </span>
                      <span className="text-accent text-xs font-dm">
                        {item.type === 'work' ? '💼' : '🎓'}
                      </span>
                    </div>
                    <h3 className="text-lg font-syne font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-accent text-sm font-dm mb-2">
                      {item.company}
                    </p>
                    <p className="text-gray-400 text-sm font-dm">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="w-0 flex justify-center">
                  <motion.div
                    className="w-6 h-6 bg-accent rounded-full border-4 border-primary absolute top-8"
                    whileHover={{ scale: 1.3 }}
                    animate={{ boxShadow: ['0 0 0 0 rgba(0, 245, 255, 0.7)', '0 0 0 10px rgba(0, 245, 255, 0)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Placeholder */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
