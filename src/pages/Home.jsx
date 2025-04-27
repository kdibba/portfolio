import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Khadijatou Dibba
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Full-Stack Developer & Data Scientist
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I build modern web applications and analyze data to solve complex problems.
          Currently pursuing my passion for technology and innovation, particularly in Startups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <ul className="space-y-2">
            <li className="text-gray-600 dark:text-gray-300">• React & Next.js</li>
            <li className="text-gray-600 dark:text-gray-300">• Python</li>
            <li className="text-gray-600 dark:text-gray-300">• Machine Learning</li>
            <li className="text-gray-600 dark:text-gray-300">• Cloud Computing</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Contact
          </h2>
          <ul className="space-y-2">
            <li className="text-gray-600 dark:text-gray-300">• Email: kd2732@nyu.edu</li>
            <li className="text-gray-600 dark:text-gray-300">• GitHub: github.com/kdibba</li>
            <li className="text-gray-600 dark:text-gray-300">• LinkedIn: linkedin.com/in/khadijatoudibba</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 