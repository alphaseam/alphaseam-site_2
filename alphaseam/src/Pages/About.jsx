import React, { useEffect } from 'react';
import './About.css';
import bgVideo from '../assets/about/bg10_Video.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from 'react-scroll-parallax';
import { FaCheckCircle, FaLightbulb, FaUsers, FaAward, FaGlobe } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div className="about-container">
      <video autoPlay muted loop className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="about-content">
        <Parallax speed={-10}>
          <h1 className="parallax-title" data-aos="fade-down">About Alphaseam Enterprise</h1>
        </Parallax>

        <p data-aos="fade-up">
          We are a Pune-based IT company delivering enterprise-grade SAP and ERP solutions to businesses across the globe.
          Our mission is to fuel digital transformation with cutting-edge technology, reliability, and innovation.
        </p>

        <section className="section-card" data-aos="fade-up">
          <h2>Who We Are</h2>
          <p>
            With a diverse team of developers, consultants, and strategists, Alphaseam combines domain knowledge with
            technical expertise to deliver intelligent and scalable software systems. We are not just a service provider —
            we are a trusted transformation partner.
          </p>
        </section>

        <div className="about-grid">
          <div className="section-card" data-aos="zoom-in" data-aos-delay="200">
            <FaLightbulb className="icon" />
            <h3>Innovation First</h3>
            <p>We push boundaries with modern architectures, cloud-native systems, and automation tools to future-proof your business.</p>
          </div>
          <div className="section-card" data-aos="zoom-in" data-aos-delay="300">
            <FaUsers className="icon" />
            <h3>Client-Centric</h3>
            <p>We co-create with clients, building long-term relationships based on mutual growth, transparency, and collaboration.</p>
          </div>
          <div className="section-card" data-aos="zoom-in" data-aos-delay="400">
            <FaAward className="icon" />
            <h3>Certified Expertise</h3>
            <p>Our SAP-certified professionals deliver solutions with precision, security, and speed.</p>
          </div>
          <div className="section-card" data-aos="zoom-in" data-aos-delay="500">
            <FaGlobe className="icon" />
            <h3>Global Impact</h3>
            <p>With a footprint across Asia, Europe, and the US, our technology drives results in diverse industries.</p>
          </div>
        </div>

        <section className="section-card" data-aos="fade-up" data-aos-delay="600">
          <h2>Core Values</h2>
          <ul>
            <li><FaCheckCircle /> Integrity: Transparent, ethical, and trustworthy in every step.</li>
            <li><FaCheckCircle /> Innovation: We invest in R&D and never stop evolving.</li>
            <li><FaCheckCircle /> Excellence: Flawless execution is our signature.</li>
            <li><FaCheckCircle /> Collaboration: Great results are built together.</li>
          </ul>
        </section>

        <section className="timeline-section" data-aos="fade-up">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2019</h3>
                <p>Founded in Pune with a small team of SAP consultants.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2020</h3>
                <p>Secured our first major international client in Europe.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2022</h3>
                <p>Expanded service portfolio to include AI-driven ERP tools.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2024</h3>
                <p>Crossed 50+ enterprise projects with global delivery.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-card glowing" data-aos="zoom-in">
          <h2>Why Choose Alphaseam?</h2>
          <p>
            We don’t just build solutions — we build futures. When you work with us, you’re partnering with passionate
            professionals who care about your business as much as you do.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
