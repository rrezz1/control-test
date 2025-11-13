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
      feature4Desc: "Quality services at competitive and transparent prices with no hidden costs.",
      aboutUs: "About Control Test",
      aboutText: "With over 15 years of experience in the industry, Control Test has established itself as the leading provider of gas pipe control services. Our commitment to safety, quality, and customer satisfaction sets us apart from the competition.",
      ourMission: "Our Mission",
      missionText: "To ensure the highest level of safety and reliability in gas pipe systems through professional inspection, testing, and certification services.",
      ourVision: "Our Vision",
      visionText: "To become the most trusted name in gas pipe control services, setting industry standards for excellence and innovation.",
      statistics: "Our Numbers Speak",
      projectsCompleted: "Projects Completed",
      happyClients: "Happy Clients",
      yearsExperience: "Years Experience",
      certifiedTechnicians: "Certified Technicians",
      howItWorks: "How It Works",
      step1: "Step 1: Contact Us",
      step1Desc: "Get in touch with our team to discuss your needs and schedule an inspection.",
      step2: "Step 2: On-Site Inspection",
      step2Desc: "Our certified technicians conduct thorough testing and inspection at your location.",
      step3: "Step 3: Detailed Report",
      step3Desc: "Receive a comprehensive report with findings and recommendations.",
      step4: "Step 4: Certification",
      step4Desc: "Get official certification and peace of mind for your gas system safety.",
      industriesWeServe: "Industries We Serve",
      residential: "Residential",
      residentialDesc: "Home gas systems and installations",
      commercial: "Commercial",
      commercialDesc: "Restaurants, hotels, and business facilities",
      industrial: "Industrial",
      industrialDesc: "Factories, manufacturing plants, and large facilities",
      finalCta: "Ready for a Safe Gas System?",
      finalCtaText: "Don't compromise on safety. Contact us today for professional gas pipe inspection and testing services.",
      requestInspection: "Request Inspection Now"
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
      feature4Desc: "Shërbime cilësore me çmime konkurruese dhe transparente pa kosto të fshehura.",
      aboutUs: "Rreth Control Test",
      aboutText: "Me më shumë se 15 vjet përvojë në industri, Control Test është vendosur si ofruesi kryesor i shërbimeve të kontrollit të cevave të gazit. Angazhimi ynë për siguri, cilësi dhe kënaqësi të klientit na veçon nga konkurrentët.",
      ourMission: "Misioni Jonë",
      missionText: "Të sigurojmë nivelin më të lartë të sigurisë dhe besueshmërisë në sistemet e cevave të gazit përmes shërbimeve profesionale të inspektimit, testimit dhe certifikimit.",
      ourVision: "Vizioni Jonë",
      visionText: "Të bëhemi emri më i besuar në shërbimet e kontrollit të cevave të gazit, duke vendosur standardet e industrisë për ekselencë dhe inovacion.",
      statistics: "Numrat Tanë Flasin",
      projectsCompleted: "Projekte të Përfunduara",
      happyClients: "Klientë të Kënaqur",
      yearsExperience: "Vjet Përvojë",
      certifiedTechnicians: "Teknikë të Certifikuar",
      howItWorks: "Si Funksionon",
      step1: "Hapi 1: Na Kontaktoni",
      step1Desc: "Lidhuni me ekipin tonë për të diskutuar nevojat tuaja dhe planifikoni një inspektim.",
      step2: "Hapi 2: Inspektim në Vend",
      step2Desc: "Teknikët tanë të certifikuar kryejnë testim dhe inspektim të plotë në vendndodhjen tuaj.",
      step3: "Hapi 3: Raport i Detajuar",
      step3Desc: "Merrni një raport të plotë me gjetjet dhe rekomandimet.",
      step4: "Hapi 4: Certifikim",
      step4Desc: "Merrni certifikatën zyrtare dhe qetësinë e shpirtit për sigurinë e sistemit tuaj të gazit.",
      industriesWeServe: "Industritë që Shërbejmë",
      residential: "Banesore",
      residentialDesc: "Sistemet dhe instalimet e gazit në shtëpi",
      commercial: "Tregtare",
      commercialDesc: "Restorante, hotele dhe objekte biznesi",
      industrial: "Industriale",
      industrialDesc: "Fabrika, impiante prodhimi dhe objekte të mëdha",
      finalCta: "Gati për një Sistem të Sigurt Gazi?",
      finalCtaText: "Mos komprometoni për sigurinë. Na kontaktoni sot për shërbime profesionale të inspektimit dhe testimit të cevave të gazit.",
      requestInspection: "Kërkoni Inspektim Tani"
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

        {/* About Section */}
        <section className="services" style={{background: 'white'}}>
          <div className="container">
            <div style={{textAlign: 'center', marginBottom: '4rem'}}>
              <h2 className="section-title">{t.aboutUs}</h2>
              <p style={{fontSize: '1.2rem', color: '#718096', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8'}}>
                {t.aboutText}
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature">
                <h3>{t.ourMission}</h3>
                <p>{t.missionText}</p>
              </div>
              <div className="feature">
                <h3>{t.ourVision}</h3>
                <p>{t.visionText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="features" style={{background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white'}}>
          <div className="container">
            <h2 className="section-title" style={{color: 'white'}}>{t.statistics}</h2>
            <div className="features-grid">
              <div className="feature">
                <h3 style={{fontSize: '3rem', color: 'white', marginBottom: '1rem'}}>500+</h3>
                <p style={{color: '#e2e8f0', fontSize: '1.2rem'}}>{t.projectsCompleted}</p>
              </div>
              <div className="feature">
                <h3 style={{fontSize: '3rem', color: 'white', marginBottom: '1rem'}}>98%</h3>
                <p style={{color: '#e2e8f0', fontSize: '1.2rem'}}>{t.happyClients}</p>
              </div>
              <div className="feature">
                <h3 style={{fontSize: '3rem', color: 'white', marginBottom: '1rem'}}>15+</h3>
                <p style={{color: '#e2e8f0', fontSize: '1.2rem'}}>{t.yearsExperience}</p>
              </div>
              <div className="feature">
                <h3 style={{fontSize: '3rem', color: 'white', marginBottom: '1rem'}}>25+</h3>
                <p style={{color: '#e2e8f0', fontSize: '1.2rem'}}>{t.certifiedTechnicians}</p>
              </div>
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

        {/* How It Works Section */}
        <section className="features" style={{background: '#f8f9fa'}}>
          <div className="container">
            <h2 className="section-title">{t.howItWorks}</h2>
            <div className="features-grid">
              <div className="feature">
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>1</div>
                <h3>{t.step1}</h3>
                <p>{t.step1Desc}</p>
              </div>
              <div className="feature">
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>2</div>
                <h3>{t.step2}</h3>
                <p>{t.step2Desc}</p>
              </div>
              <div className="feature">
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>3</div>
                <h3>{t.step3}</h3>
                <p>{t.step3Desc}</p>
              </div>
              <div className="feature">
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>4</div>
                <h3>{t.step4}</h3>
                <p>{t.step4Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="services" style={{background: 'white'}}>
          <div className="container">
            <h2 className="section-title">{t.industriesWeServe}</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🏠</div>
                <h3>{t.residential}</h3>
                <p>{t.residentialDesc}</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🏢</div>
                <h3>{t.commercial}</h3>
                <p>{t.commercialDesc}</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🏭</div>
                <h3>{t.industrial}</h3>
                <p>{t.industrialDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
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

        {/* Final CTA Section */}
        <section className="hero" style={{padding: '4rem 0'}}>
          <div className="container">
            <div className="hero-content">
              <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{t.finalCta}</h2>
              <p className="hero-description" style={{marginBottom: '2rem'}}>
                {t.finalCtaText}
              </p>
              <button className="cta-button" style={{fontSize: '1.3rem', padding: '1.2rem 3rem'}}>
                {t.requestInspection}
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </>
  );
}