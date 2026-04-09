import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Laurentino+Araújo+255+Centro+Luís+Correia+PI";

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-lg mx-auto md:max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4"
        >
          Acesse nossa Localização
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center font-body mb-8"
        >
          Rua Laurentino Araújo, 255, Centro, Luís Correia – PI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl overflow-hidden border border-border"
        >
          <iframe
            title="Localização do escritório"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0!2d-41.67!3d-2.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTInNDguMCJTIDQxwrA0MCcxMi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient px-8 py-3 rounded-full text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
          >
            <MapPin className="w-5 h-5" />
            Abrir no Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
