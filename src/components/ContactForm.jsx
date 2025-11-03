import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Mascot({ mood }) {
  // moods: 'idle' | 'name' | 'secret' | 'error'
  const colors = useMemo(
    () => ({ base: '#111827', accent: '#6366f1', cheek: '#fca5a5' }),
    []
  );

  const shake = mood === 'error' ? { rotate: [0, -6, 6, -6, 6, 0] } : {};

  return (
    <motion.svg
      width="180"
      height="160"
      viewBox="0 0 180 160"
      className="mx-auto"
      animate={shake}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Head */}
      <defs>
        <radialGradient id="g" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#e9e7ff" stopOpacity="1" />
        </radialGradient>
      </defs>
      <circle cx="90" cy="80" r="60" fill="url(#g)" stroke="#e5e7eb" />

      {/* Ears */}
      <path d="M35,60 L60,30 L65,70" fill="#ede9fe" stroke="#e5e7eb" />
      <path d="M145,60 L120,30 L115,70" fill="#ede9fe" stroke="#e5e7eb" />

      {/* Eyes */}
      <AnimatePresence initial={false}>
        {mood === 'secret' ? (
          <motion.rect
            key="squint"
            x="60"
            y="80"
            width="24"
            height="4"
            rx="2"
            fill={colors.base}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        ) : (
          <motion.circle
            key="eye-left"
            cx="70"
            cy={mood === 'name' ? 72 : 76}
            r="6"
            fill={colors.base}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {mood === 'secret' ? (
          <motion.rect
            key="squint2"
            x="96"
            y="80"
            width="24"
            height="4"
            rx="2"
            fill={colors.base}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        ) : (
          <motion.circle
            key="eye-right"
            cx="110"
            cy={mood === 'name' ? 72 : 76}
            r="6"
            fill={colors.base}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Cheeks */}
      <motion.circle cx="62" cy="98" r="6" fill={colors.cheek} animate={{ opacity: mood === 'name' ? 0.9 : 0.4 }} />
      <motion.circle cx="118" cy="98" r="6" fill={colors.cheek} animate={{ opacity: mood === 'name' ? 0.9 : 0.4 }} />

      {/* Mouth */}
      {mood === 'name' ? (
        <motion.path
          d="M70,110 Q90,126 110,110"
          stroke={colors.accent}
          strokeWidth="6"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
      ) : mood === 'secret' ? (
        <motion.line x1="80" y1="114" x2="100" y2="114" stroke={colors.base} strokeWidth="5" />
      ) : mood === 'error' ? (
        <motion.g initial={{ x: -2 }} animate={{ x: [0, 3, -3, 3, -3, 0] }} transition={{ duration: 0.4 }}>
          <circle cx="90" cy="118" r="6" fill={colors.base} />
        </motion.g>
      ) : (
        <path d="M75,115 Q90,108 105,115" stroke={colors.base} strokeWidth="4" fill="transparent" />
      )}
    </motion.svg>
  );
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [secret, setSecret] = useState('');
  const [error, setError] = useState('');

  const mood = error ? 'error' : name ? 'name' : secret ? 'secret' : 'idle';

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Please enter at least 2 characters for your name.');
      return;
    }
    if (secret.trim().length < 6) {
      setError('Secret must be at least 6 characters.');
      return;
    }
    setError('');
    alert('Thanks! Your message has been sent.');
    setName('');
    setSecret('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Say hello</h3>
        <p className="mt-2 text-gray-600">
          The friendly mascot reacts as you type. Replace it with a Rive animation if you have one.
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              value={name}
              onChange={(e) => {
                setError('');
                setName(e.target.value);
              }}
              placeholder="Your name"
              className="mt-1 w-full rounded-xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Secret</label>
            <input
              type="password"
              value={secret}
              onChange={(e) => {
                setError('');
                setSecret(e.target.value);
              }}
              placeholder="Your secret"
              className="mt-1 w-full rounded-xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          {error && (
            <div className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2 border border-red-100">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-2.5 shadow hover:shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="rounded-2xl bg-white/60 backdrop-blur border border-white/60 p-6">
        <Mascot mood={mood} />
      </div>
    </div>
  );
}
