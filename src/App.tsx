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
    <div className="relative z-10 w-[90%] md:w-[80%] max-w-[700px] mx-auto">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-auto rounded-lg shadow-2xl"
      >
        <source src="/VIDEO HOME.mp4" type="video/mp4" />
      </video>
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

const Footer = () => (
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
        <a href="#" className="hover:text-gold">Privacy Policy</a>
        <span className="hidden md:inline">•</span>
        <a href="#" className="hover:text-gold">Cookie</a>
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
  return (
    <div className="min-h-screen bg-cream text-forest flex flex-col font-serif-body antialiased selection:bg-gold/30 selection:text-forest">
      <Navbar />
      <Hero />
      <VideoSection />
      <StorySection />
      <SecretsSection />
      <CentralImageSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

