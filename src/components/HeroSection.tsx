import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const scrambleChars = "@#$%&*!?;:+=";
const targetWords = ["agents", "payments", "privacy", "the web"];

export const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    const targetWord = targetWords[currentWordIndex];
    let iteration = 0;
    const maxIterations = targetWord.length * 3;

    setIsScrambling(true);

    const interval = setInterval(() => {
      setDisplayText(
        targetWord
          .split("")
          .map((char, index) => {
            if (index < iteration / 3) {
              return char;
            }
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("")
      );

      iteration++;

      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplayText(targetWord);
        setIsScrambling(false);

        // Move to next word after a pause
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % targetWords.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero-shape animate-float w-[600px] h-[800px] -left-48 top-0 opacity-40"
          style={{ borderRadius: "40px" }}
        />
        <div
          className="hero-shape animate-float w-[500px] h-[700px] left-1/4 -top-20 opacity-30"
          style={{ animationDelay: "1s", borderRadius: "40px" }}
        />
        <div
          className="hero-shape animate-float w-[400px] h-[600px] right-20 top-32 opacity-25"
          style={{ animationDelay: "2s", borderRadius: "40px" }}
        />
        {/* Light beam effect */}
        <div className="absolute top-0 right-1/4 w-[2px] h-[60%] bg-gradient-to-b from-foreground/20 via-foreground/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <span className="badge-label">Privacy Layer</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 glow-text"
        >
          Privacy-first{" "}
          <br className="hidden sm:block" />
          infrastructure for{" "}
          <span className="inline-block min-w-[200px] md:min-w-[280px] text-left">
            {displayText}
            {isScrambling && (
              <span className="animate-pulse text-muted-foreground">_</span>
            )}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Building privacy-preserving protocols for the agent economy.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="hero" size="lg">
            Read the Protocol
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="heroOutline" size="lg">
            View Demo
          </Button>
        </motion.div>

        {/* Feature Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-16 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            Privacy First
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            Agent Native
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            Open Source
          </span>
        </motion.div>
      </div>
    </section>
  );
};
