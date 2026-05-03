import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

export default function ResumeButtons() {
  const resumePath = '/resume.pdf';

  const handleView = () => {
    window.open(resumePath, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Shaan-Saurav-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      <motion.button
        onClick={handleView}
        className="flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-lg hover:bg-cyan-400 transition font-dm font-bold"
        whileHover={{ scale: 1.05, translateY: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaEye size={18} /> View Resume
      </motion.button>

      <motion.button
        onClick={handleDownload}
        className="flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/50 text-accent rounded-lg hover:bg-accent/20 transition font-dm font-bold"
        whileHover={{ scale: 1.05, translateY: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaDownload size={18} /> Download Resume
      </motion.button>
    </div>
  );
}
