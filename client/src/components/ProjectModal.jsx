import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="bg-secondary/95 backdrop-blur-sm rounded-lg border border-accent/30 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-accent/20 rounded-full transition z-10"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes className="text-accent" size={24} />
              </motion.button>

              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.h2
                  className="text-3xl font-syne font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.title}
                </motion.h2>

                <motion.p
                  className="text-accent font-dm mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {project.category?.toUpperCase()}
                </motion.p>

                <motion.p
                  className="text-gray-300 font-dm mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <h3 className="text-accent font-syne font-bold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 border border-accent/50 text-accent rounded-full text-sm font-dm"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 255, 200, 0.2)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Links */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/50 text-accent rounded hover:bg-accent/20 transition font-dm"
                      whileHover={{ scale: 1.05, translateY: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={18} /> View Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded hover:bg-cyan-400 transition font-dm font-bold"
                      whileHover={{ scale: 1.05, translateY: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt size={18} /> Visit Live
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
