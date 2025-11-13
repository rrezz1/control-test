import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: "Professional Gas Pipe Control Services",
      subtitle: "Ensuring Safety Through Expert Inspection & Testing",
      heroText: "We provide comprehensive gas pipe control and testing services for residential, commercial, and industrial applications. Our certified technicians use state-of-the-art equipment to ensure your gas systems are safe, reliable, and compliant with all regulations.",
      cta: "Request Inspection",
      ourServices: "Our Services",
      service1Title: "Pressure Testing",
      service1Desc: "Comprehensive pressure testing to verify pipe integrity and identify potential leaks with precision equipment.",
      service2Title: "Visual Inspection",
      service2Desc: "Thorough visual examination of gas pipes, connections, and installations by certified professionals.",
      service3Title: "Leak Detection",
      service3Desc: "Advanced leak detection using specialized equipment and techniques to identify even the smallest leaks.",
      service4Title: "Compliance Certification",
      service4Desc: "Official certification confirming your gas system meets all safety standards and regulations.",
      service5Title: "Emergency Services",
      service5Desc: "24/7 emergency response for gas leaks and urgent situations with rapid deployment teams.",
      service6Title: "Preventive Maintenance",
      service6Desc: "Regular maintenance programs to prevent issues before they occur and extend system lifespan.",
      whyChooseUs: "Why Choose Control Test?",
      feature1: "Certified Experts",
      feature1Desc: "Our team consists of highly trained and certified professionals with years of experience.",
      feature2: "Advanced Technology",
      feature2Desc: "We use the latest technology and equipment for accurate and reliable results.",
      feature3: "Quick Response",
      feature3Desc: "Rapid response times for both scheduled inspections and emergency situations.",
      feature4: "Competitive Pricing",
      feature4Desc: "Quality services at competitive and transparent prices with no hidden costs."
    },
    sq: {
      title: "Shërbime Profesionale të Kontrollit të Cevave të Gazit",
      subtitle: "Sigurimi i Sigurisë Përmes Inspektimit dhe Testimit të Ekspertëve",
      heroText: "Ne ofrojmë shërbime të plota të kontrollit dhe testimit të cevave të gazit për aplikime banesore, tregtare dhe industriale. Teknikët tanë të certifikuar përdorin pajisje moderne për të siguruar që sistemet tuaja të gazit janë të sigurta, të besueshme dhe të përputhshme me të gjitha rregulloret.",
      cta: "Kërkoni Inspektim",
      ourServices: "Shërbimet Tona",
      service1Title: "Testimi i Presionit",
      service1Desc: "Testim i plotë i presionit për të verifikuar integritetin e tubave dhe identifikuar rrjedhjet e mundshme me pajisje precize.",
      service2Title: "Inspektim Vizual",
      service2Desc: "Ekzaminim i plotë vizual i cevave të gazit, lidhjeve dhe instalimeve nga profesionistë të certifikuar.",
      service3Title: "Zbulimi i Rrjedhjeve",
      service3Desc: "Zbulim i avancuar i rrjedhjeve duke përdorur pajisje dhe teknika të specializuara për të identifikuar edhe rrjedhjet më të vogla.",
      service4Title: "Certifikim i Përputhshmërisë",
      service4Desc: "Certifikatë zyrtare që konfirmon që sistemi juaj i gazit plotëson të gjitha standardet dhe rregulloret e sigurisë.",
      service5Title: "Shërbime Emergjence",
      service5Desc: "Përgjigje emergjence 24/7 për rrjedhje gazi dhe situata urgjente me ekipe të shpejta të zbatimit.",
      service6Title: "Mirëmbajtje Parandaluese",
      service6Desc: "Programe të rregullta mirëmbajtjeje për të parandaluar problemet para se të ndodhin dhe zgjatjen e jetës së sistemit.",
      whyChooseUs: "Pse të Zgjidhni Control Test?",
      feature1: "Ekspertë të Certifikuar",
      feature1Desc: "Ekipi ynë përbëhet nga profesionistë të certifikuar dhe të trajnuar me vjetërsi përvoje.",
      feature2: "Teknologji e Avancuar",
      feature2Desc: "Ne përdorim teknologjinë dhe pajisjet më të fundit për rezultate të sakta dhe të besueshme.",
      feature3: "Përgjigje e Shpejtë",
      feature3Desc: "Kohë të shpejta përgjigjeje si për inspektime të planifikuara ashtu edhe për situata emergjente.",
      feature4: "Çmime Konkurruese",
      feature4Desc: "Shërbime cilësore me çmime konkurruese dhe transparente pa kosto të fshehura."
    }
  };

  const t = translations[language];

  return (
    <>
      <Head>
        <title>Control Test - Professional Gas Pipe Control Services</title>
        <meta name="description" content="Professional gas pipe control and testing services for residential, commercial, and industrial applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header language={language} setLanguage={setLanguage} />
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>{t.title}</h1>
              <p className="hero-subtitle">{t.subtitle}</p>
              <p className="hero-description">{t.heroText}</p>
              <button className="cta-button">{t.cta}</button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="container">
            <h2 className="section-title">{t.ourServices}</h2>
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

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h2 className="section-title">{t.whyChooseUs}</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>{t.feature1}</h3>
                <p>{t.feature1Desc}</p>
              </div>
              <div className="feature">
                <h3>{t.feature2}</h3>
                <p>{t.feature2Desc}</p>
              </div>
              <div className="feature">
                <h3>{t.feature3}</h3>
                <p>{t.feature3Desc}</p>
              </div>
              <div className="feature">
                <h3>{t.feature4}</h3>
                <p>{t.feature4Desc}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </>
  );
}