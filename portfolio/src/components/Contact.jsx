import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white text-gray-800 dark:from-gray-950 dark:to-gray-900 dark:text-gray-200"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-400"
        >
          Contact Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 mb-10 text-lg"
        >
          Have a project in mind or just want to say hi? Feel free to reach out!
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-5 text-left"
          onSubmit={(e) => e.preventDefault()} // form not functional yet
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-rose-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-rose-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Your Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-rose-400 focus:outline-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-8 py-3 mt-4 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-500 to-rose-400 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com/aliya9686"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-rose-400 transition-all duration-300"
          >
            <Github size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/aliya-m"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-rose-400 transition-all duration-300"
          >
            <Linkedin size={28} />
          </a>

          <a
            href="mailto:aliyamohammadi043@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-rose-400 transition-all duration-300"
          >
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
