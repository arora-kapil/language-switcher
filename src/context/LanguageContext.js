import React, { createContext, useState } from 'react'

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;