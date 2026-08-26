import { motion } from 'framer-motion';

const education = [
  {
    institution: 'D Y Patil College of Engineering and Technology',
    degree: 'Bachelor of Technology in Computer Engineering',
    location: 'Kolhapur, India',
    duration: 'Aug 2023 – May 2027 (Expected)',
    mode: 'Full-time',
    grade: 'CGPA: 8.98',
    highlights: [
      'Specialization in Computer Engineering with focus on software development and algorithms.',
      'Active participant in hackathons and coding competitions at national level.',
      'Coursework includes DSA, OOP, DBMS, Operating Systems, and Computer Networks.',
    ],
    accentColor: '#8B5CF6',
  },
  {
    institution: 'Shri. Hanumantrao Chate Jr. College of Science',
    degree: 'Higher Secondary Certificate (HSC)',
    location: 'Kolhapur, Maharashtra',
    duration: 'Completed Feb 2023',
    mode: 'Full-time',
    grade: 'MHT-CET: 91.89% | HSC: 78%',
    highlights: [
      'Science stream with strong performance in mathematics and chemistry.',
      'MHT-CET score in the 91st percentile, demonstrating strong analytical and problem-solving skills.',
      'Built foundational knowledge in programming and logical reasoning.',
    ],
    accentColor: '#A78BFA',
  },
  {
    institution: 'Sou Ambubai Patil English Medium School',
    degree: 'Secondary School Certificate (SSC)',
    location: 'Kolhapur, Maharashtra',
    duration: 'Completed March 2021',
    mode: 'Full-time',
    grade: 'Percentage: 89%',
    highlights: [
      'Strong academic foundation with excellent performance across all subjects.',
      'Developed discipline and time management skills through structured academics.',
      'Early exposure to computers and technology, sparking interest in software.',
    ],
    accentColor: '#C4B5FD',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          <span className="text-[#8B5CF6]">Education</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: idx === 0 ? -40 : 40,
                rotate: idx === 0 ? -2 : 2,
              }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.15 }}
              whileHover={{ y: -6, boxShadow: `0 16px 40px ${edu.accentColor}15` }}
              className="glass-card p-7 md:p-8 relative overflow-hidden group"
            >
              {/* Hover border trace */}
              <div
                className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ borderColor: edu.accentColor }}
              />

              {/* Left accent */}
              <div
                className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl"
                style={{ background: `linear-gradient(to bottom, ${edu.accentColor}, ${edu.accentColor}80)` }}
              />

              <div className="pl-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F5F7] mb-1 flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 group-hover:animate-bounce" style={{ color: edu.accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      {edu.institution}
                    </h3>
                    <p className="font-medium text-sm" style={{ color: edu.accentColor }}>{edu.degree}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-left md:text-right flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-[#161622] border border-[#2A2A3C] text-[#A1A1AA] rounded-full text-xs font-medium">
                      {edu.duration}
                    </span>
                    <p className="text-[#A1A1AA] text-xs mt-1">{edu.location} · {edu.mode}</p>
                  </div>
                </div>

                <p className="text-base font-semibold text-[#F5F5F7] mb-4">{edu.grade}</p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] mb-2">Key Highlights</h4>
                  <ul className="space-y-1.5">
                    {edu.highlights.map((hl, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                        className="flex items-start text-sm text-[#A1A1AA] leading-relaxed"
                      >
                        <span className="mr-2 mt-1 flex-shrink-0" style={{ color: edu.accentColor }}>▹</span>
                        {hl}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
