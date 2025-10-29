import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Name */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-white mb-4"
        >
          ALIYA
        </motion.h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/aliya9686"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-indigo-500 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/aliya-m"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-rose-500 transition-all duration-300 hover:scale-105"
          >
            <Linkedin size={20} className="text-white" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2025 Aliya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
