import React, {useEffect, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import {useLocation} from '@docusaurus/router';

const copy = {
  en: {settings: 'Settings', language: 'Language', theme: 'Theme', light: 'Light', dark: 'Dark', system: 'System', back: 'Back'},
  nl: {settings: 'Instellingen', language: 'Taal', theme: 'Thema', light: 'Licht', dark: 'Donker', system: 'Systeem', back: 'Terug'},
  fr: {settings: 'Paramètres', language: 'Langue', theme: 'Thème', light: 'Clair', dark: 'Sombre', system: 'Système', back: 'Retour'},
};
const names = {en: 'English', nl: 'Nederlands', fr: 'Français'};

export default function SettingsMenu({mobile}) {
  const {i18n: {currentLocale, locales}} = useDocusaurusContext();
  const {colorModeChoice, setColorMode} = useColorMode();
  const alternate = useAlternatePageUtils();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [languages, setLanguages] = useState(false);
  const root = useRef(null);
  const trigger = useRef(null);
  const t = copy[currentLocale] || copy.en;
  useEffect(() => {
    function onPointer(event) { if (root.current && !root.current.contains(event.target)) setOpen(false); }
    function onKey(event) { if (event.key === 'Escape' && open) { setOpen(false); setLanguages(false); trigger.current?.focus(); } }
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onPointer); document.removeEventListener('keydown', onKey); };
  }, [open]);
  if (mobile) return null;
  return <div className="ck-doc-settings" ref={root}>
    <button ref={trigger} type="button" className="ck-settings-trigger" aria-label={t.settings} aria-expanded={open} onClick={() => {setOpen(!open); setLanguages(false);}}>
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.09a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.09a2 2 0 0 1 1 1.73v.5a2 2 0 0 1-1 1.73l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.09a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.09a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.73v-.5a2 2 0 0 1 1-1.73l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.09a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
    </button>
    {open && <div className="ck-settings-panel">
      {languages ? <><div className="ck-settings-heading"><button type="button" onClick={() => setLanguages(false)} aria-label={t.back}>←</button><strong>{t.language}</strong></div>
        {locales.map(locale => <a key={locale} className="ck-settings-locale" href={`${alternate.createUrl({locale, fullyQualified: false})}${location.search}${location.hash}`} lang={locale} aria-current={locale === currentLocale ? 'true' : undefined}><span>{names[locale] || locale}</span><small>{locale.toUpperCase()}</small>{locale === currentLocale && '✓'}</a>)}
      </> : <><button type="button" className="ck-settings-language" onClick={() => setLanguages(true)}><span><small>{t.language}</small><strong>{names[currentLocale] || currentLocale}</strong></span><span aria-hidden="true">›</span></button>
        <fieldset><legend>{t.theme}</legend><div className="ck-settings-themes">{['light', 'dark', 'system'].map(mode => <button key={mode} type="button" aria-pressed={colorModeChoice === (mode === 'system' ? null : mode)} onClick={() => {setColorMode(mode === 'system' ? null : mode); setOpen(false);}}><span className={`ck-settings-preview ck-settings-preview--${mode}`} aria-hidden="true"/><span>{t[mode]}</span>{colorModeChoice === (mode === 'system' ? null : mode) && <b aria-hidden="true">✓</b>}</button>)}</div></fieldset>
      </>}
    </div>}
  </div>;
}
