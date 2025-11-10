import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../assets/profile.jpg';

export default function HomePage() {
  const projects = [
    {
      title: "Anime Search App",
      description: "A modern anime search application with recommendations based on episode count",
      link: "/search",
      isInternal: true,
      tags: ["React", "TypeScript", "Redux", "Tailwind"]
    },
    {
      title: "Chatbot HTML/JSON/JAVASCRIPT",
      description: "This is a simple Chatbot project using JSON as a text storage.",
      link: "https://codepen.io/alia-wahida/full/KwVqgRo",
      isInternal: false,
      tags: ["HTML", "JSON.","JavaScript"]
    },
    {
      title: "Simple .Net OOP",
      description: "C# project just to explain 4 Pillars of OOP",
      link: "https://dotnetfiddle.net/70qQ3T",
      isInternal: false,
      tags: [".Net", "C#"]
    }
  ];

  // Simple inline SVG icons
  const GithubIcon = () => (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.9-.8.9-.8-.7-.9-1.7-1-2.1-1-.5 0-.9-.4-.9-.9 0-.6.3-1 .7-1.3-.1-.2-.3-1 .1-2.1 0 0 .6-.2 2 .7.6-.2 1.2-.3 1.8-.3s1.2.1 1.8.3c1.4-.9 2-.7 2-.7.4 1.1.2 1.9.1 2.1.4.3.7.7.7 1.3 0 .5-.4.9-.9.9-.4 0-1.4.1-2.1 1 0 0 .1.9.9.8 0 0 .6-1.1 1.7-1.2 0 0 1.1 0 .1.7 0 0-.7.3-1.2 1.5 0 0-.7 2.2-3.9 1.5v2.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 5 3.97 6 2.49 6S0 5 0 3.5 1.01 1 2.49 1 4.98 2 4.98 3.5zM.2 8h4.56v16H.2V8zM8.4 8h4.37v2.2h.06c.61-1.1 2.1-2.25 4.32-2.25 4.62 0 5.46 3.03 5.46 6.97V24h-4.55v-7.7c0-1.83-.03-4.18-2.55-4.18-2.56 0-2.95 2-2.95 4.05V24H8.4V8z"/>
    </svg>
  );

  const MailIcon = () => (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M0 4a2 2 0 012-2h20a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 0v.01L12 13 22 4.01V4H2zm0 2.2V20h20V6.2l-10 9.09L2 6.2z"/>
    </svg>
  );

  const ExternalLinkIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3z"/>
      <path d="M5 5h7v2H6.41l9.3 9.29-1.42 1.42L5 6.41V12H3V5c0-1.1.9-2 2-2z"/>
    </svg>
  );

  return (
    <div className="min-h-screen pt-24 pb-12 px-6" style={{ background: 'linear-gradient(135deg, #f6d365, #fda085)' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Profile Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
                <img 
                  src={ProfilePic}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Software Developer
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Alia Wahida</h1>
              <p className="text-xl text-gray-600 mb-4">Full Stack Developer</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hi there! I am a rising junior developer with 2 years of experience. I previously worked at Accenture as a frontend developer, primarily using Angular, TypeScript, JavaScript, HTML, CSS, and Ionic.  
                Later, I transitioned to a backend role at Affin Bank Malaysia as a .NET developer, working with C# and ASP.NET. Feel free to click the link provided for more
            </p>


              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="https://github.com/aliaimildamajid-sudo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors shadow-lg"
                >
                  <GithubIcon />
                </a>
                <a 
                  href="https://linkedin.com/in/aliawahidaa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <LinkedinIcon />
                </a>
                <a 
                  href="mailto:aliaimildamajid@gmail.com"
                  className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                >
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
            My Recent Projects of 2025
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.isInternal ? (
                  <Link 
                    to={project.link}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors"
                  >
                    View Project <ExternalLinkIcon />
                  </Link>
                ) : (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors"
                  >
                    View Project <ExternalLinkIcon />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link 
            to="/search"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-xl px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Try the Anime Search App →
          </Link>
        </div>

      </div>
    </div>
  );
}
