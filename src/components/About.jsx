import React from "react";
import { motion } from "framer-motion";
import ResumeButton from "./ResumeButton";

export default function About() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      college: "Mysuru Royal Institute of Technology",
      year: "2021 - 2025",
    },
    {
      degree: "Pre-University Course (PUC)",
      college: "Sadvidya Composite PU College",
      year: "2019 - 2021",
    },
    {
      degree: "High School",
      college: "St. Marina’s English School",
      year: "2018 - 2019",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 transition-colors duration-700 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-400"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="leading-relaxed text-gray-700 dark:text-gray-300"
        >
          I'm a{" "}
          <span className="font-semibold text-indigo-500 dark:text-rose-400">
            Full Stack Developer
          </span>{" "}
          proficient in <strong>React.js</strong>, <strong>Tailwind CSS</strong>
          , and <strong>JavaScript</strong>. I build responsive, user-focused
          interfaces and scalable backend services. During my internship at
          Dyashin Technosoft, I developed a full-stack Tour Booking application
          integrating secure payment flows with <strong>Stripe</strong>. I enjoy
          creating production-ready applications with a clean UI and
          well-structured APIs.
        </motion.p>

        {/* Skills */}
        <div
          id="skills"
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {[
            "React.js",
            "Tailwind CSS",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "Material UI",
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm border border-gray-200/40 dark:border-gray-700/40 transition-all duration-500"
            >
              <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Resume Button */}
        <ResumeButton />

        {/* 🎓 Education Section */}
        <motion.div
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-400">
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200/40 dark:border-gray-700/40"
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {edu.degree}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.college}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  {edu.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
