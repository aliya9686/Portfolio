import React from "react";
import { motion } from "framer-motion";
import tourPic from "../assets/tour-pic.jpg"; // ✅ Import your image

const projects = [
  {
    title: "Voyago — Tour & Bike Booking App",
    desc: "A full-stack MERN tour booking app featuring seamless booking experience, payment integration, and user authentication.",
    tech: "MongoDB · Express.js · React.js · Node.js · TailwindCSS",

    link: "https://github.com/aliya9686/Voyago",
    image: tourPic, // ✅ use imported image
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 transition-colors duration-700 bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-400"
        >
          Projects & Experience
        </motion.h2>

        {/* Experience + Project Boxes */}
        <div id="experience" className="max-w-4xl mx-auto space-y-8">
          {/* Experience 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-all duration-500"
          >
            <h3 className="text-xl font-semibold text-indigo-500 dark:text-rose-400">
              Software Development Intern — Dyashin Technosoft Pvt Ltd
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Mar 2025 – Aug 2025 — Worked in a 4-member team to design and
              develop a full-stack Tour Booking application. Integrated Stripe
              payments, implemented responsive frontend using React & Tailwind,
              and created REST APIs with Node & Express.
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                Implemented JWT-based authentication and optimized endpoints.
              </li>
              <li>
                Built responsive UI and tested for cross-device compatibility.
              </li>
              <li>Reduced response time by ~25% through API optimization.</li>
            </ul>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-all duration-500"
          >
            <h3 className="text-xl font-semibold text-indigo-500 dark:text-rose-400">
              Java Development Intern — QSpiders
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Nov 2023 – Dec 2023 — Gained hands-on experience with Java, OOPs
              fundamentals, collections, exception handling, and multithreading.
            </p>
          </motion.div>

          {/* Projects */}
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-all duration-500"
            >
              {/* ✅ Project Image */}
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover rounded-xl mb-4 border border-gray-200 dark:border-gray-700"
                />
              )}

              <h3 className="text-xl font-semibold text-indigo-500 dark:text-rose-400">
                {p.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{p.desc}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                {p.tech}
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-500 dark:text-rose-400 hover:underline font-medium"
                >
                  GitHub
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-500 dark:text-rose-400 hover:underline font-medium"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
