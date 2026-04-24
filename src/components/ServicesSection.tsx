import { motion } from "framer-motion";
import previdenciaImg from "@/assets/urbano-bg.png";
import pescadorImg from "@/assets/pescador-bg.jpg";
import servicosImg from "@/assets/assistenciais-bg.png";
import lavradorImg from "@/assets/lavrador-bg.png";

const services = [
  {
    title: "Segurado\nUrbano",
    description: "Atuação especializada em benefícios para segurados urbanos do INSS, aposentadorias, auxílios e perícias.",
    image: previdenciaImg,
    href: "https://wa.me/5586994291801?text=Olá%20Lucas%2C%20tenho%20dúvidas%20sobre%20benefícios%20para%20Segurado%20Urbano.%20Posso%20conversar%3F",
  },
  {
    title: "Pescador\nArtesanal",
    description: "Especialista em benefícios previdenciários para pescadores artesanais, seguro-defeso e demais direitos da categoria.",
    image: pescadorImg,
    href: "https://wa.me/5586994291801?text=Olá%20Lucas%2C%20sou%20pescador%20artesanal%20e%20gostaria%20de%20saber%20mais%20sobre%20meus%20direitos%20previdenciários.",
  },
  {
    title: "Trabalhador\nRural",
    description: "Assessoria completa para trabalhadores rurais em aposentadorias, auxílio-doença, salário-maternidade e demais benefícios do INSS.",
    image: lavradorImg,
    href: "https://wa.me/5586994291801?text=Olá%20Lucas%2C%20sou%20trabalhador%20rural%20e%20gostaria%20de%20saber%20mais%20sobre%20meus%20direitos%20previdenciários.",
  },
  {
    title: "Benefícios\nAssistenciais",
    description: "Atuação completa em BPC-LOAS, benefícios para pessoas com autismo, deficiência e demais benefícios assistenciais.",
    image: servicosImg,
    href: "https://wa.me/5586994291801?text=Olá%20Lucas%2C%20tenho%20interesse%20em%20benefícios%20assistenciais.%20Gostaria%20de%20esclarecer%20dúvidas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="tipos-de-segurados" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground whitespace-pre-line leading-tight mb-2">
                {service.title}
              </h2>
              <p className="text-muted-foreground text-xs md:text-sm font-body mb-4 line-clamp-3">
                {service.description}
              </p>
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold-gradient px-4 py-2 rounded-full text-primary-foreground font-body font-semibold text-xs md:text-sm hover:opacity-90 transition-opacity"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
