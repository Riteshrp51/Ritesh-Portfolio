import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { label: 'Years Experience', value: 1, suffix: '+' },
  { label: 'Certifications', value: 2, suffix: '+' },
  { label: 'Projects', value: 3, suffix: '+' },
  { label: 'Awards', value: 4, suffix: '' },
];

const achievements = [
  {
    title: 'Top 15 – WCE National Hackathon 2026',
    category: 'Professional',
    year: '2026',
    description: 'Ranked among the top 15 teams out of 1,500+ teams (Top 1%). Built GraphMind, a graph-based memory system for AI agents.',
    icon: '🏆',
  },
  {
    title: 'Top 52 – Codeshetra 2026',
    category: 'Professional',
    year: '2026',
    description: 'Ranked in Top 52 in Maharashtra in the state-level competitive coding competition Codeshetra.',
    icon: '🥇',
  },
  {
    title: 'Top 120 – Project Morphosis 2026',
    category: 'Professional',
    year: '2026',
    description: 'Ranked among the Top 120 teams nationwide in the Project Morphosis project-building competition.',
    icon: '🚀',
  },
  {
    title: '200+ LeetCode Problems Solved',
    category: 'Academic',
    year: '2024–Present',
    description: 'Consistently strengthened algorithmic thinking and problem-solving skills through 200+ problems across data structures and algorithms.',
    icon: '💡',
  },
];

function AnimatedStat({ value, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span>{count}{suffix}</span>;
}

export default function Achievements() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-[#8B5CF6]">Achievements & Recognition</span>
          </h2>
          <p className="text-[#A1A1AA] text-base max-w-2xl mx-auto">
            A track record of excellence in competitive coding, hackathons, and continuous learning.
          </p>
        </motion.div>

        {/* Stat Counters */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-5 text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-[#8B5CF6] mb-1">
                <AnimatedStat value={stat.value} suffix={stat.suffix} inView={statsInView} />
              </p>
              <p className="text-xs font-medium text-[#A1A1AA] uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(139, 92, 246, 0.12)' }}
              className="glass-card p-6 relative overflow-hidden group"
            >
              {/* Hover gold border trace */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#8B5CF6]/0 group-hover:border-[#8B5CF6]/40 transition-all duration-500 pointer-events-none" />

              <div className="flex items-start gap-4">
                {/* Trophy / icon with pop + glow */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1, type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-2xl flex-shrink-0 animate-pulse-glow"
                  style={{ animationDelay: `${idx * 0.3}s` }}
                >
                  {ach.icon}
                </motion.div>

                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
                      ach.category === 'Professional'
                        ? 'text-[#8B5CF6] border-[#8B5CF6]/20 bg-[#8B5CF6]/10'
                        : 'text-[#A78BFA] border-[#A78BFA]/20 bg-[#A78BFA]/10'
                    } group-hover:shadow-lg group-hover:shadow-[#8B5CF6]/10 transition-shadow`}>
                      {ach.category}
                    </span>
                    <span className="text-xs text-[#A1A1AA]">{ach.year}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#F5F5F7] mb-1.5">{ach.title}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">{ach.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
