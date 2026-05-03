import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SkillBar({ skill, proficiency = 85 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-white font-dm font-bold text-sm">{skill}</h4>
      </div>

      <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden border border-accent/20">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-cyan-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
