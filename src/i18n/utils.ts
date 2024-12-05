import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string | undefined) {
    return key ? ui[lang][key] || ui[defaultLang][key] || key : "";
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string | undefined, l: string = lang) {
    return path ? !showDefaultLang && l === defaultLang ? path : `/${l}${path}` : "";
  }
}
