import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,  // Adjust this value if needed
  });

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 rounded-lg p-8"
      >
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Microsoft, Languify</h3>
          <p className="text-gray-400">Internship • Jul 2022 - Sep 2022</p>
          <p className="mt-4">
            Celebrity Image Classifier using Artificial Intelligence with Python
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Internship Certificate from Smart Internz, Google</li>
            <li>Internship Certificate from Microsoft, Languify</li>
            <li>Azure Administrator Certificate from Microsoft</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Strengths</h3>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-purple-500/20 rounded-full">Adaptability</span>
            <span className="px-4 py-2 bg-purple-500/20 rounded-full">Team Worker</span>
            <span className="px-4 py-2 bg-purple-500/20 rounded-full">Fast Learner</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
