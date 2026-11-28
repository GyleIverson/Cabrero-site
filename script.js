// Simple bilingual switcher for Cabrero App promo site
const translations = {
  es: {
    title: "Cabrero App",
    subtitle: "Leche de cabra fresca cerca de ti en Ciudad de Guatemala",
    heroPitch: "Menos caminar. Encuentra clientes. Más ventas. Consigue la Cabrero App",
    heroText: "Cientos de cabreros recorren Ciudad de Guatemala y alrededores vendiendo leche de cabra fresca por vaso o litro. Sus rutas son difíciles de descubrir. La Cabrero App rastrea los caminos de los cabreros y predice cuándo estarán cerca de ti.",
    ctaDownload: "Descargar para Android",
    howTitle: "Cómo funciona",
    forCabreros: "Para Cabreros",
    forCabrerosText: "Comparte tu ruta y horario. Más clientes te encuentran. Vende más leche con menos incertidumbre.",
    forDrinkers: "Para Bebedores",
    forDrinkersText: "Ve qué cabreros están cerca o llegarán pronto. Consigue leche fresca sin adivinar rutas.",
    benefitsTitle: "¿Por qué Cabrero App?",
    benefit1: "Seguimiento y predicción de rutas en tiempo real",
    benefit2: "Conecta cabreros directamente con compradores",
    benefit3: "Apoya a productores locales de leche de cabra",
    benefit4: "Emparejamiento simple basado en ubicación",
    footerNote: "Actualmente disponible para Android. Alojado en GitHub y Cloudflare.",
    termsLink: "Términos de Uso",
    privacyLink: "Política de Privacidad"
  },
  en: {
    title: "Cabrero App",
    subtitle: "Fresh goat milk near you in Guatemala City",
    heroPitch: "Less walking. More customers. More sales. Get the Cabrero App.",
    heroText: "Hundreds of shepherds roam Guatemala City and surrounding areas selling fresh goat milk by the cup or liter. Their routes are hard to discover. The Cabrero App tracks the shepherds' paths and predicts when they will be near you.",
    ctaDownload: "Download for Android",
    howTitle: "How it works",
    forCabreros: "For Shepherds",
    forCabrerosText: "Share your route and schedule. More customers find you. Sell more milk with less uncertainty.",
    forDrinkers: "For Drinkers",
    forDrinkersText: "See which shepherds are nearby or arriving soon. Get fresh milk without guessing routes.",
    benefitsTitle: "Why Cabrero App?",
    benefit1: "Real-time route tracking and prediction",
    benefit2: "Connects shepherds directly with buyers",
    benefit3: "Supports local goat milk producers",
    benefit4: "Simple location-based matching",
    footerNote: "Currently available for Android. Hosted on GitHub and Cloudflare.",
    termsLink: "Terms of Use",
    privacyLink: "Privacy Policy"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('cabrero-lang', lang);
}

document.querySelectorAll('.lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Init
const saved = localStorage.getItem('cabrero-lang') || 'es';
setLanguage(saved);
