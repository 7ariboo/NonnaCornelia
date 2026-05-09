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

  return (
    <header 
      className={`fixed top-0 left-0 w-full h-[70px] md:h-20 flex items-center justify-between px-4 md:px-10 z-50 overflow-hidden ${progress > 0 ? 'shadow-md' : 'shadow-sm'}`}
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
      
      <nav 
        className="relative z-10 flex items-center gap-3 md:gap-8 text-[10px] md:text-[11px] font-bold tracking-widest uppercase px-3 md:px-4 py-2 rounded-full border transition-colors duration-300"
        style={{ 
          backgroundColor: `rgba(242, 237, 228, ${progress})`,
          borderColor: `rgba(212, 175, 55, ${progress * 0.3})`,
          boxShadow: `0 2px 8px rgba(0,0,0,${progress * 0.1})`,
          color: 'var(--color-forest)'
        }}
      >
        <a href="#storia" className="hover:text-gold transition-colors">La Storia</a>
        <a href="#gusti" className="hover:text-gold transition-colors">I Gusti</a>
      </nav>

      {/* Embedded Logo visible on scroll */}
      <div 
        className="absolute left-1/2 flex items-center justify-center pointer-events-none z-10"
        style={{
          opacity: progress,
          transform: `translateX(-50%) translateY(${logoTranslateY}px) scale(${logoScale})`
        }}
      >
        <div className="w-32 md:w-36 flex items-center justify-center" style={{aspectRatio: '1.5/1'}}>
          <img src="/images/Logo.png" alt="Nonna Cornelia Logo" className="w-full h-auto object-contain" />
        </div>
      </div>

      <div 
        className="relative z-10 flex items-center gap-3 md:gap-8 text-[10px] md:text-[11px] font-bold tracking-widest uppercase px-3 md:px-4 py-2 rounded-full border transition-colors duration-300"
        style={{ 
          backgroundColor: `rgba(242, 237, 228, ${progress})`,
          borderColor: `rgba(212, 175, 55, ${progress * 0.3})`,
          boxShadow: `0 2px 8px rgba(0,0,0,${progress * 0.1})`,
          color: 'var(--color-forest)'
        }}
      >
        <a href="#contatti" className="hover:text-gold transition-colors">Dove Siamo</a>
      </div>
    </header>
  );
};

const OvalLogo = () => (
  <div className="w-[85%] md:w-[900px] flex items-center justify-center relative z-10" style={{aspectRatio: '1.5/1'}}>
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
  <section id="storia" className="relative min-h-[80vh] flex items-center justify-center border-b border-gold/30 overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="/images/Bambina.png" 
        alt="Sfondo Storia" 
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-cream/60"></div>
    </div>
    
    <div className="relative z-10 max-w-4xl px-8 py-20 flex flex-col items-center text-center">
      <h2 className="heading-font text-4xl md:text-6xl mb-8 italic text-forest">La Nostra Storia</h2>
      <p className="text-lg md:text-2xl leading-relaxed mb-6 font-serif italic text-gray-800">
        Negli anni '60, in Brianza, il padre di Cornelia aveva un carretto dei gelati. Ogni giorno attraversava paesi e piazze. Cornelia era sempre con lui ed è lì che ha imparato tutto.
      </p>
      <p className="text-lg md:text-2xl leading-relaxed mb-10 font-serif italic text-gray-800">
        Prima di uscire, suo padre le legava sempre un fiocco giallo nei capelli. Cornelia gli chiese perché: <strong>"COSÌ TI VEDO SEMPRE."</strong> Nel caos della gente, era il suo segno distintivo. Oggi è rimasto.
      </p>
      <div className="flex items-center gap-4">
        <span className="w-20 h-[1px] bg-gold"></span>
        <span className="text-[12px] md:text-[14px] uppercase tracking-widest gold-text font-bold">L'Antica Tradizione</span>
        <span className="w-20 h-[1px] bg-gold"></span>
      </div>
    </div>
  </section>
);

const SecretsSection = () => {
  return (
    <section id="qualita" className="py-24 px-4 md:px-8 bg-forest text-cream text-center border-b-2 border-gold/30 flex items-center justify-center">
      <div className="w-full max-w-[95%] md:max-w-[1200px]">
        <img src="/images/Segreti.png" alt="I Segreti della Nonna" className="w-full h-auto object-contain drop-shadow-xl" />
      </div>
    </section>
  );
};

const CentralImageSection = () => (
  <section className="relative h-[200vh] w-full regatta-stripes bg-fixed">
    <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-forest opacity-10 pointer-events-none"></div>
      <img src="/images/Storia.png" alt="La nostra storia" className="relative z-10 w-full h-auto max-w-[95%] md:max-w-[1200px] object-contain drop-shadow-xl" />
    </div>
  </section>
);

const ScheduleSection = () => (
  <section id="contatti" className="relative h-[200vh] w-full regatta-stripes bg-fixed">
    <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-forest opacity-10 pointer-events-none"></div>
      <img src="/images/Orari.png" alt="I Nostri Orari" className="relative z-10 w-full h-auto max-w-[95%] md:max-w-[1200px] object-contain drop-shadow-2xl" />
    </div>
  </section>
);

const VieniSection = () => (
  <section id="vieni" className="relative h-[200vh] w-full regatta-stripes bg-fixed">
    <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-forest opacity-10 pointer-events-none"></div>
      <img src="/images/Vieni.png" alt="Vieni a Trovarci" className="relative z-10 w-full h-auto max-w-[95%] md:max-w-[1200px] object-contain drop-shadow-xl mt-24 md:mt-40" />
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
      <ScheduleSection />
      <VieniSection />
      <Footer />
    </div>
  );
}

