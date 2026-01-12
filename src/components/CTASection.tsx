import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Privacy Revolution
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Open protocols, open source. Build privacy-first AI agents with PRXVT
            infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg">
              Read Documentation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="heroOutline" size="lg">
              View on GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
