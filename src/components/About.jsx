import { motion } from 'framer-motion';

const viewLinks = [
  { label: 'Work Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const flipVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: (i) => ({
      opacity: 1,
      rotateY: 0,
      transition: { delay: 0.3 + i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.8 + i * 0.1, duration: 0.4, ease: 'easeOut' }
    })
  };

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          <span className="text-[#8B5CF6]">About Me</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left — Photo */}
          <motion.div variants={slideLeft} className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-[#8B5CF6]/10 border border-[#2A2A3C]">
              <img
                src="/ritesh.jpeg"
                alt="Ritesh Patil"
                className="w-full h-full object-cover rotate-270"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23161622%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-size%3D%2248%22%20font-family%3D%22Inter%2Csans-serif%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%20fill%3D%22%238B5CF6%22%3ERP%3C%2Ftext%3E%3C%2Fsvg%3E";
                }}
              />
              {/* Shadow bloom effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14]/60 to-transparent" />
            </div>
          </motion.div>

          {/* Right — Summary */}
          <motion.div variants={slideUp}>
            <p className="text-[#A1A1AA] leading-relaxed text-base mb-8">
              I'm Ritesh Patil, a third-year Computer Engineering student at D.Y. Patil College of Engineering and Technology, 
              Kolhapur, with a CGPA of 8.98. I specialize in full-stack web development using React, Next.js, Node.js, and Express.js, 
              and have a strong foundation in Data Structures &amp; Algorithms with 200+ problems solved on LeetCode. 
              My experience ranges from building AI-powered interview platforms and e-commerce applications to developing 
              real-time industrial dashboards at Zanwar Group of Industries. I thrive in collaborative environments, 
              having placed in the Top 15 at WCE National Hackathon and Top 52 in Codeshetra. 
              I'm driven by the desire to build impactful software that solves real-world problems.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" style={{ perspective: '1000px' }}>
              <motion.div
                custom={0}
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card p-5 border-l-4 border-l-[#8B5CF6]"
              >
                <h4 className="text-sm font-bold text-[#8B5CF6] uppercase tracking-wider mb-2">Mission</h4>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  To leverage full-stack development skills and algorithmic thinking to build scalable, 
                  user-centric applications that create measurable real-world impact.
                </p>
              </motion.div>

              <motion.div
                custom={1}
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card p-5 border-l-4 border-l-[#A78BFA]"
              >
                <h4 className="text-sm font-bold text-[#A78BFA] uppercase tracking-wider mb-2">Vision</h4>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  To grow into a well-rounded software engineer who contributes to innovative products 
                  at the intersection of technology, design, and human experience.
                </p>
              </motion.div>
            </div>

            {/* View My Work Buttons */}
            <div className="flex flex-wrap gap-2">
              {viewLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  custom={i}
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="px-4 py-2 text-xs font-medium rounded-full border border-[#2A2A3C] text-[#A1A1AA] hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all group flex items-center gap-1.5"
                >
                  {link.label}
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
