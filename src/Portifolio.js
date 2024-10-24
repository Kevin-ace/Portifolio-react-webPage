import React, { useState } from 'react';
import { GithubIcon, Mail, Phone, MapPin, ChevronDown, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('projects');

  const projects = [
    {
      title: "FastAPI Project with Odoo Integration",
      description: "A comprehensive FastAPI application integrated with Odoo ERP system for partner and sales order management.",
      impact: "Reduced partner data retrieval time by 40%, handling 100+ concurrent users",
      tech: ["FastAPI", "Odoo", "PostgreSQL", "JWT", "Docker"],
      github: "github.com/kevinkipruto/fastapi-odoo",
      status: "Completed Oct 2024"
    },
    {
      title: "Smart Attendance System",
      description: "An automated QR code-based attendance tracking system for university use with separate interfaces for professors and students.",
      impact: "Testing with 50 students and 5 professors",
      tech: ["Python", "Flask", "SQLite", "QR Code Libraries"],
      github: "github.com/kevinkipruto/smart-attendance",
      status: "80% Complete"
    },
    // Add other projects similarly
  ];

  const skills = [
    "Python", "JavaScript", "SQL", "C++", "FastAPI", "Django", "Flask", "Next.js", 
    "React", "PostgreSQL", "Docker", "AWS", "Git"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-4 text-blue-400">KEVIN KIPRUTO</h1>
          <p className="text-xl mb-8">Software Engineer | Full-Stack Developer</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:kevinkipruto83@gmail.com" className="flex items-center space-x-2 hover:text-blue-400">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://github.com/kevinkipruto" className="flex items-center space-x-2 hover:text-blue-400">
              <GithubIcon size={20} />
              <span>GitHub</span>
            </a>
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span>+254113772133</span>
            </div>
          </div>
        </div>
        <ChevronDown 
          className="absolute bottom-8 animate-bounce text-blue-400" 
          size={32} 
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-800 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {['projects', 'skills', 'experience', 'education'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-lg capitalize ${
                  activeSection === section 
                    ? 'text-blue-400 border-b-2 border-blue-400' 
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Projects Section */}
        <section className={`space-y-12 ${activeSection !== 'projects' && 'hidden'}`}>
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-blue-900/50 transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <p className="mb-4 text-blue-300">{project.impact}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-900/50 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={`https://${project.github}`} 
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <GithubIcon size={16} />
                    <span>View Code</span>
                    <ExternalLink size={16} />
                  </a>
                  <span className="text-gray-400">{project.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className={`${activeSection !== 'skills' && 'hidden'}`}>
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-4 rounded-lg text-center hover:bg-blue-900/50 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className={`${activeSection !== 'experience' && 'hidden'}`}>
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Experience</h2>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Software Engineer Intern</h3>
            <p className="text-blue-400 mb-4">Tritel Technologies - Nairobi, Kenya (08/2024 to 10/2024)</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Developed and maintained backend APIs using FastAPI</li>
              <li>Implemented JWT-based authentication and role management</li>
              <li>Collaborated with cross-functional teams</li>
              <li>Implemented security measures and privacy compliance</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className={`${activeSection !== 'education' && 'hidden'}`}>
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Education</h2>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-blue-400 mb-4">Laikipia University - Nyahururu, Kenya</p>
            <p className="mb-2">Expected Graduation: 2025</p>
            <p className="text-gray-300">Key Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Web Development, Machine Learning</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Kevin Kipruto. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <MapPin className="text-blue-400" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;