import { Instagram, MessageCircle, Mail } from "lucide-react";

const links = [
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/_lucasmagalhaesadv",
    className: "bg-gradient-to-br from-pink-500 to-orange-400",
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/5586994291801?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20jurídicos.",
    className: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    label: "E-mail",
    icon: Mail,
    href: "mailto:advlm.pi@outlook.com",
    className: "bg-gold-gradient",
  },
];

const ContactFooter = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="max-w-lg mx-auto md:max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.className} inline-flex items-center gap-2 px-8 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity text-foreground`}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} Lucas Magalhães — Advocacia Previdenciária. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;
