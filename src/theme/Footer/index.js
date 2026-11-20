import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const translations = {
  en: {
    tagline: 'Clash of Clans tools for everyone',
    labels: ['Discord Bot', 'Mobile App', 'Dashboard', 'Docs', 'GitHub', 'API', 'Features', 'Need Help?', 'Open Source', 'Support Us', 'Privacy Policy', 'Terms of Service'],
    legal: 'This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell.',
    copyright: 'All rights reserved.',
    built: 'Built with Docusaurus.',
  },
  nl: {
    tagline: 'Clash of Clans-tools voor iedereen',
    labels: ['Discord-bot', 'Mobiele app', 'Hoofdpaneel', 'Documentatie', 'GitHub', 'API', 'Functies', 'Hulp nodig?', 'Open source', 'Steun ons', 'Privacybeleid', 'Servicevoorwaarden'],
    legal: 'Deze inhoud is niet gelieerd aan, goedgekeurd, gesponsord of specifiek toegestaan door Supercell.',
    copyright: 'Alle rechten voorbehouden.',
    built: 'Gebouwd met Docusaurus.',
  },
  fr: {
    tagline: 'Des outils Clash of Clans pour tous',
    labels: ['Bot Discord', 'Application mobile', 'Tableau de bord', 'Documentation', 'GitHub', 'API', 'Fonctionnalités', 'Besoin d’aide ?', 'Open Source', 'Nous soutenir', 'Politique de confidentialité', 'Conditions d’utilisation'],
    legal: 'Ce contenu n’est ni affilié à Supercell, ni approuvé, sponsorisé ou spécifiquement autorisé par Supercell.',
    copyright: 'Tous droits réservés.',
    built: 'Créé avec Docusaurus.',
  },
};

export default function Footer() {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const locale = Object.hasOwn(translations, currentLocale) ? currentLocale : 'en';
  const text = translations[locale];
  const main = `https://clashk.ing${locale === 'en' ? '' : `/${locale}`}`;
  const urls = [
    'https://invite.clashk.ing/', `${main}/#app`, 'https://clashk.ing/servers',
    'https://docs.clashk.ing/', 'https://github.com/ClashKingInc', 'https://api.clashk.ing/',
    `${main}/features`, `${main}/help`, `${main}/open-source`, `${main}/support`,
    `${main}/privacy`, `${main}/terms`,
  ];
  const lightLogo = useBaseUrl('/img/logos/clashking-wordmark-light.svg');
  const darkLogo = useBaseUrl('/img/logos/clashking-wordmark-dark.svg');

  return (
    <footer className="footer ck-footer">
      <div className="container ck-footer-inner">
        <div className="ck-footer-brand">
          <a href={`${main}/`} aria-label="ClashKing">
            <img className="ck-footer-logo ck-footer-logo--light" src={lightLogo} alt="ClashKing" width="168" height="46" />
            <img className="ck-footer-logo ck-footer-logo--dark" src={darkLogo} alt="" width="168" height="46" />
          </a>
          <p>{text.tagline}</p>
        </div>
        <nav className="ck-footer-links" aria-label="ClashKing">
          {urls.map((url, index) => <a key={url} href={url}>{text.labels[index]}</a>)}
        </nav>
        <div className="ck-footer-legal">
          <p>{text.legal}</p>
          <p>© {new Date().getFullYear()} ClashKing. {text.copyright} · {text.built}</p>
        </div>
      </div>
    </footer>
  );
}
