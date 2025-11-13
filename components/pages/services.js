import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: "Our Services - Control Test",
      heading: "Our Services",
      service1Title: "Pressure Testing",
      service1Desc: "Comprehensive pressure testing to verify pipe integrity and identify potential leaks. We use advanced equipment to apply controlled pressure and monitor for any drops that indicate issues.",
      service2Title: "Visual Inspection",
      service2Desc: "Thorough visual examination of gas pipes, connections, and installations. Our inspectors check for corrosion, damage, improper installations, and other visible issues.",
      service3Title: "Leak Detection",
      service3Desc: "Advanced leak detection using specialized equipment and techniques. We can identify even the smallest leaks that might go unnoticed during visual inspections.",
      service4Title: "Compliance Certification",
      service4Desc: "Official certification confirming your gas system meets all safety standards. This documentation is often required for insurance, regulatory compliance, and property transactions.",
      service5Title: "Emergency Inspection",
      service5Desc: "Rapid response service for suspected gas leaks or other emergencies. Available 24/7 to ensure immediate attention to critical situations.",
      service6Title: "Preventive Maintenance",
      service6Desc: "Regular maintenance programs to prevent issues before they occur. Scheduled inspections and testing to maintain system integrity over time."
    },
    sq: {
      title: "Shërbimet Tona - Control Test",
      heading: "Shërbimet Tona",
      service1Title: "Testimi i Presionit",
      service1Desc: "Testim i plotë i presionit për të verifikuar integritetin e tubave dhe identifikuar rrjedhjet e mundshme. Ne përdorim pajisje të avancuara për të aplikuar presion të kontrolluar dhe për të monitoruar çdo rënie që tregon probleme.",
      service2Title: "Inspektim Vizual",
      service2Desc: "Ekzaminim i plotë vizual i cevave të gazit, lidhjeve dhe instalimeve. Inspektorët tanë kontrollojnë për korrozion, dëmtim, instalime të papërshtatshme dhe çështje të tjera të dukshme.",
      service3Title: "Zbulimi i Rrjedhjeve",
      service3Desc: "Zbulim i avancuar i rrjedhjeve duke përdorur pajisje dhe teknika të specializuara. Ne mund të identifikojmë edhe rrjedhjet më të vogla që mund të mbeten të pavërejura gjatë inspektimeve vizuale.",
      service4Title: "Certifikim i Përputhshmërisë",
      service4Desc: "Certifikatë zyrtare që konfirmon që sistemi juaj i gazit plotëson të gjitha standardet e sigurisë. Kjo dokumentacion shpesh kërkohet për sigurim, përputhje rregullatore dhe transaksione pronash.",
      service5Title: "Inspektim i Emergjencës",
      service5Desc: "Shërbim i përgjigjes së shpejtë për rrjedhje të dyshuara të gazit ose emergjenca të tjera. I disponueshëm 24/7 për të siguruar vëmendje të menjëhershme për situata kritike.",
      service6Title: "Mirëmbajtje Parandaluese",
      service6Desc: "Programe të rregullta mirëmbajtjeje për të parandaluar problemet para se të ndodhin. Inspektime dhe teste të planifikuara për të ruajtur integritetin e sistemit me kalimin e kohës."
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

        <section className="services-detail">
          <div className="container">
            <div className="services-grid">
              <ServiceCard 
                title={t.service1Title}
                description={t.service1Desc}
                icon="🔧"
                language={language}
              />
              <ServiceCard 
                title={t.service2Title}
                description={t.service2Desc}
                icon="👁️"
                language={language}
              />
              <ServiceCard 
                title={t.service3Title}
                description={t.service3Desc}
                icon="🔍"
                language={language}
              />
              <ServiceCard 
                title={t.service4Title}
                description={t.service4Desc}
                icon="📋"
                language={language}
              />
              <ServiceCard 
                title={t.service5Title}
                description={t.service5Desc}
                icon="🚨"
                language={language}
              />
              <ServiceCard 
                title={t.service6Title}
                description={t.service6Desc}
                icon="🛠️"
                language={language}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </>
  );
}