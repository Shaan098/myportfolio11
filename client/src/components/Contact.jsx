import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { sendContactMessage } from '../utils/api';
import { socialLinks } from '../data/portfolioData';

export default function Contact() {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const submit = async (event) => {
    event.preventDefault();
    if (!Object.values(data).every(Boolean)) return toast.error('Please fill in every field.');
    try { setLoading(true); await sendContactMessage(data); toast.success('Message sent. Thank you.'); setData({ name: '', email: '', message: '' }); } catch { toast.error('That did not send. Please email me instead.'); } finally { setLoading(false); }
  };
  return <section id="contact" className="desk-section desk-contact"><div className="desk-wrap desk-contact-grid"><div><div className="desk-kicker">05 / Say hi</div><h2 className="desk-heading">Tell me<br />what you are <em>making.</em></h2><div className="desk-contact-links"><a href={`mailto:${socialLinks.email}`}><FaEnvelope /> {socialLinks.email}</a><a href={`tel:${socialLinks.phone}`}><FaPhone /> {socialLinks.phone}</a></div></div><form className="desk-form" onSubmit={submit}><label htmlFor="name">Your name</label><input id="name" className="desk-input" value={data.name} onChange={(event) => setData({ ...data, name: event.target.value })} /><label htmlFor="email">Email</label><input id="email" type="email" className="desk-input" value={data.email} onChange={(event) => setData({ ...data, email: event.target.value })} /><label htmlFor="message">Message</label><textarea id="message" rows="5" className="desk-input" value={data.message} onChange={(event) => setData({ ...data, message: event.target.value })} /><button className="desk-button" disabled={loading}>{loading ? 'Sending...' : 'Send message'}</button></form></div></section>;
}
