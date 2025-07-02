import React, { useEffect } from 'react';
import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBook, FaChartLine, FaLaptopCode } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Blog = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const blogCategories = [
    {
      title: 'SAP Insights',
      icon: <FaBook className="category-icon" />,
      posts: [
        'Understanding SAP S/4HANA',
        'Benefits of SAP Fiori',
        'SAP Implementation Strategies',
        'SAP Cloud Solutions'
      ],
      color: '#00bfff'
    },
    {
      title: 'ERP Trends',
      icon: <FaChartLine className="category-icon" />,
      posts: [
        'Top ERP Solutions in 2023',
        'Future of ERP Systems',
        'ERP Integration Methods',
        'ERP for Small Businesses'
      ],
      color: '#00ffe7'
    },
    {
      title: 'Cloud Solutions',
      icon: <FaLaptopCode className="category-icon" />,
      posts: [
        'Migrating to the Cloud',
        'SaaS vs. PaaS vs. IaaS',
        'Cloud Security Essentials',
        'Hybrid Cloud Strategies'
      ],
      color: '#87ceeb'
    },
  ];

  return (
    <div className="blog-page">
      <Helmet>
        <title>Tech Insights | Alphaseam Blog</title>
      </Helmet>

      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="header-content">
          <h1 className="hero-title" data-aos="fade-down">Alphaseam Insights</h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
            Expert analysis on enterprise technology
          </p>
        </div>
      </div>

      <main className="blog-content">
        <section className="categories-section">
          <h2 className="section-title" data-aos="fade-up">Explore Categories</h2>
          <div className="categories-grid">
            {blogCategories.map((category, index) => (
              <div
                key={index}
                className="category-card"
                data-aos="zoom-in"
                data-aos-delay={200 + (index * 100)}
                style={{ borderTop: `4px solid ${category.color}` }}
              >
                <div className="category-header">
                  {category.icon}
                  <h3 style={{ color: category.color }}>{category.title}</h3>
                </div>
                <ul className="posts-list">
                  {category.posts.map((post, postIndex) => (
                    <li key={postIndex} data-aos="fade-up" data-aos-delay={300 + (postIndex * 50)}>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <span className="post-bullet">•</span>
                        {post}
                      </a>
                    </li>
                  ))}
                </ul>
                <button
                  className="view-all-btn"
                  style={{ color: category.color }}
                  data-aos="fade-up"
                  data-aos-delay="500">
                  View all articles
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="cta-section" data-aos="zoom-in">
          <button
            className="subscribe-btn"
            onClick={() => alert('Subscribe functionality')}
          >
            Subscribe to Updates
          </button>
          <button
            className="write-btn"
            onClick={() => alert('Write for us functionality')}
          >
            Write for Us
          </button>
        </div>
      </main>
    </div>
  );
};

export default Blog;
