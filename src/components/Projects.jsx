import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';

const projects = [
  {
    title: "Detection of Malaria Using Deep Learning",
    description: "Used pre-trained Models like Alex Net achieving 96.9% accuracy for 9 classes.",
    tech: ["Python", "Deep Learning", "Alex Net"],
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "July 2023",
    github: "https://github.com"
  },
  {
    title: "Real-Time Chat System",
    description: "Built with React.js, WebSocket, Node.js, and MongoDB with JWT Authentication.",
    tech: ["React.js", "Node.js", "MongoDB", "WebSocket", "JWT"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "September 2023",
    github: "https://github.com"
  },
  {
    title: "Weather Forecast Progressive Website",
    description: "Real-time weather updates using OpenWeather API and React.js.",
    tech: ["React.js", "OpenWeather API", "Progressive Web App"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "September 2024",
    github: "https://github.com"
  },
  {
    title: "Smart Parking Management System",
    description: "IoT-based parking system built with React.js and Node.js.",
    tech: ["React.js", "Node.js", "IoT"],
    category: "IoT",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "December 2024",
    github: "https://github.com"
  }
];

const categories = ["All", "Web", "AI/ML", "IoT"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      
      <div className="flex justify-center mb-8 space-x-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                : 'bg-gray-800'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt
                options={{
                  max: 15,
                  scale: 1.05,
                  speed: 1000,
                }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">{project.date}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;