import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [language, setLanguage] = useState('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const translations = {
    en: {
      title: "Contact Us - Control Test",
      heading: "Contact Us",
      subtitle: "Get in touch with our team of experts",
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Your Message",
      submit: "Send Message",
      contactInfo: "Contact Information",
      address: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hours: "Business Hours",
      hoursDetail: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nEmergency services available 24/7"
    },
    sq: {
      title: "Kontakt - Control Test",
      heading: "Na Kontaktoni",
      subtitle: "Lidhuni me ekipin tonë të ekspertëve",
      name: "Emri Juaj",
      email: "Adresa e Emailit",
      phone: "Numri i Telefonit",
      message: "Mesazhi Juaj",
      submit: "Dërgo Mesazhin",
      contactInfo: "Informacione Kontakti",
      address: "Adresa",
      phoneLabel: "Telefoni",
      emailLabel: "Email",
      hours: "Orari i Punës",
      hoursDetail: "E Hënë - E Premte: 8:00 - 18:00\nE Shtunë: 9:00 - 14:00\nShërbime emergjence të disponueshme 24/7"
    }
  };

  const t = translations[language];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert(language === 'en' ? 'Message sent!' : 'Mesazhi u dërgua!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>
      
      <Header language={language} setLanguage={setLanguage} />
      
      <main className="main">
        <section className="page-hero">
          <div className="container">
            <h1>{t.heading}</h1>
            <p>{t.subtitle}</p>
          </div>
        </section>

        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-form">
                <h2>{t.heading}</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">{t.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">{t.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">{t.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="cta-button">{t.submit}</button>
                </form>
              </div>

              <div className="contact-info">
                <h2>{t.contactInfo}</h2>
                <div className="info-item">
                  <h3>{t.address}</h3>
                  <p>123 Safety Street<br />Tirana, Albania</p>
                </div>
                <div className="info-item">
                  <h3>{t.phoneLabel}</h3>
                  <p>+355 4X XXX XXXX</p>
                </div>
                <div className="info-item">
                  <h3>{t.emailLabel}</h3>
                  <p>info@controltest.com</p>
                </div>
                <div className="info-item">
                  <h3>{t.hours}</h3>
                  <p style={{whiteSpace: 'pre-line'}}>{t.hoursDetail}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </>
  );
}