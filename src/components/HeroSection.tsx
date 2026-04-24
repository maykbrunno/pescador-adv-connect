import { motion } from "framer-motion";
import { UserPlus, MessageCircle } from "lucide-react";
import lucasImg from "@/assets/perfil.jpeg";
import logoImg from "@/assets/FUNDO_ESCURO.svg";

const saveContact = () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Lucas Magalhães - Advogado
TEL;TYPE=CELL:+5586994291801
EMAIL:advlm.pi@outlook.com
ADR;TYPE=WORK:;;Rua Laurentino Araújo, 255;Luís Correia;PI;64220-000;Brasil
ORG:Lucas Magalhães - Advocacia Previdenciária
URL:https://instagram.com/_lucasmagalhaesadv
NOTE:Advogado - Advocacia Previdenciária - Especialista em Pescadores Artesanais
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Lucas_Magalhaes_Advogado.vcf";
  a.click();
  URL.revokeObjectURL(url);
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4 py-12">
      <div className="w-full max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start mb-0 md:-mb-16 z-10 relative"
        >
          <img src={logoImg} alt="Lucas Magalhães - Advocacia Previdenciária" className="w-[320px] md:w-[600px] h-auto object-contain scale-125 md:scale-110" />
        </motion.div>

        {/* Hero Content — split on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
          {/* Text — left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 text-center md:text-left order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-3 mt-4 md:mt-0">
              Lucas Magalhães
            </h1>
            <p className="text-foreground text-base md:text-xl font-body font-medium mb-8">
              Escritório especializado em garantir Direitos Previdenciários
            </p>

            {/* CTAs */}
            <div className="flex items-center justify-center md:justify-start gap-4 w-full">
              <button
                onClick={saveContact}
                className="inline-flex flex-1 md:flex-none items-center justify-center gap-2 bg-gold-gradient px-6 py-3 rounded-full text-primary-foreground font-body font-semibold text-sm md:text-base hover:opacity-90 transition-opacity shadow-lg"
              >
                <UserPlus className="w-5 h-5" />
                Salvar Contato
              </button>
              <a
                href="#tipos-de-segurados"
                className="inline-flex flex-1 md:flex-none items-center justify-center gap-2 bg-gold-gradient px-6 py-3 rounded-full text-primary-foreground font-body font-semibold text-sm md:text-base hover:opacity-90 transition-opacity shadow-lg"
              >
                Fale Conosco
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Photo — right on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2 flex-shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <img
                src={lucasImg}
                alt="Lucas Magalhães Leite"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ boxShadow: "0 0 40px rgba(201,149,42,0.25)" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
