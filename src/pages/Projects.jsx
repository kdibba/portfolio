import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack E-commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://via.placeholder.com/600x400",
      github: "#",
      demo: "#",
      category: "full-stack"
    },
    {
      title: "Machine Learning Image Classifier",
      description: "An image classification system using TensorFlow and Python. Trained on a custom dataset to identify objects with high accuracy.",
      technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Flask"],
      image: "https://via.placeholder.com/600x400",
      github: "#",
      demo: "#",
      category: "machine-learning"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing complex datasets. Built with React and D3.js, featuring real-time updates and customizable charts.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      image: "https://via.placeholder.com/600x400",
      github: "#",
      demo: "#",
      category: "data-analytics"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects; 