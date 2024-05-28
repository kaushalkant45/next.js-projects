import { motion } from "framer-motion";
import HomeLayout from "../components/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
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
      </motion.div>
    </HomeLayout>
  );
}
