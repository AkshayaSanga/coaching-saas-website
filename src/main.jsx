import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
  Menu,
  X,
} from 'lucide-react';
import './styles.css';

const WHATSAPP_NUMBER = '918497916457';
const WHATSAPP_TEXT = encodeURIComponent(
  'Hi, I saw your coaching institute website demo. I want a similar website for my institute.'
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('NEET Coaching');

  const courses = [
    { title: 'NEET Coaching', icon: '🩺', desc: 'Medical entrance preparation with weekly tests, doubt sessions and structured study plans.' },
    { title: 'JEE Coaching', icon: '⚙️', desc: 'Engineering entrance coaching with concept-first learning and problem-solving practice.' },
    { title: 'Spoken English', icon: '🗣️', desc: 'Grammar, fluency, interview confidence and practical communication training.' },
    { title: 'Computer Basics', icon: '💻', desc: 'MS Office, typing, internet skills and job-ready digital literacy programs.' },
    { title: 'Python Programming', icon: '🐍', desc: 'Beginner-friendly coding classes with projects, assignments and certificates.' },
    { title: 'Full Stack Development', icon: '🚀', desc: 'HTML, CSS, JavaScript, React and backend basics with practical project training.' },
  ];

  const stats = [
    { value: '500+', label: 'Students Trained' },
    { value: '10+', label: 'Years Experience' },
    { value: '95%', label: 'Student Satisfaction' },
    { value: '30+', label: 'Active Batches' },
  ];

  const features = [
    'Mobile-friendly website',
    'WhatsApp enquiry button',
    'Course pages and batch details',
    'Lead capture enquiry section',
    'Google Maps and contact details',
    'Professional admission-focused design',
  ];

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon"><GraduationCap size={24} /></span>
          <span>
            <strong>EduGrowth Pro</strong>
            <small>Coaching Website Demo</small>
          </span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a onClick={() => setMenuOpen(false)} href="#courses">Courses</a>
          <a onClick={() => setMenuOpen(false)} href="#features">Features</a>
          <a onClick={() => setMenuOpen(false)} href="#results">Results</a>
          <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> WhatsApp
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="home">
        <section className="hero section-pad">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="container hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="hero-copy"
            >
              <div className="badge"><Sparkles size={16} /> Demo for Coaching Institutes in Hyderabad</div>
              <h1>Turn coaching enquiries into admissions with a premium website.</h1>
              <p>
                A modern business-style website for coaching institutes with course highlights,
                student enquiry flow, WhatsApp CTA, results, trust sections and mobile-first design.
              </p>

              <div className="hero-actions">
                <a className="primary-btn" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  Show Me This Website <ArrowRight size={18} />
                </a>
                <a className="secondary-btn" href="#courses">View Demo Sections</a>
              </div>

              <div className="trust-row">
                <span><CheckCircle2 size={18} /> No complex app needed</span>
                <span><CheckCircle2 size={18} /> Fast setup</span>
                <span><CheckCircle2 size={18} /> Lead focused</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="dashboard-card"
            >
              <div className="dashboard-header">
                <div>
                  <small>Admissions Dashboard</small>
                  <h3>Elite Coaching Academy</h3>
                </div>
                <span className="live-pill">Live Demo</span>
              </div>

              <div className="metric-grid">
                {stats.map((stat) => (
                  <div className="metric-card" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="lead-card">
                <div className="lead-icon"><TrendingUp /></div>
                <div>
                  <strong>Admission Enquiry Flow</strong>
                  <p>Students click WhatsApp, select course and contact instantly.</p>
                </div>
              </div>

              <div className="progress-list">
                <div><span>Course Visibility</span><strong>92%</strong></div>
                <div className="bar"><span style={{ width: '92%' }} /></div>
                <div><span>Mobile Readability</span><strong>98%</strong></div>
                <div className="bar"><span style={{ width: '98%' }} /></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="logo-strip">
          <div className="container strip-content">
            <span>Built for</span>
            <strong>NEET/JEE Institutes</strong>
            <strong>Computer Training Centers</strong>
            <strong>Spoken English Academies</strong>
            <strong>Tuition Centers</strong>
          </div>
        </section>

        <section id="courses" className="section-pad light-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Course Showcase</span>
              <h2>Show every program clearly so parents and students enquire faster.</h2>
              <p>Course cards make it easy for visitors to understand what the institute offers.</p>
            </div>

            <div className="course-grid">
              {courses.map((course) => (
                <motion.button
                  whileHover={{ y: -6 }}
                  className={selectedCourse === course.title ? 'course-card active' : 'course-card'}
                  key={course.title}
                  onClick={() => setSelectedCourse(course.title)}
                >
                  <span className="course-icon">{course.icon}</span>
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                  <small>Explore course →</small>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="section-pad">
          <div className="container split-grid">
            <div>
              <span className="eyebrow">Business Value</span>
              <h2>Not just a website. A simple admission lead system.</h2>
              <p className="large-text">
                Coaching owners care about enquiries, trust and admissions. This demo is designed to show them exactly that — not just design.
              </p>

              <div className="feature-list">
                {features.map((feature) => (
                  <div key={feature}><CheckCircle2 size={20} /> {feature}</div>
                ))}
              </div>
            </div>

            <div className="quote-card">
              <ShieldCheck size={34} />
              <h3>Perfect pitch to owners</h3>
              <p>
                “Sir/Madam, I made a modern website demo for coaching institutes. It can help parents see your courses, call you, WhatsApp you, and send admission enquiries.”
              </p>
              <a className="primary-btn small" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Test WhatsApp Flow</a>
            </div>
          </div>
        </section>

        <section id="results" className="section-pad light-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Trust Sections</span>
              <h2>Use results, reviews and numbers to build instant credibility.</h2>
              <p>Owners can replace these with their real student count, toppers and testimonials.</p>
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-tile" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="testimonial-grid">
              {[
                ['Parent Feedback', 'The website makes course details and contact information very easy to understand.'],
                ['Student Review', 'Batch timings, course information and enquiry button are clear on mobile.'],
                ['Owner Benefit', 'A modern website helps the institute look more professional online.'],
              ].map(([title, text]) => (
                <div className="testimonial" key={title}>
                  <div className="stars"><Star fill="currentColor" size={17} /><Star fill="currentColor" size={17} /><Star fill="currentColor" size={17} /><Star fill="currentColor" size={17} /><Star fill="currentColor" size={17} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">Demo Closing Section</span>
              <h2>Make it easy for students to enquire instantly.</h2>
              <p>
                This final section can include address, phone number, Google Maps and WhatsApp button for the actual institute.
              </p>
              <div className="contact-points">
                <span><MapPin /> LB Nagar / Dilsukhnagar, Hyderabad</span>
                <span><Phone /> +91 84979 16457</span>
                <span><Users /> Online + Offline batches available</span>
              </div>
            </div>

            <div className="form-card">
              <h3>Student Enquiry</h3>
              <p>Selected course: <strong>{selectedCourse}</strong></p>
              <input placeholder="Student name" />
              <input placeholder="Phone number" />
              <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                {courses.map((course) => <option key={course.title}>{course.title}</option>)}
              </select>
              <a className="whatsapp-btn" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Send Enquiry on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-card">
            <div>
              <span className="eyebrow dark">Ready Demo</span>
              <h2>Show this website to coaching institutes and offer customization.</h2>
              <p>Change logo, course names, phone number, photos and location for each client.</p>
            </div>
            <a className="white-btn" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Start Client Conversation <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <strong>EduGrowth Pro</strong>
          <span>Premium coaching institute website demo. Built for admissions and enquiries.</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
