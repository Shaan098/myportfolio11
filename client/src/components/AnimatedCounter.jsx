import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function AnimatedCounter({ from = 0, to, duration = 2, label, icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let start = from;
    const increment = (to - from) / (duration * 60); // 60fps
    let animationFrame;

    const animate = () => {
      start += increment;
      if (start < to) {
        setCount(Math.floor(start));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return (
    <motion.div
      ref={ref}
      className="p-4 bg-secondary/50 rounded-lg border border-accent/20 hover:border-accent/50 transition"
      whileHover={{ scale: 1.05, translateY: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="text-3xl mb-2">{icon}</motion.div>
      <motion.div className="text-accent text-2xl font-syne font-bold">
        {count}+
      </motion.div>
      <div className="text-gray-400 text-sm font-dm">{label}</div>
    </motion.div>
  );
}
