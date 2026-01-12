import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Anonymous Credential Issuance",
    description:
      "Agent obtains blinded credentials from payment provider without revealing identity or destination.",
  },
  {
    number: "2",
    title: "Privacy-Preserving Payment",
    description:
      "x402 challenge is met with unlinkable proof. Merchant verifies payment without learning agent history.",
  },
  {
    number: "3",
    title: "Selective Compliance",
    description:
      "Regulatory requirements met through zero-knowledge proofs, revealing only what's legally required.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="privacy" className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How x402 Works</h2>
          <p className="text-muted-foreground text-lg">
            Our first product: privacy-preserving payment protocol
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex gap-6 items-start"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-12 h-12 bg-secondary border border-border rounded-full flex items-center justify-center text-lg font-bold">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
