import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experiences"><Experience /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
