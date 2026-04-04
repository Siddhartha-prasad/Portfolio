import React from "react";
import { motion } from "framer-motion";
import profile from "../src/Passport_Photograph.jpg";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen font-sans text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black animate-gradient"></div>
      </div>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Siddhartha Prasad | Portfolio</h1>
        <div className="space-x-6 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-6 max-w-6xl mx-auto">
        <img
          src={profile}
          alt="profile"
          className="w-48 h-48 rounded-full object-cover border-4 border-gray-700"
        />

        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Siddhartha Prasad
          </motion.h2>
          <p className="text-gray-400 mb-4">
            Full Stack Developer | MERN Stack Enthusiast
          </p>

          <div className="mt-4 space-x-4">
            <a href="https://github.com/Siddhartha-prasad" className="px-5 py-2 bg-white text-black rounded-xl">GitHub</a>
            <a href="https://www.linkedin.com/in/siddhartha-prasad-b47931287" className="px-5 py-2 border border-white rounded-xl">LinkedIn</a>
            <a href="mailto:prasadsiddhartha2002@gmail.com" className="px-5 py-2 border border-white rounded-xl">Email</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <p className="text-gray-400">
          B.Tech in Mechanical Engineering with Minor in Computer Science and Engineering
          <br />
          Indian Institute of Technology Dharwad (2021 - 2025)
        </p>
      </section>
      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          I am a passionate Full Stack Developer and a B.Tech student at IIT Dharwad, with a strong foundation in both software development and problem-solving. I enjoy building scalable, real-world applications using modern technologies like React, Node.js, and MongoDB.
          <br /><br />
          I have hands-on experience in developing full-stack applications, designing REST APIs, and working with cloud-based databases. My focus is on writing clean, efficient code and creating user-friendly interfaces.
          <br /><br />
          Apart from development, I have led the Design Team at Drishti Club, where I worked on creative projects and collaborated with teams—enhancing both my technical and leadership skills.
          <br /><br />
          I am actively seeking opportunities to contribute, learn, and grow as a software developer.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-semibold mb-8">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 bg-gray-900 rounded-2xl">
            <h4 className="text-xl font-semibold">Notes App</h4>
            <p className="text-gray-400 mt-2 text-sm">
              MERN stack app with CRUD operations, REST API, and MongoDB Atlas integration.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl">
            <h4 className="text-xl font-semibold">Task Manager</h4>
            <p className="text-gray-400 mt-2 text-sm">
              Full-stack task manager with REST API, cloud DB, and deployment on Vercel/Render.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl">
            <h4 className="text-xl font-semibold">Manga Reader</h4>
            <p className="text-gray-400 mt-2 text-sm">
              Manga platform with MangaDex API, dark UI, and responsive design.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl">
            <h4 className="text-xl font-semibold">TinDog</h4>
            <p className="text-gray-400 mt-2 text-sm">
              Responsive landing page using HTML, CSS, Bootstrap.
            </p>
          </div>

        </div>
        <a
          href="https://github.com/Siddhartha-prasad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition"
        >
          View All Projects on GitHub
        </a>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
        <div className="flex flex-wrap gap-3 text-sm">
          {["JavaScript", "Python", "C++", "React", "Node.js", "Express", "MongoDB", "Tailwind", "Next.js", "PostgreSQL"].map(skill => (
            <span key={skill} className="px-4 py-2 bg-gray-800 rounded-xl">{skill}</span>
          ))}
        </div>
      </section>

      {/* Responsibility */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-semibold mb-4">Position of Responsibility</h3>
        <p className="text-gray-400">
          Head of Design Team, Drishti Club (Student Media Body), IIT Dharwad (2022–2025)
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center py-16 px-6">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-400">prasadsiddhartha2002@gmail.com</p>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Siddhartha Prasad
      </footer>
    </div>
  );
}