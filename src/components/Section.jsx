import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-6 rounded-2xl bg-white/60 backdrop-blur border border-white/60 p-6 md:p-8 shadow-sm"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
