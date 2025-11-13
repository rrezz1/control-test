import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ language, setLanguage }) {
  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact"
    },
    sq: {
      home: "Kryefaqja",
      about: "Rreth Nesh",
      services: "Shërbimet",
      contact: "Kontakt"
    }
  };

  const t = translations[language];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Control Test</h1>
          </div>
          <nav className="nav">
            <Link href="/">{t.home}</Link>
            <Link href="/about">{t.about}</Link>
            <Link href="/services">{t.services}</Link>
            <Link href="/contact">{t.contact}</Link>
          </nav>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
}