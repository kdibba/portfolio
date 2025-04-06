import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full-Stack Developer & Data Scientist
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="btn btn-primary"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-secondary"
          >
            Contact Me
          </a>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Full-Stack Development */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Full-Stack Development</h3>
            <ul className="space-y-2">
              <li>React.js & Next.js</li>
              <li>Node.js & Express</li>
              <li>MongoDB & PostgreSQL</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          {/* Data Science */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Data Science</h3>
            <ul className="space-y-2">
              <li>Python & NumPy</li>
              <li>Pandas & Scikit-learn</li>
              <li>Data Visualization</li>
              <li>Statistical Analysis</li>
            </ul>
          </div>

          {/* Machine Learning */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
            <ul className="space-y-2">
              <li>TensorFlow & PyTorch</li>
              <li>Deep Learning</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Preview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project cards will go here */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Project 1</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Description of your first featured project.
            </p>
            <a href="#" className="text-primary hover:underline">
              Learn More →
            </a>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Project 2</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Description of your second featured project.
            </p>
            <a href="#" className="text-primary hover:underline">
              Learn More →
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 