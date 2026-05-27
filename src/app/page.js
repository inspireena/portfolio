'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import { Github, Linkedin, Mail, Phone, ChevronDown, Menu, X } from 'lucide-react'
import confetti from 'canvas-confetti'

const skills = [
  { name: "JavaScript", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML5", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SASS", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },

  { name: "React", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Redux", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Context API", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "React Hooks", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", level: 90, icon: "./tailwind-icon.svg" },
  { name: "shadcn/ui", level: 85, icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/shadcnui.svg" },
  { name: "Storybook", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" },
  { name: "Material UI", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  { name: "Bootstrap", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },

  { name: "Node.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "REST APIs", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "GraphQL", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Apollo Client", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apollographql/apollographql-original.svg" },
  { name: "JWT", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
  { name: "WebSockets", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
  { name: "Socket.IO", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
  { name: "MongoDB", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

  { name: "TDD", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-original.svg" },
  { name: "Jest", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
  { name: "React Testing Library", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Playwright", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },

  { name: "Git", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "CI/CD", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
  { name: "AWS", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure DevOps", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Webpack", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
  { name: "Turborepo", level: 80, icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/turborepo.svg" },
  { name: "PNPM", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },

  { name: "JIRA", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { name: "Figma", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
]

const experiences = [
  {
    company: "Infocusp Innovations",
    location: "Pune",
    role: "Software Engineer",
    period: "Dec 2024 – Present",
    projects: [
      {
        name: "CuspMoney – Fintech Web Platform (Next.js, TypeScript, Turborepo, Tailwind CSS, Radix UI, Storybook, Playwright)",
        achievements: [
          "Co-architected a Turborepo monorepo with pnpm workspaces hosting two isolated apps (main Next.js web app and Storybook) with shared ESLint, Tailwind, and TypeScript config packages, reducing repeated config setup across teams and enabling independent deployments.",
          "Contributed to a shared component library using React, Radix UI, and Tailwind CSS with Storybook documentation, giving the team an isolated development environment and consistent design system across the product.",
          "Established an E2E testing baseline with Playwright, covering critical user flows and achieving ~30% coverage from scratch."
        ]
      },
      {
        name: "SMASH Music – Artist Collaboration Platform (Next.js 15, React 19, TypeScript, GraphQL, Apollo Client, AWS Cognito, S3)",
        achievements: [
          "Consolidated two separate product codebases into a single Next.js 15 codebase to support a planned product merge, isolating deployments via build-mode flags, separate AWS Cognito user pools, and route-level access control via a custom AppGate component.",
          "Eliminated redundant re-renders on static playback controls using a split-context React architecture, separating high-frequency progress updates from stable playback state.",
          "Built a custom Network Priority Manager with a request queue that reserved browser connection slots for audio and cancelled lower-priority requests via AbortController under high-concurrency conditions.",
          "Reduced image load times by ~40% using a three-layer cache (in-memory LRU, Cache Storage API, IndexedDB) backed by a Service Worker for offline-first media access.",
          "Wrote two Python CLI scripts for release validation: one parsing GraphQL queries against introspection schema to catch unknown fields, and one checking i18n key consistency across EN/ES/FR locale files."
        ]
      },
      {
        name: "Other Contributions",
        achievements: [
          "Built a reusable configurable data table component adopted across multiple internal product views.",
          "Contributed to a custom MCP server enabling natural language task creation via Google Gemini and MongoDB."
        ]
      }
    ]
  },
  {
    company: "Zycus",
    location: "Pune",
    role: "Software Engineer",
    period: "July 2023 – December 2024",
    projects: [
      {
        name: "LytHouse – Enterprise Analytics Platform (React.js, Material UI, REST APIs, Redux)",
        achievements: [
          "Engineered UI modules for the Metrics Module within a team of 8–10 engineers, reducing bounce rate by ~15% through component-level caching and performance optimization.",
          "Reduced module load time by ~25% by refactoring the Initiatives Module using functional programming patterns and design principles.",
          "Contributed to RBAC and route whitelisting across 10+ protected routes, improving application security across the platform.",
          "Contributed to goal tracking features for the Goals Module using Redux state management and REST API integration across 3+ workflow types."
        ]
      }
    ]
  },
  {
    company: "Infyu Labs",
    location: "Gandhinagar",
    role: "Frontend Developer",
    period: "April 2021 – July 2023",
    projects: [
      {
        name: "InfyU Trades (React.js, Node.js, Jest, Netlify, CI/CD)",
        achievements: [
          "Developed role-based seller and buyer dashboards for a B2B bulk vegetable trading platform supporting price negotiation workflows between wholesale buyers and sellers.",
          "Modified and extended Node.js REST APIs to support trading features, handling both frontend and backend responsibilities within a 4-5 person startup team."
        ]
      },
      {
        name: "Traceability & Conveyor (React.js, MapBox SDK)",
        achievements: [
          "Built a real-time vehicle tracking interface using MapBox SDK to monitor produce logistics across warehouse operations.",
          "Developed a conveyor belt monitoring dashboard displaying live quality scans (fresh vs. ruined percentage per batch) for a hardware-integrated detection system on warehouse conveyor belts."
        ]
      },
      {
        name: "Streamer",
        achievements: [
          "Built a one-to-many live game streaming app using Agora SDK and Socket.IO for real-time viewer interactions."
        ]
      }
    ]
  }
]

const education = {
  degree: "Bachelor of Technology",
  university: "Govt Mahila Engineering College (RTU)",
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
                words={['Frontend Engineer', 'React Specialist', 'Next.js Developer', 'TypeScript Developer', 'Full Stack Engineer']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <p className="text-lg mb-8 text-gray-300">
              Frontend Engineer with 5+ years of experience building scalable, performant web applications using React.js, Next.js, and TypeScript. Skilled in performance optimization, component architecture, and release automation with backend exposure across Node.js, GraphQL, and AWS. Open to Frontend and Fullstack roles.
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
                href="https://drive.usercontent.google.com/uc?id=1kWMKn2aY1ctolOAnFwnbt0YCERfdW5R_&authuser=1&export=download"
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
            <p className="text-lg text-gray-300">Graduated {education.year}</p>
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