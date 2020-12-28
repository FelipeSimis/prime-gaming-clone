import React, { useCallback, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Sidebar } from '../index';

import Loot from '../../pages/Loot';
import PrimeVideo from '../../pages/PrimeVideo';

import {
  Container,
  LanguageButton,
  GlobalIcon,
  ArrowDownIcon,
  SelectedLanguage,
  LanguagesContainer,
  Language,
} from './styles';

const Layout: React.FC = () => {
  const [isLangPageOpen, setIsLangPageOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleOpenSelectLanguage = useCallback(() => {
    setIsLangPageOpen(prevState => !prevState);
  }, []);

  const handleSelectPageLanguage = useCallback((lang: string) => {
    setLanguage(lang);
    setIsLangPageOpen(false);
  }, []);

  return (
    <Container>
      <LanguageButton onClick={handleOpenSelectLanguage}>
        <GlobalIcon />

        <SelectedLanguage>{language}</SelectedLanguage>

        <ArrowDownIcon />
      </LanguageButton>

      {isLangPageOpen && (
        <LanguagesContainer>
          <Language
            onClick={() => handleSelectPageLanguage('en')}
            className={language === 'en' && 'active'}
          >
            English
          </Language>
          <Language
            onClick={() => handleSelectPageLanguage('de')}
            className={language === 'de' && 'active'}
          >
            Deutsch
          </Language>
          <Language
            onClick={() => handleSelectPageLanguage('en_uk')}
            className={language === 'en_uk' && 'active'}
          >
            English - UK
          </Language>
          <Language
            onClick={() => handleSelectPageLanguage('es')}
            className={language === 'es' && 'active'}
          >
            Español - España
          </Language>
          <Language
            onClick={() => handleSelectPageLanguage('fr')}
            className={language === 'fr' && 'active'}
          >
            Français
          </Language>
          <Language
            onClick={() => handleSelectPageLanguage('it')}
            className={language === 'it' && 'active'}
          >
            Italiano
          </Language>
          <Language
            onClick={() => handleSelectPageLanguage('nl')}
            className={language === 'nl' && 'active'}
          >
            Nederlands
          </Language>
          <Language
            onClick={() => handleSelectPageLanguage('pt')}
            className={language === 'pt' && 'active'}
          >
            Português - Brasil
          </Language>
          <Language
            onClick={() => handleSelectPageLanguage('tr')}
            className={language === 'tr' && 'active'}
          >
            Türkçe
          </Language>
        </LanguagesContainer>
      )}

      <Sidebar />

      <Switch>
        <Route path="/" exact component={Loot} />
        <Route path="/prime" component={PrimeVideo} />
      </Switch>
    </Container>
  );
};

export default Layout;
