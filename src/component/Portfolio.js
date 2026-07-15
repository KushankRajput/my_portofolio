import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaLaravel,
  FaPhp,
  FaDatabase,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./Portfolio.css";

// Contact API Configuration
const CONTACT_API_URL = "https://website-sigma-opal-60.vercel.app/contact";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "highlights",
        "projects",
        "experience",
        "education",
        "skills",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const fullName = form["fullName"].value.trim();
    const email = form["email"].value.trim();
    const phone = form["phone"].value.trim();

    if (!fullName || !email || !phone) {
      toast.error("❌ Please fill all required fields!");
      return;
    }

    setSending(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      toast.success("✅ Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Contact API Error:", error);
      toast.error("❌ Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="logo-text">Kushank</span>
            <span className="logo-dot">.</span>
          </motion.div>

          <ul className="nav-links">
            {[
              "About",
              "Highlights",
              "Projects",
              "Experience",
              "Education",
              "Skills",
            ].map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <li key={item}>
                  <button
                    className={`nav-link ${
                      activeSection === sectionId ? "active" : ""
                    }`}
                    onClick={() => scrollToSection(sectionId)}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="nav-buttons">
            <motion.a
              href="https://drive.google.com/file/d/1gFqXq5IDkBfdVk4bDscNbd7q_HPRn98z/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="hero-subtitle">Backend Developer</h4>
            <h1 className="hero-title">
              <span className="hero-name">Kushank</span> Rajput
            </h1>
            <p className="hero-description">
              Laravel Developer with 1.5+ years experience building scalable,
              high-performance web applications. Passionate about clean code,
              REST APIs, and efficient backend systems.
            </p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.a
                href="mailto:kushankraj1604@gmail.com"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope /> Email Me
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kushank-rajput9368/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="image-placeholder">
              <div className="profile-image">
                <img src="/asset/logo.png" alt="Profile" />
              </div>
              <div className="floating-icons">
                <motion.div
                  className="floating-icon php"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0 }}
                >
                  <FaPhp />
                </motion.div>
                <motion.div
                  className="floating-icon laravel"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, delay: 0.2 }}
                >
                  <FaLaravel />
                </motion.div>
                <motion.div
                  className="floating-icon nodejs"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, delay: 0.2 }}
                >
                  <FaNodeJs />
                </motion.div>
                <motion.div
                  className="floating-icon db"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 0.4 }}
                >
                  <FaDatabase />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope />
            <span>kushankraj1604@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhone />
            <span>9368012393</span>
          </div>
          <div className="contact-item">
            <FaBriefcase />
            <span>Noida, India</span>
          </div>
        </div> */}
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="about-description">
              Motivated and detail-oriented Laravel Developer with 1.5+ years of
              experience building scalable, high-performance web applications.
              Strong expertise in backend development, REST API design, database
              architecture, and clean coding practices.
            </p>
            <p className="about-description">
              Hands-on experience integrating third-party APIs and PayPal
              payment gateway. Known for delivering efficient solutions, quick
              learning, and working effectively within agile teams.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <FaCheckCircle className="highlight-icon" />
                <span>Scalable Backend Systems</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle className="highlight-icon" />
                <span>REST API Design</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle className="highlight-icon" />
                <span>Payment Integration</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle className="highlight-icon" />
                <span>Database Architecture</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="stat-card">
              <h3 className="stat-number">1.5+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">3</h3>
              <p className="stat-label">Live Applications</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Highlights */}
      <section id="highlights" className="section highlights-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Career Highlights</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="highlights-container">
          <motion.div
            className="highlight-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="highlight-icon-container">
              <div className="highlight-card-icon">
                <FaLaravel />
              </div>
            </div>
            <h3 className="highlight-card-title">Live Applications</h3>
            <p className="highlight-card-text">
              Contributed to live applications such as WhitePeony (Tea
              E-commerce App) and Bruno (Alcohol Delivery App).
            </p>
          </motion.div>

          <motion.div
            className="highlight-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="highlight-icon-container">
              <div className="highlight-card-icon">
                <FaCode />
              </div>
            </div>
            <h3 className="highlight-card-title">PayPal Integration</h3>
            <p className="highlight-card-text">
              Implemented secure and seamless PayPal payment gateway integration
              for global transactions.
            </p>
          </motion.div>

          <motion.div
            className="highlight-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="highlight-icon-container">
              <div className="highlight-card-icon">
                <FaDatabase />
              </div>
            </div>
            <h3 className="highlight-card-title">Optimized Backend</h3>
            <p className="highlight-card-text">
              Built performance-optimized backend systems focusing on
              scalability and maintainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-container">
          <motion.a
            href="https://www.markupdesigns.net/arbutus-web/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-header">
              <h3 className="project-title">Arbutus - Trading Platform</h3>
              <FaExternalLinkAlt className="project-link-icon" />
            </div>
            <p className="project-description">
              A comprehensive trading platform designed for seamless market
              analysis, real-time data tracking, and investment management.
            </p>
            <div className="project-tags">
              <span className="project-tag">Trading</span>
              <span className="project-tag">Real-time Data</span>
              <span className="project-tag">Analytics</span>
            </div>
          </motion.a>

          <motion.a
            href="https://www.markupdesigns.net/whitepeony/admin/login"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="project-header">
              <h3 className="project-title">WhitePeony - Tea E-Commerce</h3>
              <FaExternalLinkAlt className="project-link-icon" />
            </div>
            <p className="project-description">
              Premium tea e-commerce platform with PayPal integration for secure
              global transactions and smooth user experience.
            </p>
            <div className="project-tags">
              <span className="project-tag">Laravel</span>
              <span className="project-tag">PayPal</span>
              <span className="project-tag">E-Commerce</span>
            </div>
          </motion.a>

          <motion.a
            href="https://www.markupdesigns.net/morovski-light-web/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="project-header">
              <h3 className="project-title">Morovski - Lighting E-Commerce</h3>
              <FaExternalLinkAlt className="project-link-icon" />
            </div>
            <p className="project-description">
              Premium lighting e-commerce platform offering a curated collection
              of luxury lighting fixtures with secure checkout and global
              shipping.
            </p>
            <div className="project-tags">
              <span className="project-tag">E-Commerce</span>
              <span className="project-tag">Lighting</span>
              <span className="project-tag">Laravel</span>
            </div>
          </motion.a>

          <motion.a
            href="https://www.markupdesigns.net/sport-gems-web/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="project-header">
              <h3 className="project-title">
                SportGems - Buy & Sell Marketplace
              </h3>
              <FaExternalLinkAlt className="project-link-icon" />
            </div>
            <p className="project-description">
              Global marketplace platform enabling users to buy and sell rare
              sports memorabilia and collectibles with secure transactions
              worldwide.
            </p>
            <div className="project-tags">
              <span className="project-tag">Marketplace</span>
              <span className="project-tag">Buy & Sell</span>
              <span className="project-tag">Global</span>
            </div>
          </motion.a>

          <motion.a
            href="https://www.markupdesigns.net/qec-web/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="project-header">
              <h3 className="project-title">
                Qatar Esports - Tournament Platform
              </h3>
              <FaExternalLinkAlt className="project-link-icon" />
            </div>
            <p className="project-description">
              Esports tournament management platform where admins create
              competitive gaming events and users participate in real-life
              tournaments.
            </p>
            <div className="project-tags">
              <span className="project-tag">Esports</span>
              <span className="project-tag">Tournaments</span>
              <span className="project-tag">Gaming</span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="section experience-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="timeline">
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-date">July 2025 – Present</div>
            <div className="timeline-content">
              <h3 className="timeline-title">
                Laravel Developer — Markup Designs Pvt. Ltd.
              </h3>
              <ul className="timeline-list">
                <li>
                  Developed and Optimized the "WhitePeony" tea e-commerce
                  platform with smooth PayPal integration for secure global
                  transactions.
                </li>
                <li>
                  Built the "Bruno" alcohol delivery application with real-time
                  order tracking and optimized user flow.
                </li>
                <li>
                  Created "MAI" a construction management system to handle
                  projects, documents, workflows, and team collaboration.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="timeline-date">July 2024 – Dec 2024</div>
            <div className="timeline-content">
              <h3 className="timeline-title">
                Laravel Developer — Business2Sell Group
              </h3>
              <ul className="timeline-list">
                <li>
                  Developed the complete admin panel for their main business
                  listing platform.
                </li>
                <li>
                  Contributed to MgmtZoomdash, focusing on scalable backend
                  logic and API development.
                </li>
                <li>
                  Short-term role due to personal medical reasons, now fully
                  recovered.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-date">May 2023 – June 2024</div>
            <div className="timeline-content">
              <h3 className="timeline-title">
                Jr. Software Developer — BlueJay Web Solutions Pvt. Ltd.
                (Remote)
              </h3>
              <ul className="timeline-list">
                <li>
                  Built and maintained full-stack web applications using
                  Laravel, PHP, MySQL, and JavaScript.
                </li>
                <li>
                  Contributed to projects including Rockete Sim and Wizfurnish.
                </li>
                <li>
                  Assisted in API development, database structuring, and
                  enhancing application performance.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-icon">
            <FaGraduationCap size={40} />
          </div>
          <div className="education-content">
            <h3 className="education-title">
              B.Tech in Computer Science & Engineering (AKTU)
            </h3>
            <div className="education-period">2020 – 2024</div>
            <div className="education-cgpa">CGPA: 7.46</div>
            <p className="education-details">
              Relevant Coursework: Data Structures & Algorithms, DBMS, Operating
              Systems, Web Technologies
            </p>
          </div>
        </motion.div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="section skills-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-container">
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="skill-category-title">
              <FaCode className="category-icon" /> Languages
            </h3>
            <div className="skill-tags">
              {[
                "PHP",
                "Laravel",
                "JavaScript",
                "Node.js",
                "jQuery",
                "HTML5",
                "CSS3",
                "Bootstrap",
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="skill-category-title">
              <FaDatabase className="category-icon" /> Databases
            </h3>
            <div className="skill-tags">
              {["MySQL", "MongoDB"].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="skill-category-title">
              <FaTools className="category-icon" /> Tools & Platforms
            </h3>
            <div className="skill-tags">
              {[
                "Git",
                "GitHub",
                "VS Code",
                "Sublime Text",
                "Payment Integration (PayPal)",
                "API Authentication",
                "MVC Architecture",
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-container">
          <form
            ref={formRef}
            onSubmit={handleContactSubmit}
            className="contact-form"
          >
            <label>
              Full Name<span className="required">*</span>
              <input
                type="text"
                name="fullName"
                placeholder="Your full name"
                required
              />
            </label>

            <label>
              Email<span className="required">*</span>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </label>

            <label>
              Phone<span className="required">*</span>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                required
              />
            </label>

            <button type="submit" className="btn-primary" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <motion.div
            className="footer-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="footer-title">Let's Connect</h2>
            <p className="footer-description">
              I'm always open to discussing new opportunities, interesting
              projects, or just talking tech.
            </p>

            <div className="footer-contact">
              <a href="mailto:kushankraj1604@gmail.com" className="footer-link">
                <FaEnvelope /> kushankraj1604@gmail.com
              </a>

              <a href="tel:9368012393" className="footer-link">
                <FaPhone /> 9368012393
              </a>

              <a
                href="https://www.linkedin.com/in/kushank-rajput9368/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaLinkedin /> LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* React Hot Toast Toaster */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: "rgba(15, 12, 41, 0.95)",
            color: "#fff",
            border: "1px solid rgba(102, 126, 234, 0.3)",
            borderRadius: "12px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(10px)",
            padding: "16px 20px",
            fontSize: "0.95rem",
            fontWeight: "600",
          },
          success: {
            style: {
              background: "linear-gradient(135deg, #10b981, #059669)",
              border: "1px solid rgba(16, 185, 129, 0.5)",
            },
            icon: "🎉",
          },
          error: {
            style: {
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              border: "1px solid rgba(239, 68, 68, 0.5)",
            },
            icon: "❌",
          },
        }}
      />
    </div>
  );
};

export default Portfolio;
