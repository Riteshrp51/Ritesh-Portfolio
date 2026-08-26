import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'Alpha – Data Structures & Algorithms with Java',
    provider: 'Apna College',
    file: 'https://drive.google.com/file/d/1_wyxQHha2vmaHj5uJOoK-sDu5iEZw962/view',
    description: 'Comprehensive course covering core data structures, algorithms, and problem-solving patterns in Java.',
    color: '#8B5CF6',
  },
  {
    name: 'Full Stack Development (MERN Stack)',
    provider: 'Apna College',
    year: '2024',
    file: 'https://drive.google.com/file/d/1lCGONo5Lw9GFAfvJCNGX0cfaBa-d1Ox1/view',
    description: 'End-to-end web development course covering React, Node.js, Express.js, and MongoDB.',
    color: '#A78BFA',
  },
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotate: -1.5 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="certifications" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          <span className="text-[#8B5CF6]">Certifications</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotate: 1,
                boxShadow: `0 20px 50px ${cert.color}15`,
              }}
              className="glass-card p-6 relative overflow-hidden group cursor-pointer"
            >
              {/* Background hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 50%, ${cert.color}08, transparent 70%)` }}
              />

              <div className="relative z-10">
                {/* Provider badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border"
                    style={{
                      color: cert.color,
                      borderColor: `${cert.color}30`,
                      backgroundColor: `${cert.color}10`,
                    }}
                  >
                    {cert.provider}
                  </span>
                  {cert.year && (
                    <span className="text-xs text-[#A1A1AA] font-medium">{cert.year}</span>
                  )}
                </div>

                {/* Certificate icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 border border-[#2A2A3C] bg-[#0B0B14]">
                  <svg className="w-7 h-7" style={{ color: cert.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-[#F5F5F7] mb-2">{cert.name}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-5">{cert.description}</p>

                {/* View Certificate Link */}
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all group/link"
                  style={{ color: cert.color }}
                >
                  <span className="group-hover/link:underline">View Certificate</span>
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
