import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Interview Mocker',
    tech: ['ReactJS', 'Next.js', 'MySQL', 'Drizzle ORM', 'Clerk'],
    date: 'Feb 2025 – May 2025',
    type: 'Full-Stack AI Platform',
    demo: 'https://ai-interview-mocker-ppkv.vercel.app/',
    github: 'https://github.com/Riteshrp51/AI-Interview-Mocker',
    description: 'A comprehensive AI-powered interview preparation platform integrating audio/video mock interviews, coding assessments, and ATS resume analysis with adaptive questioning.',
    outcomes: [
      'Built a full-stack platform with React, Next.js, MySQL, and Clerk authentication.',
      'Engineered dynamic analytics for role-specific adaptive questioning.',
      'Implemented ATS resume analysis and detailed skill gap insights.',
      'Delivered live audio/video interview simulation with adaptive flows.',
    ],
  },
  {
    title: 'Greencart',
    tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Stripe', 'Cloudinary'],
    date: 'July 2025 – Nov 2025',
    type: 'Full-Stack E-Commerce',
    demo: 'https://greencart-frontend-jet.vercel.app/',
    github: 'https://github.com/Riteshrp51/GroceryDelivery',
    description: 'A production-grade e-commerce web application featuring product browsing, cart management, order processing, and dual payment integration.',
    outcomes: [
      'Developed end-to-end e-commerce with React frontend and Node/Express backend.',
      'Integrated Stripe for secure payments alongside cash-on-delivery.',
      'Used Cloudinary for optimized product image management.',
      'Deployed on Vercel for production-grade accessibility and performance.',
    ],
  },
  {
    title: 'DYPCET Transit',
    tech: ['Python', 'Flask', 'MySQL', 'Jinja2', 'CSV/JSON'],
    date: 'Jan 2026 – May 2026',
    type: 'Full-Stack Campus Platform',
    github: 'https://github.com/Riteshrp51/DYP-Transit',
    description: 'A campus transit management platform to automate daily bus scheduling, streamline student bookings, and centralize admin operations.',
    outcomes: [
      'Automated daily bus scheduling and streamlined student bookings.',
      'Engineered centralized admin dashboard for tracking bus capacities.',
      'Implemented notification engine for instant schedule broadcasts.',
    ],
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          <span className="text-[#8B5CF6]">Projects</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(139, 92, 246, 0.15)' }}
              className="glass-card flex flex-col overflow-hidden group"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A78BFA] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 px-2.5 py-1 rounded-full">
                    {project.type}
                  </span>
                  <span className="text-xs text-[#A1A1AA] font-medium">{project.date}</span>
                </div>

                <h3 className="text-xl font-bold text-[#F5F5F7] mb-2 group-hover:text-[#A78BFA] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B5CF6] hover:text-[#A78BFA] transition-colors group/link"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="group-hover/link:underline">Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A1A1AA] hover:text-[#A78BFA] transition-colors group/link"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span className="group-hover/link:underline">GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Outcomes */}
              <div className="px-6 pb-4 flex-grow">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA] mb-3">Key Outcomes</h4>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                      className="flex items-start gap-2.5 text-sm text-[#A1A1AA] leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] text-[10px] font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span>{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech tags footer */}
              <div className="px-6 py-4 border-t border-[#2A2A3C] bg-[#0B0B14]/50 flex flex-wrap gap-1.5">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.06, type: 'spring', stiffness: 400, damping: 15 }}
                    className="text-[11px] font-medium text-[#A78BFA] bg-[#8B5CF6]/10 border border-[#8B5CF6]/15 px-2.5 py-0.5 rounded-full hover:bg-[#8B5CF6]/20 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
