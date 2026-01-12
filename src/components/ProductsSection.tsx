import { motion } from "framer-motion";
import { Shield, Clock, Github } from "lucide-react";

const products = [
  {
    icon: Shield,
    title: "x402 Payment Privacy",
    description:
      "Our first product. Unlinkable payments for AI agents that keep browsing patterns confidential while staying compliant.",
    badge: "Live",
    badgeColor: "bg-green-400/20 text-green-400",
  },
  {
    icon: Clock,
    title: "More Coming Soon",
    description:
      "We're building a comprehensive suite of privacy tools for AI agents. Stay tuned for announcements.",
    badge: "Soon",
    badgeColor: "bg-orange-400/20 text-orange-400",
  },
  {
    icon: Github,
    title: "Open Source",
    description:
      "All PRXVT protocols are open source. Built by the community, for the community.",
    badge: "MIT",
    badgeColor: "bg-foreground/20 text-foreground",
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground text-lg">
            Privacy-preserving infrastructure for the agent economy
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-foreground/30 transition-colors"
            >
              {/* Badge */}
              <span
                className={`absolute top-6 right-6 text-xs font-medium px-3 py-1 rounded-full ${product.badgeColor}`}
              >
                {product.badge}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <product.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
