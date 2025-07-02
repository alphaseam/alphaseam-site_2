import React, { useEffect } from 'react';
import './Career.css';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBriefcase, FaGraduationCap, FaGlobe, FaLightbulb } from 'react-icons/fa';

const jobListings = [
  {
    title: 'SAP Developer',
    description: 'Develop and implement cutting-edge SAP solutions for enterprise clients.',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Business Analyst',
    description: 'Bridge the gap between IT and business operations through data-driven insights.',
    location: 'khardi, Pune',
    type: 'Full-time'
  },
  {
    title: 'Project Manager',
    description: 'Lead cross-functional teams to deliver complex ERP implementations.',
    location: 'IT field,mumbai',
    type: 'Contract'
  },
  {
    title: 'Data Scientist',
    description: 'Build predictive models to optimize business processes.',
    location: 'Remote',
    type: 'Full-time'
  },
];

const Career = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div className="career-page">
      <Helmet>
        <title>Career Opportunities at Alphaseam Enterprise</title>
        <meta name="description" content="Explore career openings at Alphaseam Enterprise. Join a dynamic IT company specializing in SAP and ERP technologies." />
      </Helmet>

      <div className="job-listings-container">
        <h1 className="section-title" data-aos="fade-down">CAREER OPPORTUNITIES</h1>
        <p className="section-subtitle" 
           data-aos="fade-up" 
           data-aos-delay="100">
          At Alphaseam Enterprise, we're revolutionizing business technology through SAP and ERP solutions. 
          Join our team of innovators working with Fortune 500 companies worldwide.
        </p>

        <div className="job-listings">
          <h3 className="current-openings" data-aos="fade-up">Current Openings</h3>
          {jobListings.map((job, index) => (
            <div key={index} 
                 className="job-card"
                 data-aos="fade-up"
                 data-aos-delay={100 + (index * 100)}>
              <div className="job-header">
                <div>
                  <h4 className="job-title">{job.title}</h4>
                  <div className="job-meta">
                    <span className="job-tag">{job.location}</span>
                    <span className="job-tag">{job.type}</span>
                  </div>
                </div>
                <button className="cta-button">
                  Apply Now
                </button>
              </div>
              <div className="job-description">
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-section">
          <h3 className="section-subheader" 
              data-aos="fade-up">Why Work With Us?</h3>
          <div className="benefits-grid">
            <div className="benefit-card" 
                 data-aos="zoom-in" 
                 data-aos-delay="200">
              <div className="benefit-icon">
                <FaBriefcase className="icon" />
              </div>
              <h4 className="benefit-title">Cutting-Edge Projects</h4>
              <p className="benefit-description">Work with the latest SAP technologies for industry leaders</p>
            </div>
            <div className="benefit-card" 
                 data-aos="zoom-in" 
                 data-aos-delay="300">
              <div className="benefit-icon">
                <FaGraduationCap className="icon" />
              </div>
              <h4 className="benefit-title">Professional Growth</h4>
              <p className="benefit-description">Continuous learning through training and certifications</p>
            </div>
            <div className="benefit-card" 
                 data-aos="zoom-in" 
                 data-aos-delay="400">
              <div className="benefit-icon">
                <FaGlobe className="icon" />
              </div>
              <h4 className="benefit-title">Global Team</h4>
              <p className="benefit-description">Collaborate with top talent across 15+ countries</p>
            </div>
            <div className="benefit-card" 
                 data-aos="zoom-in" 
                 data-aos-delay="500">
              <div className="benefit-icon">
                <FaLightbulb className="icon" />
              </div>
              <h4 className="benefit-title">Innovation Culture</h4>
              <p className="benefit-description">Freedom to experiment with new technologies and approaches</p>
            </div>
          </div>
        </div>


        <div className="cta-section">
          <div className="cta-container" data-aos="zoom-in">
            <h3 className="cta-title">Ready to Join Us?</h3>
            <p className="cta-description">
              Can't find your perfect role? We're always looking for exceptional talent. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="cta-button">
              Submit General Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;