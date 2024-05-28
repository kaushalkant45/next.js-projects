import Footer from "./Footer";
import { motion } from "framer-motion";

export default function HomeLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-black-100">
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
              href="/features"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Features
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
              href="/pricing"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Pricing
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
              href="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Contact
            </motion.a>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-16 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
