import { Instagram, MessageCircle, Mail } from "lucide-react";

const ContactFooter = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {/* WhatsApp — único colorido */}
          <a
            href="https://wa.me/5586994291801?text=Olá%20Lucas%2C%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20consulta%20sobre%20Direito%20Previdenciário."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-body font-semibold text-sm text-white transition-all hover:brightness-110 hover:scale-105 w-full sm:w-auto justify-center"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>

          {/* Instagram — outline dourado */}
          <a
            href="https://instagram.com/_lucasmagalhaesadv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-body font-semibold text-sm transition-all hover:bg-primary/10 hover:scale-105 w-full sm:w-auto justify-center"
            style={{ border: "1.5px solid #C9952A", color: "#C9952A", background: "transparent" }}
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>

          {/* E-mail — outline dourado */}
          <a
            href="mailto:advlm.pi@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-body font-semibold text-sm transition-all hover:bg-primary/10 hover:scale-105 w-full sm:w-auto justify-center"
            style={{ border: "1.5px solid #C9952A", color: "#C9952A", background: "transparent" }}
          >
            <Mail className="w-5 h-5" />
            E-mail
          </a>
        </div>

        <p className="text-center text-muted-foreground text-xs font-body mb-1">
          © {new Date().getFullYear()} Lucas Magalhães — Advocacia Previdenciária. Todos os direitos reservados.
        </p>
        <p className="text-center text-xs font-body" style={{ color: "#6B5E50" }}>
          Desenvolvido por{" "}
          <span className="font-semibold" style={{ color: "#C9952A" }}>
            DigitalTap
          </span>
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;
