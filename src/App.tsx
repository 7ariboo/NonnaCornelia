import { Facebook, Instagram, MapPin, Menu, X, Cookie, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const YellowBow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 70" fill="currentColor" className={className}>
    {/* Loops */}
    <path d="M43,26 C28,-2 0,10 10,40 C15,55 35,50 43,33 C45,30 55,30 57,33 C65,50 85,55 90,40 C100,10 72,-2 57,26 Z" />
    {/* Knot */}
    <rect x="40" y="24" width="20" height="15" rx="5" />
    {/* Ribbons */}
    <path d="M45,38 C35,55 25,65 15,65 C25,58 35,50 43,42 Z" />
    <path d="M55,38 C65,55 75,65 85,65 C75,58 65,50 57,42 Z" />
  </svg>
);

const MCHandwritten = ({ className = "" }: { className?: string }) => (
  // Simple "NC" cursive monogram approximation
  <div className={`font-script leading-none ${className}`}>NC</div>
);

const MainBadge = () => (
  <div className="relative inline-flex flex-col items-center justify-center border-2 border-nc-dark rounded-[2.5rem] bg-nc-white bento-shadow w-full max-w-[480px] h-[260px] mx-auto z-10 p-8">
    <div className="absolute top-[-16px] sm:top-[-24px] text-nc-dark z-10">
      <YellowBow className="w-14 h-10 sm:w-20 sm:h-14" />
    </div>
    
    <div className="text-center mt-2 px-8 flex flex-col items-center relative w-full">
      <div className="absolute top-[-10px] right-[-20px] px-3 py-1 bg-nc-green border-2 border-nc-dark rounded-full text-[10px] font-bold uppercase text-nc-dark z-20">Dal 1960</div>
      <h1 className="bento-title text-nc-dark text-[40px] sm:text-[60px]">
        Nonna <br/> <span className="text-nc-pink">Cornelia.</span>
      </h1>
      <p className="font-sans text-nc-dark text-[10px] sm:text-sm font-bold uppercase tracking-widest mt-2">
        Nostalgia di Gelato
      </p>
    </div>

    <div className="absolute bottom-[-16px] sm:bottom-[-20px] text-nc-dark z-10">
       <div className="w-8 h-8 sm:w-10 sm:h-10 rotate-180 opacity-80 scale-50">
          <YellowBow />
       </div>
    </div>
  </div>
);

