import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

export default function ResumeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-12 text-center"
    >
      <a
        href="/Aliya_Resume.pdf" // ✅ Place this file in /public folder
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-indigo-500 to-rose-400 hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <FileDown size={18} />
        Get Resume
      </a>

      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
        Quick peek into my skills and journey — open to explore.
      </p>
    </motion.div>
  );
}
