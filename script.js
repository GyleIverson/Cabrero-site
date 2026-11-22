const translations = {
  en: {
    title: "Cabrero App",
    subtitle: "Fresh goat milk near you in Guatemala City",
    heroText: "Hundreds of cabreros roam Guatemala City and surrounding areas selling fresh goat milk by the cup or liter. Their routes are hard to discover. Cabrero App tracks shepherds’ paths and forecasts when they will be close to you.",
    ctaDownload: "Download for Android",
    howTitle: "How it works",
    forCabreros: "For Cabreros",
    forCabrerosText: "Share your route and schedule. More customers find you. Sell more milk with less uncertainty.",
    forDrinkers: "For Drinkers",
    forDrinkersText: "See which shepherds are nearby or coming soon. Get fresh leche without guessing routes.",
    benefitsTitle: "Why Cabrero App?",
    benefits: [
      "Real-time route tracking and forecasting",
      "Connects shepherds directly with buyers",
      "Supports local goat milk producers",
      "Simple location-based matching"
    ],
    footerNote: "Currently available for Android. Hosted on GitHub & Cloudflare.",
    termsLink: "Terms of Use",
    privacyLink: "Privacy Policy",
    back: "← Back to Cabrero App"
  },
  es: {
    title: "App Cabrero",
    subtitle: "Leche de cabra fresca cerca de ti en Ciudad de Guatemala",
    heroText: "Cientos de cabreros recorren Ciudad de Guatemala y alrededores vendiendo leche de cabra fresca por vaso o litro. Sus rutas son difíciles de descubrir. La App Cabrero rastrea los caminos de los cabreros y predice cuándo estarán cerca de ti.",
    ctaDownload: "Descargar para Android",
    howTitle: "Cómo funciona",
    forCabreros: "Para Cabreros",
    forCabrerosText: "Comparte tu ruta y horario. Más clientes te encuentran. Vende más leche con menos incertidumbre.",
    forDrinkers: "Para Bebedores",
    forDrinkersText: "Ve qué cabreros están cerca o llegarán pronto. Consigue leche fresca sin adivinar rutas.",
    benefitsTitle: "¿Por qué App Cabrero?",
    benefits: [
      "Seguimiento y predicción de rutas en tiempo real",
      "Conecta cabreros directamente con compradores",
      "Apoya a productores locales de leche de cabra",
      "Emparejamiento simple basado en ubicación"
    ],
    footerNote: "Actualmente disponible para Android. Alojado en GitHub y Cloudflare.",
    termsLink: "Términos de Uso",
    privacyLink: "Política de Privacidad",
    back: "← Volver a App Cabrero"
  }
};

let currentLang = localStorage.getItem('cabrero-lang') || 'es';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('cabrero-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] && !Array.isArray(translations[lang][key])) {
      el.textContent = translations[lang][key];
    }
  });
  // Update benefits list if present
  const list = document.getElementById('benefits-list');
  if (list) {
    list.innerHTML = '';
    translations[lang].benefits.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      list.appendChild(li);
    });
  }
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  if (typeof window.onLangChange === 'function') window.onLangChange(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  // Allow legal pages to hook in
  if (typeof window.onLangChange === 'function') window.onLangChange(currentLang);
});