import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: "About Us - Control Test",
      heading: "About Control Test",
      mission: "Our Mission",
      missionText: "To ensure the safety and reliability of gas pipe systems through professional inspection, testing, and certification services.",
      vision: "Our Vision",
      visionText: "To become the leading provider of gas pipe control services, setting industry standards for safety and quality.",
      values: "Our Values",
      value1: "Safety First",
      value1Desc: "The safety of our clients and their properties is our top priority.",
      value2: "Professional Excellence",
      value2Desc: "We maintain the highest standards of professionalism and expertise.",
      value3: "Integrity",
      value3Desc: "We conduct our business with honesty and transparency.",
      value4: "Customer Focus",
      value4Desc: "We build lasting relationships by understanding and meeting customer needs."
    },
    sq: {
      title: "Rreth Nesh - Control Test",
      heading: "Rreth Control Test",
      mission: "Misioni Jonë",
      missionText: "Të sigurojmë sigurinë dhe besueshmërinë e sistemeve të cevave të gazit përmes shërbimeve profesionale të inspektimit, testimit dhe certifikimit.",
      vision: "Vizioni Jonë",
      visionText: "Të bëhemi ofruesi kryesor i shërbimeve të kontrollit të cevave të gazit, duke vendosur standardet e industrisë për siguri dhe cilësi.",
      values: "Vlerat Tona",
      value1: "Siguria e Parë",
      value1Desc: "Siguria e klientëve tanë dhe pronave të tyre është prioriteti ynë kryesor.",
      value2: "Ekselencë Profesionale",
      value2Desc: "Ne mbajmë standardet më të larta të profesionalizmit dhe ekspertizës.",
      value3: "Nderesi",
      value3Desc: "Ne e kryejmë biznesin tonë me ndershmëri dhe transparencë.",
      value4: "Fokus te Klienti",
      value4Desc: "Ne ndërtojmë marrëdhënie të qëndrueshme duke kuptuar dhe plotësuar nevojat e klientit."
    }
  };

  const t = translations[language];

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
          </div>
        </section>

        <section className="about-content">
          <div className="container">
            <div className="about-section">
              <h2>{t.mission}</h2>
              <p>{t.missionText}</p>
            </div>
            
            <div className="about-section">
              <h2>{t.vision}</h2>
              <p>{t.visionText}</p>
            </div>
            
            <div className="about-section">
              <h2>{t.values}</h2>
              <div className="values-grid">
                <div className="value-item">
                  <h3>{t.value1}</h3>
                  <p>{t.value1Desc}</p>
                </div>
                <div className="value-item">
                  <h3>{t.value2}</h3>
                  <p>{t.value2Desc}</p>
                </div>
                <div className="value-item">
                  <h3>{t.value3}</h3>
                  <p>{t.value3Desc}</p>
                </div>
                <div className="value-item">
                  <h3>{t.value4}</h3>
                  <p>{t.value4Desc}</p>
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