/**
 * Szabó Music Company — Language System
 * Supports: English (en) | Hungarian (hu)
 * Usage: add data-i18n="key" to any element.
 *        For placeholders: data-i18n-placeholder="key"
 *        For aria-labels:  data-i18n-aria="key"
 */

const TRANSLATIONS = {
  en: {
    /* ── Navigation ─────────────────────────────────── */
    "nav.home":           "Homepage",
    "nav.about":          "About Us",
    "nav.artists":        "Artists",
    "nav.artists.world":  "World Class Musicians",
    "nav.artists.roster": "Full Roster",
    "nav.artists.musicians": "Musicians",
    "nav.contact":        "Contact",
    "nav.book":           "Book Talent",
    "nav.lang":           "HU",
    "nav.lang.label":     "Switch to Hungarian",

    /* ── Index — Hero ───────────────────────────────── */
    "hero.tagline":       "Est. Budapest, Hungary",
    "hero.title":         "Szabó Music Company",
    "hero.subtitle":      "Where World-Class Musicians Meet World-Class Voyages",
    "hero.desc":          "Curating once in a lifetime musical experiences for the luxury cruise and hotel industry.",
    "hero.showreel":      "Watch Showreel",
    "hero.discover":      "Discover",

    /* ── Index — Services ───────────────────────────── */
    "services.label":     "What We Do",
    "services.title":     "Tailored Musical Excellence",
    "services.desc":      "From intimate solo performers to full orchestras, we curate world-class entertainment for the most prestigious cruise lines and luxury hotels.",
    "services.booking.title":   "Talent Booking",
    "services.booking.desc":    "Seamless booking and contract management for musicians, ensuring every detail is handled with professionalism.",
    "services.partnership.title": "Exclusive Partnerships",
    "services.partnership.desc":  "Long-term relationships with the world's most prestigious cruise lines and luxury hospitality brands.",
    "services.curation.title":  "Curated Programs",
    "services.curation.desc":   "Bespoke entertainment programs designed to elevate the onboard experience for every class of guest.",
    "services.quality.title":   "Quality Assurance",
    "services.quality.desc":    "Every artist is personally vetted to ensure the highest standards of performance and professionalism.",

    /* ── Index — About ──────────────────────────────── */
    "about.label":        "About Us",
    "about.title":        "Bridging",
    "about.title.accent": "Talent & Opportunity",
    "about.p1":           "Szabó Music Company was founded with a singular vision: to connect the world's most gifted musicians with the extraordinary stages of luxury cruise lines and five-star hotels. Based in Budapest, we have cultivated a network spanning continents.",
    "about.p2":           "Our founder, Miklos Szabó, brings decades of industry expertise to every partnership. We don't just book musicians — we craft musical journeys that become the defining memories of a voyage.",
    "about.location":     "Budapest, Hungary",
    "about.since":        "Since XXXX",
    "about.reach":        "Global Reach",
    "about.founder.name": "Miklos Szabó",
    "about.founder.role": "Founder & Director",

    /* ── Index — Talent ─────────────────────────────── */
    "talent.title":       "World Class Musicians",
    "talent.desc":        "Our roster spans soloists, duos, quartets and full bands — each artist hand-picked for excellence.",
    "talent.view":        "View Full Roster",
    "talent.soloist":     "Soloist",
    "talent.pianist":     "Pianist",
    "talent.duo":         "Duo",

    /* ── Index — Contact ────────────────────────────── */
    "contact.label":      "Get In Touch",
    "contact.title":      "Start Your Journey",
    "contact.desc":       "Ready to elevate your guests' experience? Let us find the perfect musical talent for your venue.",
    "contact.fname":      "First Name",
    "contact.lname":      "Last Name",
    "contact.email":      "Email",
    "contact.type":       "I am a...",
    "contact.type.opt0":  "Select an option",
    "contact.type.opt1":  "Musician seeking opportunities",
    "contact.type.opt2":  "Cruise line representative",
    "contact.type.opt3":  "Other inquiry",
    "contact.message":    "Message",
    "contact.send":       "Send Message",
    "contact.office":     "Our Office",
    "contact.emailus":    "Email Us",
    "contact.callus":     "Call Us",
    "contact.response":   "Response Time",
    "contact.response.v": "We typically respond within 24 hours during business days",
    "contact.fn.ph":      "John",
    "contact.ln.ph":      "Smith",
    "contact.email.ph":   "john@example.com",
    "contact.msg.ph":     "Tell us about your requirements...",

    /* ── Index — Partners ───────────────────────────── */
    "partners.label":     "Trusted by the World's Finest Fleets",

    /* ── Footer ─────────────────────────────────────── */
    "footer.desc":        "The premier talent agency for the global cruise industry. Connecting luxury fleets with world-class performers since XXXX.",
    "footer.company":     "Company",
    "footer.company.about": "About Us",
    "footer.company.careers": "Careers",
    "footer.company.press":   "Press",
    "footer.company.contact": "Contact",
    "footer.talent":      "For Talent",
    "footer.talent.submit": "Submit Profile",
    "footer.talent.auditions": "Auditions",
    "footer.talent.resources": "Artist Resources",
    "footer.talent.faqs": "FAQs",
    "footer.contact":     "Contact",
    "footer.copyright":   "© 2024 Szabo Music Company. All rights reserved.",
    "footer.privacy":     "Privacy Policy",
    "footer.terms":       "Terms of Service",

    /* ── Musicians page ─────────────────────────────── */
    "musicians.title":    "Our Musicians",
    "musicians.desc":     "Discover exceptional talent across all musical formats. From intimate solo performances to grand ensembles, we represent world-class musicians for the luxury cruise industry.",
    "musicians.solos.title": "Solo Acts",
    "musicians.solos.desc":  "Intimate, versatile performers who command any stage with effortless artistry.",
    "musicians.duos.title":  "Duos",
    "musicians.duos.desc":   "Dynamic pairings that blend seamlessly into any atmosphere, from cocktail hour to dinner service.",
    "musicians.bands.title": "Bands",
    "musicians.bands.desc":  "Full ensembles that transform any venue into a world-class concert experience.",
    "musicians.see":      "See All",
    "musicians.cta.title":  "Ready to Book World-Class Talent?",
    "musicians.cta.desc":   "Connect with our team to discover the perfect musicians for your cruise line. From intimate performances to grand showcases, we have talent for every venue.",
    "musicians.cta.btn":    "Get in Touch",

    /* ── Soloists page ──────────────────────────────── */
    "soloists.breadcrumb": "Musicians",
    "soloists.section":    "Our Roster",
    "soloists.title":      "Solo Acts",
    "soloists.desc":       "Intimate, versatile, unforgettable. Our soloists bring world-class artistry to every stage — from the grand atrium to the private lounge.",

    /* ── Bands page ─────────────────────────────────── */
    "bands.section":       "Our Roster",
    "bands.title":         "Bands & Ensembles",
    "bands.desc":          "Full ensembles that transform any venue into a world-class concert experience. From jazz quartets to contemporary pop bands.",

    /* ── Duos page ──────────────────────────────────── */
    "duos.section":        "Our Roster",
    "duos.title":          "Duos",
    "duos.desc":           "Perfect harmony. Our duos offer the ideal blend of intimacy and sophistication for any setting.",

    /* ── Artist card shared labels ───────────────────── */
    "artist.book":         "Book This Artist",
    "artist.profile":      "View Profile",
  },

  hu: {
    /* ── Navigation ─────────────────────────────────── */
    "nav.home":           "Főoldal",
    "nav.about":          "Rólunk",
    "nav.artists":        "Előadók",
    "nav.artists.world":  "Világszínvonalú Zenészek",
    "nav.artists.roster": "Teljes Névsor",
    "nav.artists.musicians": "Zenészek",
    "nav.contact":        "Kapcsolat",
    "nav.book":           "Előadó Foglalása",
    "nav.lang":           "EN",
    "nav.lang.label":     "Váltás angolra",

    /* ── Index — Hero ───────────────────────────────── */
    "hero.tagline":       "Alapítva. Budapest, Magyarország",
    "hero.title":         "Szabó Music Company",
    "hero.subtitle":      "Ahol Világszínvonalú Zenészek Találkoznak Világ Körüli Utazásokkal",
    "hero.desc":          "Egyedülálló zenei élményeket kínálunk a luxushajózási és szállodai ipar számára.",
    "hero.showreel":      "Showreel Megtekintése",
    "hero.discover":      "Felfedezés",

    /* ── Index — Services ───────────────────────────── */
    "services.label":     "Amit Kínálunk",
    "services.title":     "Személyre Szabott Zenei Kiválóság",
    "services.desc":      "Intim szólóelőadóktól a teljes zenekarokig — a világ legelőkelőbb hajóstársaságai és luxusszállodái számára kínálunk világszínvonalú szórakoztatást.",
    "services.booking.title":   "Tehetségfoglalás",
    "services.booking.desc":    "Zökkenőmentes foglalás és szerződéskezelés zenészek számára, minden részlet professzionális intézésével.",
    "services.partnership.title": "Exkluzív Partnerségek",
    "services.partnership.desc":  "Hosszú távú kapcsolatok a világ legelőkelőbb hajóstársaságaival és luxushospitalitás márkáival.",
    "services.curation.title":  "Kurált Programok",
    "services.curation.desc":   "Egyedi szórakoztatási programok, amelyek emelik a fedélzeti élményt minden vendégkategória számára.",
    "services.quality.title":   "Minőségbiztosítás",
    "services.quality.desc":    "Minden előadót személyesen ellenőrizünk, hogy biztosítsuk a legmagasabb előadói és szakmai színvonalat.",

    /* ── Index — About ──────────────────────────────── */
    "about.label":        "Rólunk",
    "about.title":        "A Híd",
    "about.title.accent": "Tehetség és Lehetőség Között",
    "about.p1":           "A Szabó Music Company egyetlen vízióval jött létre: összekötni a világ legtehetségesebb zenészeit a luxushajók és ötcsillagos szállodák rendkívüli színpadaival. Budapesti székhelyünkkel kontinenseken átívelő hálózatot építettünk ki.",
    "about.p2":           "Alapítónk, Szabó Miklós évtizedes iparági tapasztalatot hoz minden partnerségbe. Nem csupán zenészeket foglalunk le — zenei utazásokat alkotunk, amelyek egy-egy hajóút meghatározó emlékévé válnak.",
    "about.location":     "Budapest, Magyarország",
    "about.since":        "XXXX óta",
    "about.reach":        "Globális Jelenlét",
    "about.founder.name": "Szabó Miklós",
    "about.founder.role": "Alapító & Igazgató",

    /* ── Index — Talent ─────────────────────────────── */
    "talent.title":       "Világszínvonalú Zenészek",
    "talent.desc":        "Névsorunk szólistákat, duókat, kvartetteket és teljes zenekarokat foglal magában — minden előadót a kiválóságért választottunk ki.",
    "talent.view":        "Teljes Névsor Megtekintése",
    "talent.soloist":     "Szólista",
    "talent.pianist":     "Zongorista",
    "talent.duo":         "Duó",

    /* ── Index — Contact ────────────────────────────── */
    "contact.label":      "Lépjen Kapcsolatba",
    "contact.title":      "Kezdje El Az Utazást",
    "contact.desc":       "Készen áll vendégei élményének megemelésére? Megtaláljuk Önnek a tökéletes zenei tehetséget.",
    "contact.fname":      "Keresztnév",
    "contact.lname":      "Vezetéknév",
    "contact.email":      "E-mail",
    "contact.type":       "Én vagyok...",
    "contact.type.opt0":  "Válasszon egy lehetőséget",
    "contact.type.opt1":  "Lehetőségeket kereső zenész",
    "contact.type.opt2":  "Hajóstársaság képviselője",
    "contact.type.opt3":  "Egyéb megkeresés",
    "contact.message":    "Üzenet",
    "contact.send":       "Üzenet Küldése",
    "contact.office":     "Irodánk",
    "contact.emailus":    "Írjon Nekünk",
    "contact.callus":     "Hívjon Minket",
    "contact.response":   "Válaszidő",
    "contact.response.v": "Általában 24 órán belül válaszolunk munkanapokon",
    "contact.fn.ph":      "Kovács",
    "contact.ln.ph":      "János",
    "contact.email.ph":   "kovacs.janos@pelda.hu",
    "contact.msg.ph":     "Írja le igényeit...",

    /* ── Index — Partners ───────────────────────────── */
    "partners.label":     "A Világ Legjobb Flottái Bíznak Bennünk",

    /* ── Footer ─────────────────────────────────────── */
    "footer.desc":        "A globális hajózási ipar vezető tehetségügynöksége. Luxusflottákat kötünk össze világszínvonalú előadókkal XXXX óta.",
    "footer.company":     "Cég",
    "footer.company.about": "Rólunk",
    "footer.company.careers": "Karrier",
    "footer.company.press":   "Sajtó",
    "footer.company.contact": "Kapcsolat",
    "footer.talent":      "Előadóknak",
    "footer.talent.submit": "Profil Beküldése",
    "footer.talent.auditions": "Meghallgatások",
    "footer.talent.resources": "Előadói Erőforrások",
    "footer.talent.faqs": "GYIK",
    "footer.contact":     "Kapcsolat",
    "footer.copyright":   "© 2024 Szabo Music Company. Minden jog fenntartva.",
    "footer.privacy":     "Adatvédelmi Szabályzat",
    "footer.terms":       "Szolgáltatási Feltételek",

    /* ── Musicians page ─────────────────────────────── */
    "musicians.title":    "Zenészeink",
    "musicians.desc":     "Fedezzen fel kivételes tehetségeket minden zenei formátumban. Intim szólóelőadásoktól a nagyzenekarokig — a luxushajózási ipar számára képviselünk világszínvonalú zenészeket.",
    "musicians.solos.title": "Szólóelőadók",
    "musicians.solos.desc":  "Intim, sokoldalú előadók, akik könnyedén uralnak bármilyen színpadot.",
    "musicians.duos.title":  "Duók",
    "musicians.duos.desc":   "Dinamikus párosok, amelyek zökkenőmentesen illeszkednek bármilyen hangulatba, a koktélóráktól a vacsorafelszolgálásig.",
    "musicians.bands.title": "Zenekarok",
    "musicians.bands.desc":  "Teljes együttesek, amelyek bármely helyszínt világszínvonalú koncertélménnyé varázsolnak.",
    "musicians.see":      "Összes Megtekintése",
    "musicians.cta.title":  "Készen Áll Világszínvonalú Tehetséget Foglalni?",
    "musicians.cta.desc":   "Vegye fel a kapcsolatot csapatunkkal, hogy megtalálja a tökéletes zenészeket hajóstársasága számára.",
    "musicians.cta.btn":    "Kapcsolatfelvétel",

    /* ── Soloists page ──────────────────────────────── */
    "soloists.breadcrumb": "Zenészek",
    "soloists.section":    "Névsorunk",
    "soloists.title":      "Szólóelőadók",
    "soloists.desc":       "Intim, sokoldalú, felejthetetlen. Szólistáink világszínvonalú művészetet hoznak minden színpadra — a nagy aulától a privát szalonig.",

    /* ── Bands page ─────────────────────────────────── */
    "bands.section":       "Névsorunk",
    "bands.title":         "Zenekarok & Együttesek",
    "bands.desc":          "Teljes együttesek, amelyek bármely helyszínt világszínvonalú koncertélménnyé varázsolnak. Jazz kvartettektől kortárs pop zenekarokig.",

    /* ── Duos page ──────────────────────────────────── */
    "duos.section":        "Névsorunk",
    "duos.title":          "Duók",
    "duos.desc":           "Tökéletes harmónia. Duóink az intimitás és a kifinomultság ideális keverékét kínálják bármilyen környezetben.",

    /* ── Artist card shared labels ───────────────────── */
    "artist.book":         "Előadó Foglalása",
    "artist.profile":      "Profil Megtekintése",
  }
};

/* ─── Engine ──────────────────────────────────────────────────────────────── */

const DEFAULT_LANG = 'en';

function getCurrentLang() {
  return localStorage.getItem('smc-lang') || DEFAULT_LANG;
}

function setLang(lang) {
  localStorage.setItem('smc-lang', lang);
  applyLang(lang);
  document.documentElement.lang = lang;
}

function t(key, lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
  return dict[key] || TRANSLATIONS[DEFAULT_LANG][key] || key;
}

function applyLang(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  /* Aria labels */
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  /* Update toggle button appearance */
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    const enSpan = btn.querySelector('.lang-en');
    const huSpan = btn.querySelector('.lang-hu');
    if (enSpan && huSpan) {
      enSpan.classList.toggle('lang-active', lang === 'en');
      huSpan.classList.toggle('lang-active', lang === 'hu');
    }
  });
}

function toggleLang() {
  const current = getCurrentLang();
  setLang(current === 'en' ? 'hu' : 'en');
}

/* ─── Init ────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const lang = getCurrentLang();
  document.documentElement.lang = lang;
  applyLang(lang);

  /* Wire up all toggle buttons */
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleLang);
  });
});
