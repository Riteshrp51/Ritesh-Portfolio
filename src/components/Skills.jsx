import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Javascript', level: 80 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    title: 'Web Development',
    icon: '🌐',
    skills: [
      { name: 'ReactJS', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Express.js', level: 80 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    title: 'Core CS',
    icon: '🧮',
    skills: [
      { name: 'DSA', level: 85 },
      { name: 'OOP', level: 80 },
      { name: 'DBMS', level: 80 },
      { name: 'Operating Systems', level: 75 },
      { name: 'Computer Networks', level: 75 },
    ],
  },
  {
    title: 'Tools & Testing',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Vercel', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'Jest', level: 70 },
      { name: 'Render', level: 75 },
    ],
  },
];

function AnimatedNumber({ value, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      start = Math.round(eased * value);
      setCount(start);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span>{count}%</span>;
}

function SkillCard({ category, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(139, 92, 246, 0.1)' }}
      className="glass-card p-6 group"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl group-hover:animate-spin" style={{ animationDuration: '2s' }}>{category.icon}</span>
        <h3 className="text-lg font-bold text-[#F5F5F7]">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-[#A1A1AA]">{skill.name}</span>
              <span className="text-xs font-bold text-[#8B5CF6]">
                <AnimatedNumber value={skill.level} inView={isInView} />
              </span>
            </div>
            <div className="w-full h-2 bg-[#0B0B14] rounded-full overflow-hidden border border-[#2A2A3C]">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          <span className="text-[#8B5CF6]">Technical Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
