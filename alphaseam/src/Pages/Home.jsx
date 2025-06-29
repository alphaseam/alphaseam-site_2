import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

import AOS from "aos";
import "aos/dist/aos.css";

import heroVideo from "../assets/home/bg9_video.mp4";
import service1 from "../assets/About/hero.jpg";
import service2 from "../assets/About/hero.jpg";
import service3 from "../assets/About/hero.jpg";
import aboutImg from "../assets/About/hero.jpg";
import industry1 from "../assets/About/hero.jpg";
import industry2 from "../assets/About/hero.jpg";
import industry3 from "../assets/About/hero.jpg";
import industry4 from "../assets/About/hero.jpg";
import case1 from "../assets/About/hero.jpg";
import case2 from "../assets/About/hero.jpg";
import case3 from "../assets/About/hero.jpg";

const services = [
  {
    img: service1,
    title: "SAP ERP Solutions",
    desc: "Scale your operations with robust, enterprise-grade ERP implementations.",
  },
  {
    img: service2,
    title: "Custom Software Development",
    desc: "Crafting intelligent applications tailored to your unique needs.",
  },
  {
    img: service3,
    title: "System Integration & Consulting",
    desc: "Synchronizing systems for optimized performance and agility.",
  },
];

const industries = [
  { img: industry1, title: "Retail & eCommerce" },
  { img: industry2, title: "Manufacturing" },
  { img: industry3, title: "Banking & Finance" },
  { img: industry4, title: "Logistics & Transportation" },
];

const caseStudies = [
  {
    img: case1,
    title: "Global Retailer",
    desc: "Implemented SAP S/4HANA transformation across 25+ countries.",
  },
  {
    img: case2,
    title: "FinTech Platform",
    desc: "Built scalable API-driven architecture with 99.9% uptime.",
  },
  {
    img: case3,
    title: "Unitary Logistics",
    desc: "Orchestrated system integration across 10+ warehouses.",
  },
];

const Home = () => {
  const navigate = useNavigate(); // ✅ useNavigate hook

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content" data-aos="fade-right">
          <h1>Delivering digital velocity</h1>
          <p>Digital Transformation through modern web & mobile app development</p>
          <button
            className="hero-btn"
            onClick={() => navigate("/contact")} // ✅ Navigate to Contact page
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" data-aos="fade-up">
        <h2>Our Expertise</h2>
        <div className="services-grid">
          {services.map(({ img, title, desc }, i) => (
            <div key={i} className="service-card" data-aos="zoom-in" data-aos-delay={i * 150}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" data-aos="fade-up">
        <div className="about-content">
          <div className="about-text">
            <h2>Who we are</h2>
            <p>
              We are a global team of SAP & digital experts dedicated to accelerating your business
              transformation with agile processes and innovative technology.
            </p>
            <button className="about-btn"
            onClick={()=>navigate("/about")}
            >Know More</button>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="Who we are" />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section" data-aos="fade-up">
        <h2>Industries We Serve</h2>
        <div className="industries-grid">
          {industries.map(({ img, title }, i) => (
            <div key={i} className="industry-card" data-aos="fade-up" data-aos-delay={i * 150}>
              <img src={img} alt={title} />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-section" data-aos="fade-up">
        <h2>Case Studies</h2>
        <div className="case-studies-grid">
          {caseStudies.map(({ img, title, desc }, i) => (
            <div key={i} className="case-card" data-aos="fade-up" data-aos-delay={i * 150}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
