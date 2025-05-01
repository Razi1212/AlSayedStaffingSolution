'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Section = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="p-8 bg-white rounded-xl shadow-lg my-12 max-w-3xl mx-auto"
    >
      {children}
    </motion.div>
  );
};

export default function MultiSectionScrollPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <Section>
        <h2 className="text-2xl font-bold mb-4">🔥 Job Search Assistance</h2>
        <p>We help you find the best career opportunities...</p>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mb-4">📄 Resume Optimization</h2>
        <p>Highlight your strengths and experience...</p>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mb-4">🎤 Interview Coaching</h2>
        <p>Mock interviews and feedback to build confidence...</p>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mb-4">📑 Documents Attestation</h2>
        <p>Verification of educational and professional documents...</p>
      </Section>
    </div>
  );
}
