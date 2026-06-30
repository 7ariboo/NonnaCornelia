import React, { useState, useEffect } from 'react';
import { Droplet, Leaf, Milk as MilkIcon, Award, Instagram, Facebook, Apple } from 'lucide-react';

const CssBow = () => (
  <div className="bow-motif">
    <div className="bow-left"></div>
    <div className="bow-right"></div>
    <div className="bow-knot"></div>
  </div>
);

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(Math.max((scrollY - 30) / 150, 0), 1);
  const stripesOpacity = progress;
  const borderOpacity = progress;
  const logoScale = 0.5 + (progress * 0.5); 
  const logoTranslateY = 60 * (1 - progress); 

  const pillStyle = {
    backgroundColor: `rgba(242, 237, 228, ${progress})`,
    borderColor: `rgba(212, 175, 55, ${progress * 0.3})`,
    boxShadow: `0 2px 8px rgba(0,0,0,${progress * 0.1})`,
    color: 'var(--color-forest)'
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full h-[70px] md:h-20 z-50 overflow-hidden ${progress > 0 ? 'shadow-md' : 'shadow-sm'}`}
      style={{
        borderBottom: `1px solid rgba(212, 175, 55, ${borderOpacity})`
      }}
    >
      {/* Base Background */}
      <div className="absolute inset-0 bg-cream pointer-events-none"></div>
      
      {/* Fading Regatta Stripes Background */}
      <div 
        className="absolute inset-0 regatta-stripes bg-fixed pointer-events-none"
        style={{ opacity: stripesOpacity }}
      ></div>
      <div 
        className="absolute inset-0 bg-forest pointer-events-none"
        style={{ opacity: stripesOpacity * 0.1 }}
      ></div>
      
      {/* 3-column grid: left nav | center logo | right nav */}
      <div className="relative z-10 h-full grid grid-cols-[1fr_auto_1fr] items-center px-3 md:px-10">
        {/* Left nav — aligned left */}
        <nav 
          className="justify-self-start flex items-center gap-2 md:gap-8 text-[8px] md:text-[11px] font-bold tracking-widest uppercase px-2 md:px-4 py-1.5 md:py-2 rounded-full border transition-colors duration-300 whitespace-nowrap"
          style={pillStyle}
        >
          <a href="#storia" className="hover:text-gold transition-colors">La Storia</a>
          <a href="#gusti" className="hover:text-gold transition-colors hidden sm:inline">I Gusti</a>
        </nav>

        {/* Center logo — stays in its own column */}
        <div 
          className="flex items-center justify-center pointer-events-none"
          style={{
            opacity: progress,
            transform: `translateY(${logoTranslateY}px) scale(${logoScale})`
          }}
        >
          <div className="w-16 md:w-36 flex items-center justify-center" style={{aspectRatio: '1.5/1'}}>
            <img src="/images/Logo.png" alt="Nonna Cornelia Logo" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Right nav — aligned right */}
        <div 
          className="justify-self-end flex items-center gap-2 md:gap-8 text-[8px] md:text-[11px] font-bold tracking-widest uppercase px-2 md:px-4 py-1.5 md:py-2 rounded-full border transition-colors duration-300 whitespace-nowrap"
          style={pillStyle}
        >
          <a href="#contatti" className="hover:text-gold transition-colors">Dove Siamo</a>
        </div>
      </div>
    </header>
  );
};

const OvalLogo = () => (
  <div className="w-[75%] md:w-[500px] mx-auto flex items-center justify-center relative z-10" style={{aspectRatio: '1.5/1'}}>
    <img src="/images/Logo.png" alt="Nonna Cornelia Logo" className="w-full h-auto object-contain drop-shadow-2xl" />
  </div>
);

const Hero = () => {
  return (
    <section className="relative h-screen pt-[70px] md:pt-20 regatta-stripes bg-fixed flex items-center justify-center border-b-2 border-gold overflow-hidden">
      <div className="absolute inset-0 bg-forest opacity-10 pointer-events-none"></div>
      <div className="relative z-10 flex flex-col items-center">
        <OvalLogo />
      </div>
      <div className="absolute bottom-[-12px] bg-cream px-4 shadow-sm z-20">
        <CssBow />
      </div>
    </section>
  );
};

const VideoSection = () => (
  <section className="relative h-screen flex items-center justify-center bg-forest overflow-hidden border-b-2 border-gold/30">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/VIDEO HOME.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10">
      <OvalLogo />
    </div>
  </section>
);

const StorySection = () => (
  <section id="storia" className="relative min-h-[80vh] flex items-center justify-center border-b border-gold/30 overflow-hidden bg-cream">
    <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-14">
      {/* Text — left on desktop, top on mobile */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="heading-font text-4xl md:text-5xl mb-8 italic text-forest">La Nostra Storia</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif italic text-gray-800">
          Negli anni '60, in Brianza, il padre di Cornelia aveva un carretto dei gelati. Ogni giorno attraversava paesi e piazze. Cornelia era sempre con lui ed è lì che ha imparato tutto.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-10 font-serif italic text-gray-800">
          Prima di uscire, suo padre le legava sempre un fiocco giallo nei capelli. Cornelia gli chiese perché: <strong>"COSÌ TI VEDO SEMPRE."</strong> Nel caos della gente, era il suo segno distintivo. Oggi è rimasto.
        </p>
        <div className="flex items-center gap-4">
          <span className="w-20 h-[1px] bg-gold"></span>
          <span className="text-[12px] md:text-[14px] uppercase tracking-widest gold-text font-bold">L'Antica Tradizione</span>
          <span className="w-20 h-[1px] bg-gold"></span>
        </div>
      </div>

      {/* Image — right on desktop, bottom on mobile */}
      <div className="flex-1 flex items-center justify-center">
        <img 
          src="/images/Bambina.png" 
          alt="La piccola Cornelia" 
          className="w-[80%] md:w-full max-w-[400px] h-auto object-contain rounded-lg shadow-xl"
        />
      </div>
    </div>
  </section>
);

const SecretsSection = () => {
  return (
    <section id="qualita" className="py-20 md:py-24 px-4 md:px-8 bg-forest text-cream text-center border-b-2 border-gold/30 flex items-center justify-center">
      <div className="w-[90%] md:w-full max-w-[700px] mx-auto">
        <img src="/images/Segreti.png" alt="I Segreti della Nonna" className="w-full h-auto object-contain drop-shadow-xl" />
      </div>
    </section>
  );
};

const CentralImageSection = () => (
  <section className="relative h-[200vh] w-full regatta-stripes bg-fixed">
    <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-forest opacity-10 pointer-events-none"></div>
      <img src="/images/Storia.png" alt="La nostra storia" className="relative z-10 w-[90%] md:w-full h-auto max-w-[700px] mx-auto object-contain drop-shadow-xl" />
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contatti" className="relative h-[200vh] w-full regatta-stripes bg-fixed">
    <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center gap-4 md:gap-4 overflow-hidden px-2 md:px-8 py-4 md:py-4">
      <div className="absolute inset-0 bg-forest opacity-10 pointer-events-none"></div>
      <img src="/images/Orari.png" alt="I Nostri Orari" className="relative z-10 w-[90%] md:w-[80%] h-auto max-h-[45vh] md:max-h-[45vh] max-w-[700px] mx-auto object-contain drop-shadow-2xl" />
      <img src="/images/Vieni.png" alt="Vieni a Trovarci" className="relative z-10 w-[90%] md:w-[80%] h-auto max-h-[45vh] md:max-h-[45vh] max-w-[700px] mx-auto object-contain drop-shadow-xl" />
    </div>
  </section>
);

const PolicyModal = ({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
    <div 
      className="bg-cream rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto gold-border"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="sticky top-0 bg-cream border-b border-gold/30 px-6 py-4 flex items-center justify-between rounded-t-xl">
        <h2 className="heading-font text-xl md:text-2xl text-forest">{title}</h2>
        <button onClick={onClose} className="text-forest/60 hover:text-forest text-2xl leading-none transition-colors">&times;</button>
      </div>
      <div className="px-6 py-6 text-forest/80 text-sm md:text-base leading-relaxed font-serif space-y-4">
        {children}
      </div>
    </div>
  </div>
);

const PrivacyContent = () => (
  <>
    <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <h3 className="heading-font text-lg text-forest mt-6">1. Titolare del Trattamento</h3>
    <p>Il titolare del trattamento dei dati è Nonna Cornelia, con sede legale in Brianza (MB), Italia. P.IVA: IT01234567890.</p>
    <h3 className="heading-font text-lg text-forest mt-6">2. Dati Raccolti</h3>
    <p>Raccogliamo i seguenti dati personali:</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Dati di navigazione (indirizzo IP, browser, sistema operativo)</li>
      <li>Cookie tecnici e analitici</li>
      <li>Dati forniti volontariamente dall'utente tramite form di contatto</li>
    </ul>
    <h3 className="heading-font text-lg text-forest mt-6">3. Finalità del Trattamento</h3>
    <p>I dati personali sono trattati per:</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Garantire il corretto funzionamento del sito</li>
      <li>Analisi statistica anonima del traffico</li>
      <li>Rispondere alle richieste degli utenti</li>
    </ul>
    <h3 className="heading-font text-lg text-forest mt-6">4. Base Giuridica</h3>
    <p>Il trattamento si basa sul consenso dell'utente e sull'interesse legittimo del titolare, ai sensi del Regolamento UE 2016/679 (GDPR).</p>
    <h3 className="heading-font text-lg text-forest mt-6">5. Conservazione dei Dati</h3>
    <p>I dati saranno conservati per il tempo strettamente necessario alle finalità indicate e comunque non oltre 24 mesi.</p>
    <h3 className="heading-font text-lg text-forest mt-6">6. Diritti dell'Utente</h3>
    <p>L'utente ha diritto di accedere, rettificare, cancellare i propri dati, limitare o opporsi al trattamento e alla portabilità dei dati. Per esercitare tali diritti, contattare: <strong>privacy@nonnacornelia.it</strong></p>
    <h3 className="heading-font text-lg text-forest mt-6">7. Modifiche</h3>
    <p>Ci riserviamo il diritto di aggiornare questa informativa. La data dell'ultimo aggiornamento è indicata in alto.</p>
  </>
);

const CookieContent = () => (
  <>
    <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <h3 className="heading-font text-lg text-forest mt-6">1. Cosa sono i Cookie</h3>
    <p>I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente durante la navigazione. Servono a migliorare l'esperienza di navigazione e a raccogliere informazioni sull'utilizzo del sito.</p>
    <h3 className="heading-font text-lg text-forest mt-6">2. Cookie Tecnici</h3>
    <p>Questi cookie sono essenziali per il corretto funzionamento del sito e non possono essere disabilitati. Includono cookie di sessione e preferenze di consenso.</p>
    <h3 className="heading-font text-lg text-forest mt-6">3. Cookie Analitici</h3>
    <p>Utilizziamo cookie analitici per comprendere come gli utenti interagiscono con il sito, raccogliendo informazioni in forma anonima e aggregata.</p>
    <h3 className="heading-font text-lg text-forest mt-6">4. Cookie di Terze Parti</h3>
    <p>Il sito potrebbe includere componenti di terze parti (es. mappe, social media) che installano propri cookie. Il titolare non ha controllo sui cookie di terze parti.</p>
    <h3 className="heading-font text-lg text-forest mt-6">5. Gestione dei Cookie</h3>
    <p>L'utente può gestire le preferenze sui cookie tramite le impostazioni del proprio browser. La disattivazione dei cookie potrebbe compromettere alcune funzionalità del sito.</p>
    <h3 className="heading-font text-lg text-forest mt-6">6. Maggiori Informazioni</h3>
    <p>Per maggiori informazioni sul trattamento dei dati, consultare la nostra Privacy Policy o contattare: <strong>privacy@nonnacornelia.it</strong></p>
  </>
);

const CookieBanner = ({ onAccept, onOpenCookie }: { onAccept: () => void; onOpenCookie: () => void }) => (
  <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6">
    <div className="max-w-3xl mx-auto bg-forest/95 backdrop-blur-md text-cream rounded-xl shadow-2xl p-5 md:p-6 border border-gold/30">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base leading-relaxed">
            🍪 Utilizziamo cookie tecnici e analitici per migliorare la tua esperienza. Continuando la navigazione, accetti l'uso dei cookie. 
            <button onClick={onOpenCookie} className="gold-text underline hover:text-cream transition-colors ml-1">Scopri di più</button>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={onAccept}
            className="px-5 py-2 bg-gold text-forest font-bold text-xs uppercase tracking-widest rounded-full hover:bg-gold/80 transition-colors shadow-md"
          >
            Accetta
          </button>
          <button 
            onClick={onAccept}
            className="px-5 py-2 border border-cream/40 text-cream font-bold text-xs uppercase tracking-widest rounded-full hover:bg-cream/10 transition-colors"
          >
            Solo necessari
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Footer = ({ onOpenPrivacy, onOpenCookie }: { onOpenPrivacy: () => void; onOpenCookie: () => void }) => (
  <footer className="h-auto py-12 regatta-stripes bg-fixed border-t-2 border-gold flex flex-col items-center justify-center relative mt-auto">
    <div className="absolute top-[-10px] bg-cream px-3 py-0.5 text-[10px] uppercase tracking-widest gold-text font-bold shadow-sm">
      Nonna Cornelia
    </div>
    <div className="bg-cream/95 p-8 rounded flex flex-col items-center shadow-lg gold-border mt-4 text-center">
      <img src="/images/Logo.png" alt="Nonna Cornelia Logo" className="w-40 h-auto object-contain mb-6" />
      <div className="flex gap-4 mb-8 text-[10px] font-bold tracking-widest uppercase text-forest/70">
        <a href="#storia" className="hover:text-gold transition-colors">La Storia</a>
        <a href="#gusti" className="hover:text-gold transition-colors">I Gusti</a>
        <a href="#contatti" className="hover:text-gold transition-colors">Dove Siamo</a>
      </div>
      <div className="flex gap-6 mb-6">
        <a href="#" className="gold-text hover:text-forest transition-colors">
          <Instagram className="w-5 h-5 stroke-[1.5]" />
        </a>
        <a href="#" className="gold-text hover:text-forest transition-colors">
          <Facebook className="w-5 h-5 stroke-[1.5]" />
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center text-[9px] uppercase tracking-widest text-forest/60 font-bold mb-4">
        <button onClick={onOpenPrivacy} className="hover:text-gold transition-colors cursor-pointer">Privacy Policy</button>
        <span className="hidden md:inline">•</span>
        <button onClick={onOpenCookie} className="hover:text-gold transition-colors cursor-pointer">Cookie Policy</button>
        <span className="hidden md:inline">•</span>
        <span>P.IVA: IT01234567890</span>
      </div>
      <div className="text-[9px] uppercase tracking-widest gold-text font-bold">
        &copy; {new Date().getFullYear()} Tutti i diritti riservati.
      </div>
    </div>
  </footer>
);

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(() => {
    return localStorage.getItem('nonnacornelia-cookie-consent') === 'true';
  });

  const handleAcceptCookies = () => {
    localStorage.setItem('nonnacornelia-cookie-consent', 'true');
    setCookieConsent(true);
  };

  return (
    <div className="min-h-screen bg-cream text-forest flex flex-col font-serif-body antialiased selection:bg-gold/30 selection:text-forest">
      <Navbar />
      <Hero />
      <VideoSection />
      <StorySection />
      <SecretsSection />
      <CentralImageSection />
      <ContactSection />
      <Footer onOpenPrivacy={() => setShowPrivacy(true)} onOpenCookie={() => setShowCookie(true)} />

      {/* Cookie Consent Banner */}
      {!cookieConsent && (
        <CookieBanner onAccept={handleAcceptCookies} onOpenCookie={() => setShowCookie(true)} />
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <PolicyModal title="Privacy Policy" onClose={() => setShowPrivacy(false)}>
          <PrivacyContent />
        </PolicyModal>
      )}

      {/* Cookie Policy Modal */}
      {showCookie && (
        <PolicyModal title="Cookie Policy" onClose={() => setShowCookie(false)}>
          <CookieContent />
        </PolicyModal>
      )}
    </div>
  );
}

