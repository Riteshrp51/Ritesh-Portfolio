import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 1.2 + i * 0.15, type: 'spring', stiffness: 300, damping: 15 }
    })
  };

  return (
    <section id="landing" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-12 md:pt-32 md:pb-20">
      {/* Left — Text Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-3/5 text-center md:text-left"
      >
        <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A3C] bg-[#161622] text-[#8B5CF6] font-medium text-sm mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8B5CF6]"></span>
          </span>
          Available for Opportunities
        </motion.div>

        <motion.h1 variants={textVariants} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
          Hi, I'm{' '}
          <span className="text-[#8B5CF6]">Ritesh Patil</span>
        </motion.h1>

        <motion.p variants={textVariants} className="text-lg sm:text-xl text-[#A78BFA] font-medium mb-6">
          Full Stack Web Developer | Computer Engineering Student
        </motion.p>

        <motion.p variants={textVariants} className="text-base text-[#A1A1AA] mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
          A passionate Computer Engineering student at D.Y. Patil College of Engineering, specializing in building performant, 
          user-centric web applications with the MERN stack. With hands-on experience in real-time industrial dashboards, 
          AI-powered platforms, and full-stack e-commerce solutions, I bring a strong foundation in DSA, system design, 
          and modern frontend frameworks. Currently seeking opportunities to apply my skills in high-impact engineering teams.
        </motion.p>

        <motion.div variants={textVariants} className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
          <a href="#about" className="btn-primary text-base px-8 py-3">
            Learn More About Me
          </a>
          <a href="#contact" className="btn-outline text-base px-8 py-3">
            Get In Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
          {[
            { label: 'GitHub', href: 'https://github.com/Riteshrp51', icon: (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
            )},
            { label: 'LinkedIn', href: 'https://linkedin.com/in/riteshpatil', icon: (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            )},
            { label: 'Email', href: 'mailto:riteshpatilrp5151@gmail.com', icon: (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            )}
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== 'Email' ? '_blank' : undefined}
              rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
              custom={i}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.15, y: -3 }}
              className="w-11 h-11 rounded-full border border-[#2A2A3C] bg-[#161622] flex items-center justify-center text-[#A1A1AA] hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right — Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-center"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80">
          {/* Rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[-12px] rounded-full border-2 border-dashed border-[#8B5CF6]/30"
          />
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] shadow-2xl shadow-[#8B5CF6]/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#161622] border-4 border-[#0B0B14]">
              <img
                src="/photo.jpg"
                alt="Ritesh Patil"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23161622%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-size%3D%2248%22%20font-family%3D%22Inter%2Csans-serif%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%20fill%3D%22%238B5CF6%22%3ERP%3C%2Ftext%3E%3C%2Fsvg%3E";
                }}
              />
            </div>
          </div>
          {/* Floating accent dots */}
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40" />
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-[#A78BFA]/20 border border-[#A78BFA]/40" />
        </div>
      </motion.div>
    </section>
  );
}
