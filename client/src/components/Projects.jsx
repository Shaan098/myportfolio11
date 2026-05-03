import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, scaleUp } from '../animations/variants';
import { projectsData } from '../data/portfolioData';
import { getProjects } from '../utils/api';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await getProjects('all');
      if (response.data.success) {
        setProjects(response.data.data);
      }
    } catch (error) {
      console.log('Using fallback project data');
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', 'frontend', 'backend', 'fullstack', 'mobile'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <motion.section
      id="projects"
      className="min-h-screen bg-primary py-20 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div className="text-center mb-12" variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-accent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={fadeUp}>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-syne font-bold capitalize transition ${
                selectedCategory === category
                  ? 'bg-accent text-primary'
                  : 'bg-secondary/50 text-accent border border-accent/50 hover:border-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'All Projects' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={scaleUp}
              >
                <ProjectCard 
                  project={project} 
                  index={index}
                  onViewDetails={setSelectedProject}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div className="text-center text-gray-400" variants={fadeUp}>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
            <p>No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
