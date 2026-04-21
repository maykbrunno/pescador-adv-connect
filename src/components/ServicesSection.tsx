import { motion } from "framer-motion";
import previdenciaImg from "@/assets/previdencia-bg.jpg";
import pescadorImg from "@/assets/pescador-bg.jpg";
import servicosImg from "@/assets/servicos-bg.jpg";

const services = [
  {
    title: "Direito\nPrevidenciário",
    description: "Atuação especializada na defesa dos direitos sociais e previdenciários, com foco em aposentadorias, auxílios e benefícios do INSS.",
    image: previdenciaImg,
    href: "https://wa.me/5586994291801?text=Olá%20Lucas%2C%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20consulta%20sobre%20Direito%20Previdenciário.",
  },
  {
    title: "Pescadores\nArtesanais",
    description: "Especialista em benefícios previdenciários para pescadores artesanais, incluindo seguro-defeso e aposentadoria especial.",
    image: pescadorImg,
    href: "https://wa.me/5586994291801?text=Olá%20Lucas%2C%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20consulta%20sobre%20Pescadores%20Artesanais.",
  },
  {
    title: "Serviços\nJurídicos",
    description: "Consultoria jurídica completa em direito previdenciário. Análise de casos, recursos administrativos e ações judiciais.",
    image: servicosImg,
    href: "https://wa.me/5586994291801?text=Olá%20Lucas%2C%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20consulta%20sobre%20Serviços%20Jurídicos.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground whitespace-pre-line leading-tight mb-2">
                {service.title}
              </h2>
              <p className="text-muted-foreground text-sm font-body mb-4 line-clamp-3">
                {service.description}
              </p>
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold-gradient px-6 py-2 rounded-full text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
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
