import { motion } from 'framer-motion';

export default function Loader() {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-[10000]">
      <motion.div
        className="flex flex-col items-center gap-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Logo */}
        <motion.div
          variants={item}
          className="text-4xl font-syne font-bold text-accent"
        >
          Shaan Saurav
        </motion.div>

        {/* Loading Spinner */}
        <motion.div
          variants={item}
          className="flex gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-accent rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.p
          variants={item}
          className="text-gray-400 font-dm text-sm"
        >
          Loading your portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
}
