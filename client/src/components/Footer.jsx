import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-[#050710] text-gray-300 py-12 px-6 border-t border-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-syne font-bold text-accent mb-2">Shaan Saurav</h3>
            <p className="text-gray-400 font-dm">Full Stack Developer | MERN Stack</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-syne font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-dm">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-accent transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-syne font-bold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {[
                { icon: FaGithub, href: socialLinks.github },
                { icon: FaLinkedin, href: socialLinks.linkedin },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-accent/50 flex items-center justify-center
                      text-gray-400 hover:text-accent hover:border-accent transition"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-dm text-center md:text-left">
            © {new Date().getFullYear()} Shaan Saurav. Built with ❤️ using MERN Stack.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-accent/50 text-accent hover:bg-accent/10 transition"
            whileHover={{ scale: 1.2, rotate: 90 }}
          >
            <FaArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
