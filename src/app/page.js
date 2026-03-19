'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import { Github, Linkedin, Mail, Phone, ChevronDown, Menu, X } from 'lucide-react'
import confetti from 'canvas-confetti'

const skills = [
  { name: "JavaScript", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },

  { name: "React", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Redux", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Context API", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

  { name: "HTML5", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SASS", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },

  { name: "Material UI", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  { name: "Tailwind CSS", level: 90, icon: "./tailwind-icon.svg" },
  { name: "Bootstrap", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "shadCN", level: 85, icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/shadcnui.svg"  },

  { name: "Chart.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg" },
  { name: "D3.js", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" },

  { name: "GraphQL", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "REST APIs", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "JWT", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },

  { name: "Node.js", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

  { name: "Jest", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
  { name: "Vitest", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg" },
  { name: "Playwright", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },

  { name: "Webpack", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
  { name: "Vite", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "Git", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },

  { name: "AWS", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },

  { name: "MongoDB", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Redis", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
]

const experiences = [
{
  company: "Infocusp Innovations",
  location: "Pune",
  role: "Software Engineer-1",
  period: "Dec 2024 - Present",
  projects: [
    {
      name: "SMASH Music - Artist Collaboration Platform",
      achievements: [
        "Designed and developed a scalable music streaming and artist collaboration platform using Next.js, React, and TypeScript, supporting artist onboarding, remix submissions, and real-time audio playback.",
        "Architected a dual-flow frontend system with environment-driven configurations and separate AWS Cognito user pools, enabling independent artist and remix workflows.",
        "Integrated multiple GraphQL endpoints and optimized API consumption strategies, improving data-fetching efficiency and reducing redundant network calls.",
        "Engineered a custom network priority management system to prioritize critical audio streaming requests, significantly improving playback reliability under varying network conditions.",
        "Implemented a multi-layer caching mechanism using in-memory cache, Cache Storage API, and IndexedDB with LRU eviction, reducing load times and enabling offline-first user experience.",
        "Optimized media loading and rendering performance using Intersection Observer and lazy loading techniques, improving perceived performance and user engagement.",
        "Collaborated closely with backend teams to streamline data flow and enhance API interactions for real-time features."
      ]
    },
    {
      name: "AI-Powered Conversational Assistant",
      achievements: [
        "Contributed significantly to the development of an AI-powered conversational assistant, focusing on building a high-performance and resilient UI for real-time contextual responses.",
        "Architected and set up a scalable monorepo using Next.js, TypeScript, ShadCN, and Tailwind CSS, significantly improving project structure and maintainability.",
        "Developed and optimized core UI components, including a feature-rich data table with advanced filtering, ensuring efficient component composition and seamless user experience.",
        "Collaborated with product managers to document UI requirements, translating them into scalable frontend architectures and ensuring alignment."
      ]
    }
  ]
},
  {
    company: "Zycus",
    location: "Pune",
    role: "Software Engineer",
    period: "July 2023 - Dec 2024",
    projects: [
      {
        name: "LytHouse",
        achievements: [
          "Engineered complex UI designs for the Metrics Module (ReactJS, Material UI) to significantly boost user engagement and reduce bounce rate, implementing efficient caching strategies.",
          "Built and maintained E2E test flows using Playwright to validate UI regressions across modules, ensuring application stability and reliability.",
          "Fortified application security by implementing robust route whitelisting, enhancing overall system resilience.",
          "Spearheaded comprehensive code refactoring for the Initiatives Module, substantially increasing code efficiency and reducing load time through functional programming and performance optimization.",
          "Developed and integrated critical goal functionality within the Goals Module, improving user interaction and target management with effective state management.",
          "Created a highly reusable Supplier Details component, enhancing project maintainability and accelerating development cycles."
        ]
      }
    ]
  },
  {
    company: "Infyu Labs",
    location: "Gandhinagar",
    role: "Frontend Developer",
    period: "April 2021 - July 2023",
    projects: [
      {
        name: "InfyU Trades",
        achievements: [
          "Handled full-cycle development using ReactJS, TDD, and Netlify deployment; delivered high-quality features and built scalable dashboards with microservices.",
          "Used Webpack for optimized builds and improved CSS responsiveness."
        ]
      },
      {
        name: "Traceability and Conveyer",
        achievements: [
          "Led development of report pages, QR scanner, dashboards, and MapBox integration, optimized for non-relational databases.",
          "Integrated UI, APIs, and backend with efficient state management and CI/CD DevOps practices to boost system performance."
        ]
      },
      {
        name: "Streamer",
        achievements: [
          "Built real-time app with i18n, socket.io, and Agora SDK.",
          "Boosted performance and SEO using functional programming and design patterns, improving user retention."
        ]
      }
    ]
  }
]

const education = {
  degree: "Bachelor of Technology",
  university: "Rajasthan Technical University",
  year: "2019"
}

const achievements = [
  "Received a token of appreciation for demonstrating agility in navigating challenges and delivering results efficiently.",
  "Qualified GATE-2020."
]

const EnhancedInnovativePortfolio = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [showMenu, setShowMenu] = useState(false)

  const handleScroll = useCallback(() => {
    const sections = ['home', 'skills', 'experience', 'education', 'achievements', 'contact']
    const currentSection = sections.find(section => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      }
      return false
    })
    if (currentSection) {
      setActiveSection(currentSection)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md bg-gray-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              RS
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            {['Home', 'Skills', 'Experience', 'Education', 'Achievements', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium hover:text-purple-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                  }`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {showMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-md">
            {['Home', 'Skills', 'Experience', 'Education', 'Achievements', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block py-2 px-4 text-sm font-medium hover:text-purple-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                  }`}
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50" />
          <div className="absolute inset-0 bg-[url('./circuit-board.svg')] opacity-10" />
        </div>
        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              <span style={{ color: 'beige' }}>Hello I&apos;m</span> Reena Saini
            </h1>
            <div className="text-xl md:text-2xl mb-8">
              <Typewriter
                words={['Frontend Developer', 'React Specialist', 'UI/UX Expert', 'TypeScript Developer']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <p className="text-lg mb-8 text-gray-300">
              Frontend Developer with 4.5+ years of experience specializing in building high-performance, resilient UIs using ReactJS, Next.js, and TypeScript. Proven track record in designing and implementing scalable, reusable front-end architectures that prioritize seamless user experiences and efficient component composition. Adept at driving engineering excellence through robust test automation strategies, comprehensive code reviews, and adherence to coding standards.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={handleConfetti}
              >
                Hire Me
              </a>
              <a
                href="https://drive.usercontent.google.com/uc?id=1znrzCkXReWKg0YCCQ9NvR1Y2X1CNkiKY&authuser=1&export=download"
                download
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse" style={{ filter: 'blur(20px)' }}></div>
              <Image
                src="/placeholder.jpg"
                alt="Reena Saini"
                width={320}
                height={320}
                className="rounded-full w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50" />
          <div className="absolute inset-0 bg-[url('./circuit-board.svg')] opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4 z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 hover:shadow-lg transition-all duration-300 flex flex-col items-center cursor-pointer"
                // onMouseEnter={() => setHoveredSkill(skill.name)}
                // onMouseLeave={() => setHoveredSkill(null)}
              >
                <Image src={skill.icon} alt={skill.name} width={48} height={48} className="mb-2" />
                <span className="font-semibold text-lg mb-2">{skill.name}</span>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `100%` }}
                  />
                </div>
                {/* <span className="text-sm text-gray-300 mt-1">{`${skill.level}%`}</span> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-900 via-black to-pink-900 opacity-50" />
          <div className="absolute inset-0 bg-[url('./circuit-board.svg')] opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4 z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  {exp.company}, {exp.location}
                </h3>
                <p className="text-purple-300 mb-4">{exp.role} | {exp.period}</p>
                {exp.projects.map((project, projectIndex) => (
                  <div key={project.name} className="mb-6 last:mb-0">
                    <h4 className="text-xl font-semibold mb-2 text-pink-400">{project.name}</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50" />
          <div className="absolute inset-0 bg-[url('./circuit-board.svg')] opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Education
          </h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              {education.degree}
            </h3>
            <p className="text-xl text-purple-300 mb-2">{education.university}</p>
            <p className="text-lg text-gray-300">Graduating {education.year}</p>
          </div>
        </div>
      </section>

      {/* <section id="achievements" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-900 via-black to-pink-900 opacity-50" />
          <div className="absolute inset-0 bg-[url('./circuit-board.svg')] opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Achievements
          </h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">{achievement}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50" />
          <div className="absolute inset-0 bg-[url('./circuit-board.svg')] opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Get In Touch
          </h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 shadow-lg">
            <div className="flex flex-col items-center space-y-6">
              <a
                href="mailto:saini.reena962@gmail.com"
                className="flex items-center space-x-3 text-lg hover:text-purple-400 transition-colors"
              >
                <Mail size={24} />
                <span>saini.reena962@gmail.com</span>
              </a>
              <a
                href="tel:+918432869047"
                className="flex items-center space-x-3 text-lg hover:text-purple-400 transition-colors"
              >
                <Phone size={24} />
                <span>+91 8432869047</span>
              </a>
              <div className="flex space-x-6 mt-8">
                <a
                  href="https://linkedin.com/in/reena-saini-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                >
                  <Linkedin size={32} />
                </a>
                <a
                  href="https://github.com/inspireena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                >
                  <Github size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black text-center py-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Reena Saini. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default EnhancedInnovativePortfolio