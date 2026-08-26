import { motion } from 'framer-motion';
import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'riteshpatilrp5151@gmail.com',
    href: 'mailto:riteshpatilrp5151@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91-9371245151',
    href: 'tel:+919371245151',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Kolhapur, Maharashtra, India',
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/riteshpatil',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Riteshrp51',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => setFocused({ ...focused, [field]: true });
  const handleBlur = (field) => {
    if (!formData[field]) setFocused({ ...focused, [field]: false });
  };

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', delay: 0 },
    { name: 'email', label: 'Email Address', type: 'email', delay: 0.1 },
    { name: 'subject', label: 'Subject', type: 'text', delay: 0.2 },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-[#8B5CF6]">Let's Connect</span>
          </h2>
          <p className="text-[#A1A1AA] text-base max-w-2xl mx-auto">
            I'm currently seeking opportunities to apply my skills. Whether you have a question or want to collaborate — let's talk!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass-card p-7 md:p-8"
          >
            <h3 className="text-lg font-bold text-[#F5F5F7] mb-6">Send Me a Message</h3>

            <form
              action={`mailto:riteshpatilrp5151@gmail.com`}
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              {fields.map((field) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + field.delay, duration: 0.4 }}
                  className="relative field-underline"
                >
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${focused[field.name] || formData[field.name]
                        ? 'text-xs text-[#8B5CF6] -top-5'
                        : 'text-sm text-[#A1A1AA] top-3'
                      }`}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(field.name)}
                    onBlur={() => handleBlur(field.name)}
                    className="w-full bg-transparent border-b border-[#2A2A3C] py-3 text-[#F5F5F7] text-sm outline-none focus:border-[#8B5CF6] transition-colors"
                    autoComplete="off"
                  />
                </motion.div>
              ))}

              {/* Message textarea */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="relative field-underline"
              >
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${focused.message || formData.message
                      ? 'text-xs text-[#8B5CF6] -top-5'
                      : 'text-sm text-[#A1A1AA] top-3'
                    }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  rows={4}
                  className="w-full bg-transparent border-b border-[#2A2A3C] py-3 text-[#F5F5F7] text-sm outline-none focus:border-[#8B5CF6] transition-colors resize-none"
                />
              </motion.div>

              {/* Send button with shimmer */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full text-base py-3 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                {/* Shimmer sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.button>
            </form>
          </motion.div>

          {/* Right — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass-card p-7 md:p-8 bg-[#0B0B14] border-[#2A2A3C]"
          >
            <h3 className="text-lg font-bold text-[#F5F5F7] mb-6">Contact Information</h3>

            <div className="space-y-5 mb-8">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.15, duration: 0.4 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-[#161622] transition-all group-hover:translate-x-2 duration-300"
                    >
                      <span className="text-[#A1A1AA] group-hover:text-[#8B5CF6] transition-colors flex-shrink-0">{info.icon}</span>
                      <div>
                        <p className="text-xs text-[#A1A1AA] uppercase tracking-wider font-medium">{info.label}</p>
                        <p className="text-sm text-[#F5F5F7] font-medium">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-[#161622] transition-all group-hover:translate-x-2 duration-300">
                      <span className="text-[#A1A1AA] group-hover:text-[#8B5CF6] transition-colors flex-shrink-0">{info.icon}</span>
                      <div>
                        <p className="text-xs text-[#A1A1AA] uppercase tracking-wider font-medium">{info.label}</p>
                        <p className="text-sm text-[#F5F5F7] font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-[#A1A1AA] uppercase tracking-wider font-medium mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + idx * 0.15, type: 'spring', stiffness: 300, damping: 15 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="w-10 h-10 rounded-full border border-[#2A2A3C] flex items-center justify-center text-[#A1A1AA] hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
