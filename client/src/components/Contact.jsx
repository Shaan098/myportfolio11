import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { sendContactMessage } from '../utils/api';
import { socialLinks } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const submit = async (event) => {
    event.preventDefault();
    if (!Object.values(formData).every(Boolean)) return toast.error('Please fill in every field.');
    try { setLoading(true); await sendContactMessage(formData); toast.success('Message sent. Thank you.'); setFormData({ name: '', email: '', message: '' }); }
    catch { toast.error('Could not send that. Please email me instead.'); }
    finally { setLoading(false); }
  };
  return (
    <section id="contact" className="neo-section" style={{ background: 'var(--mustard)' }}>
      <div className="neo-wrap">
        <div className="contact-neo">
          <div><span className="paper-label">05 / Say hello</span><h2 className="section-title mt-5">Have a<br /><span className="hand-underline">thought?</span></h2><div className="contact-details">
            <a className="contact-detail" href={`mailto:${socialLinks.email}`}><FaEnvelope /> {socialLinks.email}</a>
            <a className="contact-detail" href={`tel:${socialLinks.phone}`}><FaPhone /> {socialLinks.phone}</a>
            <div className="contact-detail"><FaMapMarkerAlt /> Punjab, India</div>
          </div></div>
          <form className="neo-form" onSubmit={submit}>
            <label htmlFor="name">Your name</label><input id="name" className="neo-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <label htmlFor="email">Email address</label><input id="email" type="email" className="neo-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <label htmlFor="message">What are you thinking?</label><textarea id="message" rows="5" className="neo-input" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            <button className="ink-button" disabled={loading}>{loading ? 'Sending...' : 'Send it my way →'}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
