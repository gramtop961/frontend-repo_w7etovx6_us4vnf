import React from 'react';
import Navbar from './components/Navbar';
import ParallaxScene from './components/ParallaxScene';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-b from-white to-indigo-50">
      <Navbar />
      <ParallaxScene />

      <main className="relative z-10">
        <Section id="about" title="About">
          <p className="text-gray-700 leading-relaxed">
            I design and build immersive web experiences focused on motion, clarity, and craft. This demo uses layered parallax, soft
            gradients, and glass surfaces to create a calm, cinematic feel that keeps content front and center.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {["Motion Design", "Frontend Engineering", "Interactive Prototypes"].map((t) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-xl p-4 bg-white/70 backdrop-blur border border-white/60 shadow-sm"
              >
                <p className="font-medium">{t}</p>
                <p className="text-sm text-gray-600 mt-1">Exploring subtle, delightful interactions.</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="group block overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur shadow-sm hover:shadow-md"
              >
                <div className="aspect-video bg-gradient-to-br from-indigo-200 via-sky-200 to-emerald-200" />
                <div className="p-4">
                  <p className="font-semibold">Cinematic Web #{i}</p>
                  <p className="text-sm text-gray-600 mt-1">Motion-first experience with layered depth.</p>
                </div>
              </motion.a>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <ContactForm />
        </Section>

        <footer className="py-12 text-center text-sm text-gray-500">
          <p>
            Replace placeholder SVGs with your own art or Rive animations for birds, fox, and butterflies. You can also wire up GSAP
            ScrollTrigger if you prefer for advanced timelines.
          </p>
        </footer>
      </main>
    </div>
  );
}
