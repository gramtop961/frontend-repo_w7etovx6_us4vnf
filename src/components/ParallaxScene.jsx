import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxScene() {
  // Framer Motion scroll progress for parallax depths
  const { scrollY } = useScroll();
  const yClouds = useTransform(scrollY, [0, 1000], [0, -80]);
  const yMountains = useTransform(scrollY, [0, 1000], [0, -30]);
  const yForest = useTransform(scrollY, [0, 1000], [0, -10]);
  const yWaterfall = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <section className="relative h-[100svh] overflow-hidden bg-gradient-to-b from-sky-100 via-indigo-100 to-purple-100">
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2),transparent_60%)]" />

      {/* Clouds layer */}
      <motion.div
        style={{ y: yClouds }}
        className="absolute inset-x-0 top-10 flex justify-between px-10"
        aria-hidden
      >
        {/* Placeholder animated SVG clouds - replace with your SVGs */}
        <motion.svg
          width="220"
          height="100"
          viewBox="0 0 220 100"
          className="text-white/80 drop-shadow-md"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <ellipse cx="60" cy="50" rx="60" ry="35" fill="currentColor" />
          <ellipse cx="120" cy="45" rx="50" ry="30" fill="currentColor" />
          <ellipse cx="170" cy="55" rx="40" ry="25" fill="currentColor" />
        </motion.svg>
        <motion.svg
          width="180"
          height="90"
          viewBox="0 0 180 90"
          className="text-white/70"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <ellipse cx="50" cy="45" rx="50" ry="30" fill="currentColor" />
          <ellipse cx="110" cy="40" rx="45" ry="28" fill="currentColor" />
        </motion.svg>
      </motion.div>

      {/* Mountains layer */}
      <motion.div style={{ y: yMountains }} className="absolute inset-x-0 bottom-[30%]" aria-hidden>
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#c7d2fe"
            d="M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,176C840,192,960,192,1080,176C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </motion.div>

      {/* Waterfall layer (background) */}
      <motion.div
        style={{ y: yWaterfall }}
        className="absolute left-1/2 -translate-x-1/2 bottom-[20%] w-56 h-[40%] bg-gradient-to-b from-cyan-200/80 via-sky-300/70 to-indigo-300/60 rounded-b-full overflow-hidden shadow-lg"
        aria-hidden
      >
        {/* Water shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/20"
          animate={{ x: ["-20%", "120%"], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Water particles */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-2 w-24 h-24 rounded-full blur-2xl bg-white/30"
          animate={{ y: [0, -10, 0], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Forest foreground */}
      <motion.div style={{ y: yForest }} className="absolute inset-x-0 bottom-0" aria-hidden>
        <svg viewBox="0 0 1440 200" className="w-full">
          <rect width="1440" height="200" fill="#a7f3d0" />
          {/* Simple trees - replace with your SVG forest */}
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`translate(${80 + i * 110}, 40)`}>
              <rect x="18" y="80" width="12" height="60" fill="#065f46" />
              <polygon points="24,0 0,80 48,80" fill="#0ea5e9" opacity="0.6" />
              <polygon points="24,20 4,90 44,90" fill="#22d3ee" opacity="0.7" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Hero copy */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-800 drop-shadow-sm">
            Cinematic Parallax Portfolio
          </h1>
          <p className="mt-4 text-gray-600 md:text-lg">
            Layered mountains, drifting clouds, and a shimmering waterfall create a calm, immersive backdrop.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#projects" className="px-5 py-2.5 rounded-full bg-gray-900 text-white shadow-sm hover:shadow-md transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/70 backdrop-blur border border-white/60 text-gray-800 hover:bg-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
