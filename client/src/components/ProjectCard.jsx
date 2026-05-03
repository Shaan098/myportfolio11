import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project, index, onViewDetails }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-full cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={() => onViewDetails?.(project)}
    >
      <div
        className="relative h-full bg-secondary/30 rounded-lg border border-accent/20 overflow-hidden group
          hover:border-accent/50 transition"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/10 to-transparent">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"
            animate={{ opacity: isHovered ? 0.8 : 0.4 }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-syne font-bold text-white mb-2">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm font-dm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-accent/10 border border-accent/30 text-accent text-xs rounded
                  font-dm"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 text-accent text-xs font-dm">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/50
                  text-accent rounded hover:bg-accent/20 transition font-dm text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub size={16} /> Code
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 bg-accent text-primary rounded
                  hover:bg-cyan-400 transition font-dm text-sm font-bold"
                whileHover={{ scale: 1.05 }}
              >
                <FaExternalLinkAlt size={16} /> Live
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
