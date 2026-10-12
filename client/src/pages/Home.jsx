import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shaan Saurav | Full Stack Developer</title>
        <meta name="description" content="Shaan Saurav builds useful full-stack web applications with React, Node.js, Django, and MongoDB." />
      </Helmet>
      <main className="site-shell">
        <Navbar /><Hero /><About /><Skills /><Projects /><Timeline /><Contact /><Footer />
      </main>
    </>
  );
}
