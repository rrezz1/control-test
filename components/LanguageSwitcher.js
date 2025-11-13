export default function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="language-switcher">
      <button 
        onClick={() => setLanguage('en')} 
        className={language === 'en' ? 'active' : ''}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('sq')} 
        className={language === 'sq' ? 'active' : ''}
      >
        SQ
      </button>
    </div>
  );
}