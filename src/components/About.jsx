import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-gray-300">
            I'm a Computer Science student at <strong>VIT-AP University</strong> with a CGPA of <strong>7.97</strong>. 
            I'm passionate about building web applications and exploring new technologies.
          </p>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li><strong>BTech in Computer Science</strong> - VIT-AP University (Current)</li>
              <li><strong>Intermediate</strong> - NARAYANA, Kurnool (961 marks)</li>
              <li><strong>10th Standard</strong> - NARAYANA ENGLISH MEDIUM SCHOOL (GPA: 10)</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="text-gray-300">
            <li>📧 <a href="mailto:gsh200306@gmail.com" className="hover:text-purple-400">gsh200306@gmail.com</a></li>
            <li>📱 <a href="tel:+919573402468" className="hover:text-purple-400">9573402468</a></li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
