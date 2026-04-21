import { motion } from "framer-motion";

const metrics = [
  { value: "05", label: "Anos de Experiência" },
  { value: "100+", label: "Casos Atendidos" },
  { value: "1", label: "Especialidade: Você em Foco" },
];

const StatsSection = () => {
  return (
    <section className="py-14 px-4" style={{ backgroundColor: "#1A1510" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="font-display font-bold leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)", color: "#C9952A" }}
            >
              {m.value}
            </span>
            <span
              className="font-body font-semibold uppercase tracking-widest text-xs"
              style={{ color: "#B0A090", letterSpacing: "0.12em" }}
            >
              {m.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
