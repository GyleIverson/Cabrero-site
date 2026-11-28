// Simple bilingual switcher for Cabrero App promo site
const translations = {
  es: {
    title: "Cabrero App",
    subtitle: "Menos caminar. Encuentra clientes. Más ventas.",
    heroPitch: "Menos caminar. Encuentra clientes. Más ventas. Consigue la Cabrero App.",
    heroText: "Solo activa el seguimiento cuando sales a vender. La app registra tu ruta y horarios automáticamente. Avisamos a los bebedores cuándo y dónde sueles pasar para que te encuentren. Puedes compartir tu ubicación al minuto para que planifiquen mejor. También ves dónde están los bebedores ahora y en el pasado, para acortar tus caminatas y vender más rápido.",
    ctaDownload: "Regístrate como Tester",
    howTitle: "Cómo funciona (muy simple)",
    step1: "1. Activa y listo",
    step1Text: "Enciende el seguimiento cuando sales a vender. Nosotros registramos tu camino y horarios. Tú solo vendes.",
    step2: "2. Los clientes te encuentran",
    step2Text: "Avisamos a los bebedores cuándo y dónde sueles pasar. Puedes compartir tu ubicación al minuto para que te esperen.",
    step3: "3. Vende más, camina menos",
    step3Text: "Ve dónde están los bebedores ahora y históricamente. Planifica rutas más cortas y vende toda la leche más rápido.",
    benefitsTitle: "¿Por qué los cabreros usan la app?",
    benefit1: "Menos caminar: los clientes te encuentran en tu ruta habitual",
    benefit2: "Vende más rápido viendo dónde están los bebedores",
    benefit3: "Control total: activa o pausa el seguimiento cuando quieras",
    benefit4: "Cero complicaciones: solo enciende la app al salir",
    footerNote: "Disponible para Android. Únete al testing cerrado en Google Play.",
    termsLink: "Términos de Uso",
    privacyLink: "Política de Privacidad"
  },
  en: {
    title: "Cabrero App",
    subtitle: "Less walking. Find customers. More sales.",
    heroPitch: "Less walking. Find customers. More sales. Get the Cabrero App.",
    heroText: "Just turn tracking on when you go out to sell. The app automatically records your route and times. We let drinkers know when and where you usually travel so they can meet you. You can even share your location up to the minute so they can plan better. You also see where drinkers are right now and historically, so you can shorten your walks and sell out quicker.",
    ctaDownload: "Register as Tester",
    howTitle: "How it works (very simple)",
    step1: "1. Turn on and go",
    step1Text: "Turn tracking on when you go out to sell. We record your path and times. You just sell.",
    step2: "2. Customers find you",
    step2Text: "We tell drinkers when and where you usually pass. You can share your location up to the minute so they can wait for you.",
    step3: "3. Sell more, walk less",
    step3Text: "See where drinkers are now and historically. Plan shorter routes and sell all your milk faster.",
    benefitsTitle: "Why shepherds use the app",
    benefit1: "Less walking: customers find you on your usual route",
    benefit2: "Sell faster by seeing where drinkers are located",
    benefit3: "Full control: turn tracking on or off whenever you want",
    benefit4: "Zero hassle: just turn the app on when you leave",
    footerNote: "Available for Android. Join the Google Play closed testing.",
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