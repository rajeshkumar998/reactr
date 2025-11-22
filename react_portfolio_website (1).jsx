import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-400">My Portfolio</h1>
        <p className="text-lg mt-2 text-gray-300">React Developer | Web Designer | Programmer</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-2xl shadow-lg">
          <h2 className="text-2xl mb-2 font-semibold text-blue-300">About Me</h2>
          <p className="text-gray-300">I am a passionate React developer who loves crafting beautiful and functional web apps.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-2xl shadow-lg">
          <h2 className="text-2xl mb-2 font-semibold text-blue-300">Skills</h2>
          <ul className="text-gray-300 list-disc ml-4">
            <li>React.js</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-2xl shadow-lg">
          <h2 className="text-2xl mb-2 font-semibold text-blue-300">Projects</h2>
          <p className="text-gray-300">1. Portfolio Website<br />2. Movie Recommendation App<br />3. Music Player UI</p>
        </motion.div>
      </section>

      <footer className="text-center mt-12 text-gray-400">© 2025 My Portfolio | Built with React</footer>
    </div>
  );
}
