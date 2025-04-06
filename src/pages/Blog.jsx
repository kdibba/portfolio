import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable Web Applications with React and Node.js",
      excerpt: "Learn how to build scalable web applications using React for the frontend and Node.js for the backend. We'll cover best practices, performance optimization, and deployment strategies.",
      date: "2024-03-01",
      category: "Web Development",
      readTime: "10 min read",
      image: "https://via.placeholder.com/800x400"
    },
    {
      title: "Introduction to Machine Learning with Python",
      excerpt: "A comprehensive guide to getting started with machine learning using Python. We'll explore popular libraries like scikit-learn and TensorFlow, and build practical ML models.",
      date: "2024-02-15",
      category: "Machine Learning",
      readTime: "15 min read",
      image: "https://via.placeholder.com/800x400"
    },
    {
      title: "Data Visualization Techniques with D3.js",
      excerpt: "Discover how to create interactive and engaging data visualizations using D3.js. From basic charts to complex interactive dashboards, learn the fundamentals of data visualization.",
      date: "2024-02-01",
      category: "Data Science",
      readTime: "12 min read",
      image: "https://via.placeholder.com/800x400"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              {/* Post Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Post Content */}
              <div className="p-6">
                {/* Category and Date */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>

                {/* Read Time and Link */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    {post.readTime}
                  </span>
                  <a
                    href="#"
                    className="text-primary hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <div className="card text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Subscribe to My Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get the latest articles and insights delivered straight to your inbox.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="btn btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blog; 