import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-100">
      <header className="w-full bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-3xl font-bold"
          >
            My Landing Page
          </motion.h1>
          <nav>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
              href="#features"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Features
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
              href="#pricing"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Pricing
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
              href="#contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Contact
            </motion.a>
          </nav>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to My Landing Page</h2>
        <p className="text-xl mb-8">
          This is a simple landing page built with Next.js and Tailwind CSS.
        </p>
        <a
          href="#get-started"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
        >
          Get Started
        </a>
      </motion.main>

      <footer className="w-full bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="footer-text">
            &copy; 2024 My Landing Page. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
