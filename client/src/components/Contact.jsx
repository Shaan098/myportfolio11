import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { fadeUp, staggerContainer } from '../animations/variants';
import { sendContactMessage } from '../utils/api';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      const response = await sendContactMessage(formData);
      if (response.data.success) {
        toast.success('Message sent successfully! 🎉');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-primary py-20 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">
            <span className="text-white">Get In </span>
            <span className="text-accent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={fadeUp}>
            <div>
              <p className="text-gray-400 text-lg leading-relaxed font-dm mb-6">
                Have a question or want to work together? I&apos;d love to hear from you. 
                Feel free to get in touch!
              </p>
            </div>

            {/* Contact Methods */}
            {[
              { icon: FaEnvelope, label: 'Email', value: 'shaansaurav633@gmail.com', href: 'mailto:shaansaurav633@gmail.com' },
              { icon: FaPhone, label: 'Phone', value: '+91 6204566381', href: 'tel:+916204566381' },
              { icon: FaMapMarkerAlt, label: 'Location', value: 'Phagwara, Punjab' },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.href || '#'}
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                  variants={fadeUp}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/50 flex items-center justify-center
                    group-hover:bg-accent/20 transition">
                    <Icon className="text-accent text-lg" />
                  </div>
                  <div>
                    <p className="text-accent font-dm text-sm">{contact.label}</p>
                    <p className="text-white font-dm">{contact.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeUp}
          >
            {/* Name */}
            <div>
              <label className="block text-gray-300 font-dm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg
                  text-white focus:border-accent outline-none transition font-dm"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 font-dm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg
                  text-white focus:border-accent outline-none transition font-dm"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 font-dm mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg
                  text-white focus:border-accent outline-none transition font-dm resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-accent text-primary font-syne font-bold rounded-lg
                hover:shadow-lg hover:shadow-accent/50 transition disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
