import React, { useContext } from 'react'
import { LanguageContext } from './context/LanguageContext'

function App() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const texts = {
    en: {
      greeting: "Hello, World!",
      button: "Switch to Spanish",
    },
    es: {
      greeting: "¡Hola, Mundo!",
      button: "Cambiar a Inglés",
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>{texts[language].greeting}</h1>
        <button onClick={toggleLanguage}>{texts[language].button}</button>
      </header>
    </div>
  );
}

export default App