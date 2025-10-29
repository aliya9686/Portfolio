import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import ThemeToggle from "./ThemeToggle"; // ✅ import toggle

export default function Hero() {
  const highlights = [
    "Full Stack Internship — Dyashin Technosoft (Mar — Aug 2025)",
    "Built Voyago (Tour & Bike Booking) — React, Node, MongoDB, Stripe",
    "Java Internship — QSpiders (Nov — Dec 2023)",
    "B.E. in Computer Science — Mysuru Royal Institute Of Technology",
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center 
                       bg-white dark:bg-black text-black dark:text-white 
                       transition-colors duration-500 px-6 py-16 sm:py-20 relative overflow-hidden"
    >
      <ThemeToggle /> {/* 🌗 Toggle button */}
      <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-8">
        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden 
                          border-4 border-gradient-to-r from-rose-400 to-indigo-400 
                          shadow-lg transition-all duration-500 hover:scale-105"
          >
            <img
              src={profileImg}
              alt="Aliya Mohammadi"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* INTRO TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-400">
              ALIYA
            </span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6 max-w-xl mx-auto">
            Full-stack developer building sleek, scalable, and human-friendly
            web apps. Driven by design, powered by code.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-full 
                         font-medium text-white shadow-lg hover:scale-105 
                         transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="mailto:aliyamohammadi043@gmail.com"
              className="border border-gray-700 dark:border-gray-300 px-6 py-3 
                         rounded-full text-gray-800 dark:text-gray-200 
                         hover:text-rose-400 hover:border-rose-400 
                         transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
