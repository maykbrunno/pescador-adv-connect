import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Recuperei meu seguro-defeso graças ao trabalho do Dr. Lucas. Ele explicou tudo e resolveu rápido.",
    name: "João P.",
    case: "Pescador Artesanal — Seguro-Defeso",
  },
  {
    quote:
      "Estava sem minha aposentadoria há 2 anos. Em 6 meses o Dr. Lucas resolveu.",
    name: "Maria S.",
    case: "Aposentadoria por Invalidez",
  },
  {
    quote:
      "Profissional sério e comprometido. Meu caso era complexo e ele não desistiu.",
    name: "Carlos R.",
    case: "Revisão de Benefício",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-body font-semibold uppercase tracking-[0.12em] text-xs mb-3"
          style={{ color: "#C9952A" }}
        >
          O que dizem os clientes
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-10"
        >
          Depoimentos
        </motion.h2>

        {/* ⚠️ NOTA: Substituir os textos abaixo por depoimentos reais autorizados pelo cliente antes de publicar.
            Depoimento falso em site de advogado é vedado pela OAB. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ backgroundColor: "#1E1A14", border: "1px solid rgba(201,149,42,0.15)" }}
            >
              {/* Aspas */}
              <span
                className="font-display text-5xl leading-none select-none"
                style={{ color: "#C9952A" }}
                aria-hidden
              >
                "
              </span>

              {/* [PLACEHOLDER — substituir por depoimento real autorizado pelo cliente] */}
              <p className="font-body text-sm italic flex-1" style={{ color: "#B0A090" }}>
                {t.quote}
              </p>

              <div className="pt-3" style={{ borderTop: "1px solid rgba(201,149,42,0.15)" }}>
                <p className="font-body font-semibold text-sm text-foreground">{t.name}</p>
                <p className="font-body text-xs" style={{ color: "#6B5E50" }}>
                  {t.case}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-6 text-xs font-body" style={{ color: "#6B5E50" }}>
          * Depoimentos representativos. Substituir por depoimentos reais autorizados antes da publicação.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
