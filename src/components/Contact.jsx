import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your EmailJS configuration here
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log('Email sent successfully');
      }, (error) => {
        console.log('Failed to send email:', error);
      });
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="contact">
      <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div className="space-y-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:gsh200306@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>gsh200306@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9573402468</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Interests</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span>🚀</span>
                <span>Learning new technologies</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📚</span>
                <span>Reading Books</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>💃</span>
                <span>Dance</span>
              </li>
            </ul>
          </div>
        </div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800/50 backdrop-blur-sm rounded-lg p-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default Contact;