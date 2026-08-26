import { motion } from 'framer-motion';

export default function Experience() {
  const bulletVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.4 + i * 0.15, duration: 0.4, ease: 'easeOut' }
    })
  };

  const techTags = ['React', 'Tailwind CSS', 'JavaScript'];

  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          <span className="text-[#8B5CF6]">Work Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(139, 92, 246, 0.12)' }}
            className="glass-card relative overflow-hidden group"
          >
            {/* Left accent bar — curtain-opening animation */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="absolute top-0 left-0 w-1.5 bg-gradient-to-b from-[#8B5CF6] to-[#A78BFA]"
            />

            <div className="p-8 md:p-10 pl-10 md:pl-12">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-[#F5F5F7] mb-1">Frontend Developer</h3>
                  <p className="text-base text-[#8B5CF6] font-semibold group-hover:animate-pulse-glow inline-block">
                    Zanwar Group of Industries
                  </p>
                  <span className="ml-3 px-2 py-0.5 text-xs rounded-full bg-[#8B5CF6]/10 text-[#A78BFA] border border-[#8B5CF6]/20 font-medium">
                    Team Project
                  </span>
                </div>
                <div className="mt-3 md:mt-0 text-left md:text-right">
                  <span className="inline-block px-3 py-1 bg-[#161622] border border-[#2A2A3C] text-[#A1A1AA] rounded-full text-sm font-medium">
                    April 2025 – Present
                  </span>
                  <p className="text-[#A1A1AA] text-sm mt-1.5">Kolhapur, India</p>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-semibold bg-[#8B5CF6]/10 text-[#A78BFA] border border-[#8B5CF6]/20 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Responsibilities */}
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-3">Key Responsibilities</h4>
                <ul className="space-y-2.5">
                  {[
                    'Developed a web-based industrial dashboard using React and Tailwind CSS to monitor and analyze real-time sensor parameters including compactibility, moisture, and permeability.',
                    'Designed and built responsive, cross-device UI components with a focus on clean, intuitive data visualization for complex industrial metrics.',
                    'Integrated real-time sensor data feeds, enabling continuous tracking and instant visibility into production parameters.',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start text-sm text-[#A1A1AA] leading-relaxed"
                    >
                      <span className="text-[#8B5CF6] mr-2.5 mt-1 flex-shrink-0">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-3">Key Achievements</h4>
                <ul className="space-y-2.5">
                  {[
                    'Improved operational visibility by delivering a centralized monitoring dashboard, reducing manual data-checking effort.',
                    'Enabled efficient interpretation of complex sensor data through intuitive UI/UX design, praised by the project team.',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i + 3}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start text-sm text-[#A1A1AA] leading-relaxed"
                    >
                      <span className="text-[#A78BFA] mr-2.5 mt-1 flex-shrink-0">★</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