const CookieBanner = ({ onAccept, onReject }: { onAccept: () => void; onReject: () => void }) => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 100, opacity: 0 }}
    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    className="fixed bottom-4 left-4 right-4 z-[100] max-w-2xl mx-auto"
  >
    <div className="bg-nc-white border-2 border-nc-dark rounded-[2rem] bento-shadow p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-nc-orange border-2 border-nc-dark flex items-center justify-center shrink-0 shadow-[3px_3px_0px_0px_#2D2A26]">
          <Cookie size={22} className="text-nc-dark" />
        </div>
        <div className="flex-1">
          <h3 className="bento-title text-lg text-nc-dark mb-2">Biscotti? No, Cookie! 🍪</h3>
          <p className="text-xs sm:text-sm text-nc-dark/80 leading-relaxed">
            Utilizziamo cookie tecnici per garantire il corretto funzionamento del sito.
            Continuando la navigazione accetti la nostra{' '}
            <button onClick={() => {}} className="underline font-bold hover:text-nc-pink transition-colors">Privacy Policy</button>.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={onAccept}
              className="bg-nc-dark text-nc-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-nc-dark/90 transition-colors shadow-[3px_3px_0px_0px_#2D2A26] border-2 border-nc-dark"
            >
              Accetta tutti
            </button>
            <button
              onClick={onReject}
              className="bg-nc-white text-nc-dark px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-nc-bg transition-colors border-2 border-nc-dark shadow-[3px_3px_0px_0px_#2D2A26]"
            >
              Solo necessari
            </button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const PrivacyPolicyModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-nc-dark/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-nc-white border-2 border-nc-dark rounded-[2rem] bento-shadow max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 sm:p-10"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-nc-green border-2 border-nc-dark flex items-center justify-center shadow-[3px_3px_0px_0px_#2D2A26]">
            <Shield size={18} className="text-nc-dark" />
          </div>
          <h2 className="bento-title text-2xl text-nc-dark">Privacy Policy</h2>
        </div>
        <button onClick={onClose} className="w-10 h-10 rounded-full border-2 border-nc-dark bg-nc-bg hover:bg-nc-pink transition-colors flex items-center justify-center shadow-[2px_2px_0px_0px_#2D2A26]">
          <X size={18} />
        </button>
      </div>

      <div className="space-y-6 text-sm text-nc-dark/80 leading-relaxed">
        <div>
          <h3 className="font-bold text-nc-dark uppercase text-xs tracking-widest mb-2">Titolare del Trattamento</h3>
          <p>Nonna Cornelia S.r.l. — Piazza della Libertà 12, Brianza, Italia<br />P.IVA: IT01234567890 — Email: info@nonnacornelia.it</p>
        </div>

        <div>
          <h3 className="font-bold text-nc-dark uppercase text-xs tracking-widest mb-2">Tipologia di Dati Raccolti</h3>
          <p>Il sito raccoglie esclusivamente dati di navigazione (cookie tecnici) necessari al corretto funzionamento. Non vengono raccolti dati personali identificativi senza il consenso esplicito dell'utente.</p>
        </div>

        <div>
          <h3 className="font-bold text-nc-dark uppercase text-xs tracking-widest mb-2">Cookie Utilizzati</h3>
          <p><strong>Cookie tecnici:</strong> Necessari per il funzionamento del sito. Non richiedono consenso.</p>
          <p className="mt-1"><strong>Cookie analitici:</strong> Utilizzati in forma anonima per analisi statistiche aggregate. Attivati solo previo consenso.</p>
        </div>

        <div>
          <h3 className="font-bold text-nc-dark uppercase text-xs tracking-widest mb-2">Finalità del Trattamento</h3>
          <p>I dati sono trattati per: garantire la navigazione del sito, migliorare l'esperienza utente, analisi statistiche anonime.</p>
        </div>

        <div>
          <h3 className="font-bold text-nc-dark uppercase text-xs tracking-widest mb-2">Diritti dell'Utente</h3>
          <p>Ai sensi del GDPR (Reg. UE 2016/679), l'utente può esercitare i diritti di accesso, rettifica, cancellazione, limitazione e portabilità dei dati scrivendo a: info@nonnacornelia.it</p>
        </div>

        <div>
          <h3 className="font-bold text-nc-dark uppercase text-xs tracking-widest mb-2">Conservazione dei Dati</h3>
          <p>I cookie tecnici scadono al termine della sessione. I cookie analitici, se accettati, hanno durata massima di 12 mesi.</p>
        </div>

        <p className="text-[10px] uppercase tracking-widest opacity-60 pt-4 border-t-2 border-nc-dark/10">
          Ultimo aggiornamento: Maggio 2026
        </p>
      </div>
    </motion.div>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nc-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShowCookieBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('nc-cookie-consent', 'all');
    setShowCookieBanner(false);
  };

  const handleCookieReject = () => {
    localStorage.setItem('nc-cookie-consent', 'necessary');
    setShowCookieBanner(false);
  };

  const navLinks = [
    { name: "La Storia", href: "#storia" },
    { name: "I Gusti", href: "#gusti" },
    { name: "Dove Siamo", href: "#dove-siamo" },
  ];

  return (
    <div className="min-h-screen font-sans bg-nc-bg text-nc-dark flex flex-col selection:bg-nc-pink selection:text-nc-dark">
      {/* Navigation */}
      <nav className="w-full z-50 bg-nc-bg px-4 py-4 md:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between border-2 border-nc-dark rounded-full bg-nc-white bento-shadow px-6 py-2">
          <a href="#" className="flex items-center gap-2 group">
             <div className="flex items-center justify-center w-8 h-8 bg-nc-pink rounded-full border-2 border-nc-dark">
                <MCHandwritten className="text-sm font-bold text-nc-dark" />
             </div>
             <span className="text-xl bento-title text-nc-dark group-hover:text-nc-pink transition-colors ml-2 hidden sm:block">Nonna Cornelia</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
               <a 
                 key={link.name} 
                 href={link.href}
                 className="text-xs font-bold uppercase tracking-widest text-nc-dark hover:opacity-60 transition-opacity"
               >
                 {link.name}
               </a>
             ))}
             <a href="#dove-siamo" className="bg-nc-dark text-nc-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-nc-dark/90 transition-colors">
                Vieni a trovarci
             </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-nc-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-nc-bg pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 items-center text-center mt-12 bg-nc-white bento-box p-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="bento-title text-2xl text-nc-dark"
                >
                  {link.name}
                </a>
              ))}
              <YellowBow className="text-nc-dark w-16 h-16 mt-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 w-full max-w-[1200px] mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Hero Section */}
        <section className="bento-box bg-nc-green md:col-span-7 md:row-span-3 p-8 sm:p-12 flex flex-col justify-center items-center relative min-h-[400px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex justify-center z-10"
          >
             <MainBadge />
          </motion.div>
          <div className="absolute top-[10%] left-[10%] text-nc-dark opacity-20">
             <YellowBow className="w-16 h-12 rotate-[-15deg]" />
          </div>
        </section>

        {/* Values Grid */}
        <section className="bento-box bg-nc-pink text-nc-dark md:col-span-5 md:row-span-2 p-8 flex flex-col justify-center relative">
           <div className="relative text-center">
              <div className="text-[10px] font-bold uppercase tracking-widest text-nc-dark mb-4 border-2 border-nc-dark rounded-full px-3 py-1 inline-block bg-nc-white">I Nostri Principi</div>
              <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bento-title text-3xl sm:text-4xl text-nc-dark leading-tight"
              >
                 Pura Nostalgia.<br/>
                 Una volta non basta.<br/>
                 Il gelato vero non cambia.
              </motion.h2>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="flex flex-col gap-4 mt-8 text-xs font-bold uppercase tracking-widest opacity-80"
              >
                 <p className="border-t-2 border-nc-dark/30 pt-4">Le cose buone hanno una storia</p>
                 <p className="border-t-2 border-nc-dark/30 pt-4">Se lo finisci subito è giusto così</p>
              </motion.div>
           </div>
        </section>

        {/* Story Section */}
        <section id="storia" className="bento-box bg-nc-white md:col-span-12 md:row-span-3 p-8 sm:p-12 flex flex-col md:flex-row gap-8 items-center border-t-0">
          <div className="flex-1 space-y-6">
             <div className="inline-block px-3 py-1 bg-nc-orange border-2 border-nc-dark rounded-full text-[10px] font-bold uppercase text-nc-dark mb-2">La Nostra Storia</div>
             <h2 className="bento-title text-4xl sm:text-5xl lg:text-6xl text-nc-dark">I ricordi <br/> <span className="text-nc-green">buoni.</span></h2>
             
             <div className="space-y-4 text-sm sm:text-base font-medium leading-relaxed opacity-80 italic max-w-xl">
                <p>
                  Negli anni '60, in Brianza, il padre di Cornelia aveva un carretto dei gelati.
                  Ogni giorno attraversava paesi e piazze.
                  Cornelia era sempre con lui.
                </p>
                <p>
                  È lì che ha imparato tutto. Prima di uscire, suo padre le legava sempre un <strong className="font-black text-nc-dark border-b-2 border-nc-pink">fiocco giallo</strong> nei capelli.
                </p>
                <div className="pl-4 border-l-4 border-nc-pink font-bold text-lg text-nc-dark not-italic my-4 flex flex-col">
                   <span className="text-sm opacity-60 italic font-medium">Cornelia gli chiese perché.</span>
                   <span className="bento-title text-xl text-nc-dark mt-1 hover:text-nc-pink transition-colors">"Così ti vedo sempre."</span>
                </div>
                <p>
                  Nel caos della gente, era il suo segno distintivo. Oggi è rimasto. Per lo stesso motivo: <em>riconoscersi subito</em>.
                </p>
             </div>
          </div>
          
          <div className="flex-1 w-full max-w-sm relative mx-auto">
             <div className="aspect-[4/5] bg-nc-pink rounded-[2rem] border-2 border-nc-dark bento-shadow overflow-hidden relative">
                <img 
                  src="/carretto-gelati.png" 
                  alt="Carretto dei gelati anni 60" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-nc-white p-3 rounded-full border-2 border-nc-dark shadow-[4px_4px_0px_0px_#2D2A26] z-20">
                   <YellowBow className="w-8 h-8 text-nc-dark" />
                </div>
             </div>
          </div>
        </section>

        {/* Flavors / Ingredients */}
        <section id="gusti" className="bento-box bg-nc-orange md:col-span-7 md:row-span-4 p-8 sm:p-12 flex flex-col">
           <div className="flex gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-nc-pink border-2 border-nc-dark"></span>
              <span className="w-3 h-3 rounded-full bg-nc-green border-2 border-nc-dark"></span>
              <span className="w-3 h-3 rounded-full bg-nc-bg border-2 border-nc-dark"></span>
           </div>
           
           <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
             Sopra la cucina:
           </h3>
           <h2 className="bento-title text-4xl sm:text-5xl text-nc-dark mb-8">
             I Segreti <br/> della <span className="text-nc-white text-shadow-sm">Nonna.</span>
           </h2>

           <div className="grid grid-cols-2 gap-4 flex-1">
              {[
                { name: "Fragola", desc: "Pura frutta fresca", color: "bg-nc-pink text-nc-dark" },
                { name: "Vaniglia", desc: "Bacche del Madagascar", color: "bg-nc-bg text-nc-dark" },
                { name: "Cioccolato", desc: "Cacao monorigine", color: "bg-nc-brown text-nc-white" },
                { name: "Nocciola", desc: "IGP Piemonte", color: "bg-nc-green text-nc-dark" },
              ].map((flavor, i) => (
                <div key={i} className={`border-2 border-nc-dark rounded-3xl p-4 flex flex-col items-center justify-between text-center ${flavor.color} shadow-[4px_4px_0px_0px_#2D2A26]`}>
                   <div className="w-16 h-16 rounded-full border-2 border-nc-dark bg-nc-white/50 mb-4 shadow-inner" />
                   <h4 className="bento-title text-xl mb-1">{flavor.name}</h4>
                   <p className="text-[10px] font-bold uppercase opacity-80 tracking-widest">{flavor.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* The Rule Section */}
        <section className="bento-box bg-nc-white md:col-span-5 md:row-span-2 p-8 flex flex-col justify-center items-center text-center">
            <h3 className="bento-title text-2xl sm:text-3xl text-nc-dark mb-4">Buono non basta.</h3>
            <p className="text-sm font-bold uppercase tracking-wider mb-6 opacity-80">
              Un giorno suo padre assaggiò un gelato... e lo buttò.
            </p>
            <div className="bg-nc-pink border-2 border-nc-dark rounded-2xl p-6 w-full shadow-[4px_4px_0px_0px_#2D2A26]">
               <p className="text-[10px] font-bold uppercase opacity-80 mb-2">Da lì una regola:</p>
               <p className="bento-title text-xl text-nc-dark">
                 SE NON VUOI IL BIS,<br/>NON È ABBASTANZA.
               </p>
            </div>
        </section>

        {/* Footer / Dove Siamo */}
        <section id="dove-siamo" className="bento-box bg-nc-green md:col-span-5 md:row-span-2 p-8 flex flex-col justify-between text-nc-dark">
           <div className="flex flex-col mb-8">
              <span className="text-[10px] font-bold uppercase mb-2 inline-block px-3 py-1 border-2 border-nc-dark rounded-full bg-nc-white w-max shadow-sm">Dove Trovarci</span>
              <p className="bento-title text-3xl mb-1 mt-2">Piazza della <br/>Libertà 12</p>
              <p className="text-xs font-bold uppercase">Brianza, Italia</p>
           </div>
           
           <div className="bg-nc-white border-2 border-nc-dark rounded-2xl p-4 bento-shadow flex justify-between items-center mb-6">
              <div className="text-xs font-bold uppercase space-y-1 w-full">
                 <div className="flex justify-between gap-4"><span>Lun-Gio</span> <span>11-22</span></div>
                 <div className="flex justify-between gap-4"><span>Ven-Sab</span> <span>11-00</span></div>
                 <div className="flex justify-between gap-4"><span>Dom</span> <span>11-23</span></div>
              </div>
           </div>

           <div className="flex items-center justify-between">
               <div className="flex gap-2">
                 <a href="#" className="w-10 h-10 rounded-full bg-nc-white border-2 border-nc-dark shadow-[2px_2px_0px_0px_#2D2A26] flex items-center justify-center font-bold text-xs hover:bg-nc-pink transition-colors">
                    <Instagram size={18} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full bg-nc-white border-2 border-nc-dark shadow-[2px_2px_0px_0px_#2D2A26] flex items-center justify-center font-bold text-xs hover:bg-nc-pink transition-colors">
                    <Facebook size={18} />
                 </a>
               </div>
               <p className="text-[10px] font-bold uppercase opacity-70">
                  © {new Date().getFullYear()} Nonna Cornelia
               </p>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-nc-dark text-nc-bg border-t-2 border-nc-dark mt-8 py-12 px-4 sm:px-6 z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
             <div className="flex items-center justify-center w-12 h-12 bg-nc-pink rounded-full border-2 border-nc-dark">
                <MCHandwritten className="text-xl font-bold text-nc-dark" />
             </div>
             <div>
                <h2 className="bento-title text-2xl">Nonna Cornelia.</h2>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-nc-pink mt-1">Nostalgia di Gelato</p>
             </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs font-bold uppercase tracking-widest opacity-80">
             <a href="#storia" className="hover:text-nc-pink transition-colors">La Storia</a>
             <a href="#gusti" className="hover:text-nc-pink transition-colors">I Gusti</a>
             <a href="#dove-siamo" className="hover:text-nc-pink transition-colors">Dove Siamo</a>
             <button onClick={() => setShowPrivacy(true)} className="hover:text-nc-pink transition-colors text-left">Privacy Policy</button>
             <button onClick={() => { localStorage.removeItem('nc-cookie-consent'); setShowCookieBanner(true); }} className="hover:text-nc-pink transition-colors text-left">Cookie</button>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1 text-[10px] font-bold uppercase opacity-50">
             <p>P.IVA: IT01234567890</p>
             <p>© {new Date().getFullYear()} Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <CookieBanner onAccept={handleCookieAccept} onReject={handleCookieReject} />
        )}
      </AnimatePresence>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
