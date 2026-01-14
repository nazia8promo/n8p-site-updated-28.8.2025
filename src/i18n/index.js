import en from "./en.js";
import ru from "./ru.js";
import kz from "./kz.js";

const dictionaries = { en, ru, kz };

let currentLang = localStorage.getItem("lang") || "en";

export function setLang(lang) {
  if (!dictionaries[lang]) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  window.dispatchEvent(new Event("route-change"));
}

export function t(key) {
  const parts = key.split(".");
  let value = dictionaries[currentLang];

  for (const part of parts) {
    if (!value || typeof value !== "object") return key;
    value = value[part];
  }

  return value ?? key;
}

export function getLang() {
  return currentLang;
}
