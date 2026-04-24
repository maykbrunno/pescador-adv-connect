import { motion } from "framer-motion";
import sobreImg from "@/assets/quem_sou.jpeg";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-lg mx-auto md:max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-10"
        >
          Quem somos nós
        </motion.h2>

        <div className="md:flex md:items-center md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 mb-8 md:mb-0"
          >
            <img
              src={sobreImg}
              alt="Sobre Lucas Magalhães"
              loading="lazy"
              className="w-full md:w-96 rounded-2xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="space-y-3">
              {[
                "Larga experiência em casos previdenciários;",
                "Atuamos com todos os tipos de segurados da Previdência, assim como BPC-LOAS e demais benefícios assistenciais em todo Brasil;",
                "Amplo conhecimento em casos de Pescadores Artesanais e Lavradores;",
                "Atendimento humanizado e personalizado de acordo com as necessidades específicas de cada cliente;",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-secondary-foreground text-sm md:text-base font-body">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
