import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      links: {
        enable: true,
        color: "#ffffff",
        opacity: 0.2
      },
      move: {
        enable: true,
        speed: 1
      }
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1"
        >
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
            <span className="text-4xl">GS</span>
          </div>
        </motion.div>

        <h1 className="text-6xl font-bold mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Guna Sathwika
          </span>
        </h1>

        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            1000,
            'AI/ML Enthusiast',
            1000,
            'React Developer',
            1000,
          ]}
          wrapper="h2"
          repeat={Infinity}
          className="text-3xl text-gray-400"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <SocialIcon href="https://github.com/GunaSathwika" icon="github" />
          <SocialIcon href="http://www.linkedin.com/in/gunasathwika06" icon="linkedin" />
          <SocialIcon href="mailto:gsh200306@gmail.com" icon="envelope" />


        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold"
        >
          View My Work
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
  >
    <i className={`fab fa-${icon} text-xl`} />
  </motion.a>
);

export default Hero;