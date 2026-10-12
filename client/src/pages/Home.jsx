import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shaan Saurav | Full Stack Developer</title>
        <meta name="description" content="Shaan Saurav is a Computer Science student and full-stack developer building reliable web applications." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shaan Saurav | Full Stack Developer" />
        <meta property="og:description" content="Portfolio showcasing Shaan Saurav's full-stack projects, skills, certificates, and achievements." />
        <meta name="theme-color" content="#080B14" />
      </Helmet>

      <main className="bg-primary text-white overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
