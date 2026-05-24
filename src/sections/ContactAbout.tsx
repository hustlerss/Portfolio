'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Mail, Github, Linkedin, User, Briefcase, GraduationCap, Award, Send } from 'lucide-react'

// Tabs for About me card
type TabType = 'profile' | 'experience' | 'stats'

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabType>('profile')

  const stats = [
    { label: 'Completed Projects', value: '8+', icon: <Award className="w-5 h-5 text-cyan-400" /> },
    { label: 'Technologies Mastered', value: '20+', icon: <Briefcase className="w-5 h-5 text-purple-400" /> },
    { label: 'GitHub Contributions', value: '200+', icon: <Github className="w-5 h-5 text-pink-400" /> },
    { label: 'Years Experience', value: '1.5+', icon: <User className="w-5 h-5 text-indigo-400" /> },
  ]

  const timeline = [
    {
      role: 'Intern Software Engineer',
      company: 'ScaleFull Technologies',
      duration: 'Jan 2026 - Present',
      desc: 'Associated with the core Development team. Collaborating to design, build, and optimize production-ready web products and scalable backend services.',
      type: 'work'
    },
    {
      role: 'Trainee',
      company: 'Wisdom Sprouts | Java By Kiran | Cyber Success',
      duration: '2026 - Present',
      desc: 'Selected across 3 reputed institutes for advanced technical training. Strengthening Full Stack Development, Java, Aptitude, and Interview Placement Preparation.',
      type: 'education'
    },
    {
      role: 'Junior Web Developer',
      company: 'Kanak Digifex NextGen Pvt. Ltd.',
      duration: 'Feb 2025 - Mar 2025',
      desc: 'Built server-side rendered web applications using Node.js, Express.js, EJS, and MySQL. Developed backend controller logics, database queries, and production-ready features.',
      type: 'work'
    },
    {
      role: 'Web Development Intern',
      company: 'Cloud Infotech',
      duration: 'Jan 2025 - Feb 2025',
      desc: 'Developed responsive user interfaces using HTML, CSS, JavaScript, and React.js. Integrated REST APIs into MERN-stack applications, and debugged client-side rendering flows.',
      type: 'work'
    },
    {
      role: 'B.E. Computer Engineering',
      company: 'Savitribai Phule Pune University (SPPU)',
      duration: '2022 - 2026',
      desc: 'Achieved an outstanding CGPA of 8.95. Strong academic focus on Full Stack Development, Software Engineering, and Problem Solving. (10th Board: 94.8% | 12th Board: 83%)',
      type: 'education'
    }
  ]

  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#030014]">
      {/* Glow Blob */}
      <div className="glow-orb w-[250px] h-[250px] bg-purple-600/20 top-1/4 right-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-syne text-white tracking-wide">
            My <span className="text-gradient-neon">Journey</span>
          </h2>
          <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Premium Tabbed Interface Card */}
        <div className="glass-card border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {/* Tab Selector bar */}
          <div className="flex border-b border-white/5 bg-slate-950/40 p-2 gap-2">
            {(['profile', 'experience', 'stats'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3.5 rounded-2xl text-xs md:text-sm font-bold font-syne uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/30 text-cyan-400 shadow-inner'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab === 'profile' && <User className="w-4 h-4" />}
                {tab === 'experience' && <Briefcase className="w-4 h-4" />}
                {tab === 'stats' && <Award className="w-4 h-4" />}
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="p-8 md:p-12 min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              {activeTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 text-left w-full"
                >
                  {/* Location pill */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-outfit">
                    <span className="text-base">📍</span>
                    <span>Pune, Maharashtra, India</span>
                  </div>

                  <h3 className="text-2xl font-bold font-syne text-white leading-snug">
                    Building Modern Web Products <br className="hidden md:block" />
                    <span className="text-gradient-neon">with Purpose & Passion</span>
                  </h3>

                  <p className="text-slate-300 font-light leading-relaxed font-outfit">
                    I&apos;m a passionate Full Stack Developer from Pune with a strong focus on building modern, responsive, and scalable web applications. I love crafting premium UI/UX experiences powered by clean, efficient backend systems — turning real-world problems into polished digital products.
                  </p>
                  <p className="text-slate-300 font-light leading-relaxed font-outfit">
                    My goal is to grow into a highly skilled Software Engineer, work on impactful products at top tech companies, and continuously sharpen my development and problem-solving skills to make a meaningful mark in the tech industry.
                  </p>

                  {/* Values trio pills */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {['🚀 Full Stack Development', '🎨 Premium UI/UX', '⚡ Scalable Systems'].map((tag) => (
                      <span key={tag} className="px-4 py-1.5 text-xs font-semibold font-outfit text-slate-300 bg-white/5 border border-white/10 hover:border-cyan-400/30 rounded-full transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-l-2 border-cyan-400 pl-4 text-xs italic text-slate-400 font-outfit">
                    &quot;Code with purpose. Build with passion. Deliver with precision.&quot;
                  </div>
                </motion.div>
              )}

              {activeTab === 'experience' && (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full space-y-8 text-left"
                >
                  {timeline.map((item, idx) => (
                    <div key={idx} className="relative pl-8 border-l border-white/10 group pb-2">
                      {/* Timeline dot */}
                      <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-all shadow-[0_0_8px_#00d4ff]" />
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1 mb-2">
                        <div>
                          <h4 className="text-lg font-bold font-syne text-white flex items-center gap-2">
                            {item.role}
                            <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-white/5 border border-white/10 text-slate-400 font-outfit">
                              {item.type === 'work' ? 'Internship' : 'Education'}
                            </span>
                          </h4>
                          <p className="text-sm font-medium text-cyan-400 font-outfit">{item.company}</p>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 font-outfit">{item.duration}</span>
                      </div>
                      <p className="text-sm text-slate-400 font-light leading-relaxed font-outfit">{item.desc}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'stats' && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/15 flex flex-col items-center justify-center text-center shadow-inner hover:border-cyan-400/40 transition-colors"
                    >
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 mb-4 shadow-md">
                        {stat.icon}
                      </div>
                      <p className="text-3xl font-extrabold text-white font-syne mb-1 tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-400 font-medium font-outfit uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [activeInput, setActiveInput] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#030014]">
      {/* Background neon blob */}
      <div className="glow-orb w-[300px] h-[300px] bg-cyan-500/15 bottom-0 left-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-syne text-white tracking-wide">
            Get In <span className="text-gradient-neon">Touch</span>
          </h2>
          <div className="w-16 h-[2px] bg-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-2xl font-bold font-syne text-white mb-2">Let&apos;s build something epic!</h3>
                <p className="text-slate-400 font-light text-sm font-outfit">
                  Fill in the form or contact me directly via email or LinkedIn.
                </p>
              </div>

              {/* Direct Info Pills */}
              <div className="space-y-6">
                <a
                  href="mailto:rohankirdak8756@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/5 transition-all group"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:border-cyan-400/50 text-cyan-400 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-medium font-outfit uppercase">Email Me</p>
                    <p className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                      rohankirdak8756@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rohan-kirdak-240810254"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/5 transition-all group"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:border-cyan-400/50 text-cyan-400 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-medium font-outfit uppercase">Connect</p>
                    <p className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                      Rohan Kirdak
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social handles pill */}
            <div className="mt-8 border-t border-white/5 pt-6 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-outfit">Follow my builds</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/hustlerss"
                  target="_blank"
                  className="p-2.5 bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 rounded-xl transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rohan-kirdak-240810254"
                  target="_blank"
                  className="p-2.5 bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 rounded-xl transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setActiveInput('name')}
                  onBlur={() => setActiveInput(null)}
                  placeholder="Your Name"
                  className={`w-full px-5 py-4 bg-slate-950/50 border rounded-2xl focus:outline-none transition-all duration-300 font-outfit text-white placeholder-slate-500 ${
                    activeInput === 'name' 
                      ? 'border-cyan-400/80 shadow-[0_0_15px_rgba(0,212,255,0.15)] bg-slate-950/80' 
                      : 'border-white/10'
                  }`}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setActiveInput('email')}
                  onBlur={() => setActiveInput(null)}
                  placeholder="Your Email Address"
                  className={`w-full px-5 py-4 bg-slate-950/50 border rounded-2xl focus:outline-none transition-all duration-300 font-outfit text-white placeholder-slate-500 ${
                    activeInput === 'email' 
                      ? 'border-cyan-400/80 shadow-[0_0_15px_rgba(0,212,255,0.15)] bg-slate-950/80' 
                      : 'border-white/10'
                  }`}
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setActiveInput('message')}
                  onBlur={() => setActiveInput(null)}
                  placeholder="Tell me about your project..."
                  className={`w-full px-5 py-4 bg-slate-950/50 border rounded-2xl focus:outline-none transition-all duration-300 font-outfit text-white placeholder-slate-500 ${
                    activeInput === 'message' 
                      ? 'border-cyan-400/80 shadow-[0_0_15px_rgba(0,212,255,0.15)] bg-slate-950/80' 
                      : 'border-white/10'
                  }`}
                />
              </div>

              {/* Animated Submit Trigger */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitted}
                className={`w-full py-4 rounded-2xl font-bold font-syne text-sm text-[#030014] tracking-wider transition-all duration-500 cursor-pointer flex items-center justify-center gap-2 shadow-lg ${
                  submitted
                    ? 'bg-emerald-400 text-[#030014] shadow-emerald-400/20'
                    : 'bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] shadow-cyan-400/10'
                }`}
              >
                {submitted ? (
                  <>
                    <span>✓ MESSAGE TRANSMITTED</span>
                  </>
                ) : (
                  <>
                    <span>SEND ENQUIRY</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
