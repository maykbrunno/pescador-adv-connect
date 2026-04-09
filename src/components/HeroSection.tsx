import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import lucasImg from "@/assets/lucas-principal.png";
import logoImg from "@/assets/logo-advocacia.png";

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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 py-12">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 z-10"
      >
        <img src={logoImg} alt="Lucas Magalhães - Advocacia Previdenciária" className="h-16 md:h-20 w-auto" />
      </motion.div>

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary mb-6 z-10"
      >
        <img
          src={lucasImg}
          alt="Lucas Magalhães Leite"
          className="w-full h-full object-cover object-top"
          width={256}
          height={256}
        />
      </motion.div>

      {/* Name & Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center z-10"
      >
        <p className="text-primary text-sm md:text-base tracking-wide uppercase mb-2 font-body font-semibold">
          Advocacia Especializada em Direito Previdenciário para Pescadores
        </p>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-2">
          Lucas Magalhães
        </h1>
        <p className="text-primary text-base md:text-lg font-body font-medium mb-1">
          @_lucasmagalhaesadv
        </p>
        <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto mb-8 font-body">
          Soluções personalizadas para garantir seus <span className="text-primary font-semibold">direitos previdenciários</span>
        </p>

        {/* Save Contact Button */}
        <button
          onClick={saveContact}
          className="inline-flex items-center gap-2 bg-gold-gradient px-8 py-3 rounded-full text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
        >
          <UserPlus className="w-5 h-5" />
          Salvar Contato
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 z-10"
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
