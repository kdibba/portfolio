import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        
        {/* Professional Summary */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I am a passionate Full-Stack Developer and Data Scientist with expertise in building modern web applications
            and implementing machine learning solutions. With a strong foundation in both frontend and backend development,
            as well as data analysis, I bring a unique perspective to solving complex problems.
          </p>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-4">
            <div className="card">
              <h3 className="text-xl font-semibold">Your University</h3>
              <p className="text-gray-600 dark:text-gray-300">Bachelor's in Computer Science</p>
              <p className="text-gray-500">2020 - 2024</p>
            </div>
            {/* Add more education items as needed */}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-4">
            <div className="card">
              <h3 className="text-xl font-semibold">Company Name</h3>
              <p className="text-primary">Software Engineer</p>
              <p className="text-gray-500">2023 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Developed and maintained full-stack web applications</li>
                <li>Implemented machine learning models for data analysis</li>
                <li>Collaborated with cross-functional teams</li>
              </ul>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card">
              <h3 className="text-xl font-semibold">AWS Certified Developer</h3>
              <p className="text-gray-500">2023</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold">TensorFlow Developer</h3>
              <p className="text-gray-500">2023</p>
            </div>
            {/* Add more certifications as needed */}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <div className="card">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Open Source Development</li>
              <li>Artificial Intelligence</li>
              <li>Cloud Computing</li>
              <li>Data Visualization</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About; 