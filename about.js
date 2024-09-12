import React from 'react';

const About = () => {
  const styles = {
    container: {
      padding: '60px',
      background: 'linear-gradient(to bottom, #f0f4f8, #ffffff)',
      fontFamily: "'Open Sans', sans-serif",
      color: '#333',
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto',
    },
    header: {
      fontFamily: "'Lora', serif",
      fontSize: '48px',
      color: '#003366',
      marginBottom: '20px',
      textAlign: 'center',
    },
    subheader: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '36px',
      color: '#004080',
      marginTop: '40px',
      borderBottom: '2px solid #004080',
      display: 'inline-block',
      paddingBottom: '10px',
    },
    paragraph: {
      fontSize: '18px',
      marginTop: '20px',
      textAlign: 'justify',
    },
    sectionTitle: {
      fontSize: '28px',
      color: '#004080',
      marginTop: '40px',
      borderBottom: '2px solid #004080',
      display: 'inline-block',
      paddingBottom: '10px',
    },
    highlightText: {
      color: '#d9534f',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#003366',
      color: '#fff',
      padding: '15px 30px',
      fontSize: '16px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '30px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#002244',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to RBC Bank</h1>
      <p style={styles.paragraph}>
        At RBC Bank, we believe in building a brighter financial future for everyone. With over 150 years of experience, our mission is to provide innovative banking solutions, personalized services, and a customer-first approach. We’re committed to empowering individuals, families, and businesses by helping them achieve their financial goals.
      </p>

      <h2 style={styles.subheader}>Why Choose Us?</h2>
      <p style={styles.paragraph}>
        <span style={styles.highlightText}>Trusted Expertise:</span> As one of the largest financial institutions in the world, we offer reliable services backed by decades of industry knowledge.
      </p>
      <p style={styles.paragraph}>
        <span style={styles.highlightText}>Innovative Solutions:</span> From digital banking to personalized financial advice, we are constantly evolving to meet your needs.
      </p>
      <p style={styles.paragraph}>
        <span style={styles.highlightText}>Community Focused:</span> We believe in giving back to the communities we serve, supporting local causes, and fostering a better world for future generations.
      </p>

      <h3 style={styles.sectionTitle}>Our Core Values</h3>
      <p style={styles.paragraph}>
        <span style={styles.highlightText}>Integrity:</span> We uphold the highest ethical standards in everything we do.
      </p>
      <p style={styles.paragraph}>
        <span style={styles.highlightText}>Customer-Centricity:</span> Our clients are at the heart of our business.
      </p>
      <p style={styles.paragraph}>
        <span style={styles.highlightText}>Innovation:</span> We are pioneers in delivering cutting-edge financial products and services.
      </p>

      <h3 style={styles.sectionTitle}>Our Vision</h3>
      <p style={styles.paragraph}>
        We strive to create a positive impact by transforming the way people manage their finances, making banking simpler, smarter, and more accessible. Whether it’s through digital tools, personalized service, or community engagement, RBC Bank is dedicated to making a difference.
      </p>

      <button style={styles.button} onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}>
        Learn More
      </button>
    </div>
  );
};

export default About;
