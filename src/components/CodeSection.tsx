import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const standardCode = `import { x402 } from '@x402/sdk'

const payment = await x402.pay({
  amount: 100,
  recipient: merchant,
  // Payment history linkable
  // Browsing patterns exposed
})`;

const privateCode = `import { px402 } from '@prxvt/sdk'

const payment = await px402.pay({
  amount: 100,
  recipient: merchant,
  // Unlinkable credentials
  // Zero-knowledge proofs
})`;

const installCommand = "npm install @prxvt/sdk";

export const CodeSection = () => {
  const [activeTab, setActiveTab] = useState<"standard" | "private">("private");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="protocol" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-label mb-4 inline-block">Drop-in replacement</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy in one line
          </h2>
          <p className="text-muted-foreground text-lg">
            Same API. Same simplicity. Complete privacy.
          </p>
        </motion.div>

        {/* Code Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="code-block"
        >
          {/* Tabs */}
          <div className="flex items-center gap-1 mb-6 border-b border-border pb-4">
            <button
              onClick={() => setActiveTab("standard")}
              className={`code-tab ${
                activeTab === "standard" ? "code-tab-active" : "code-tab-inactive"
              }`}
            >
              Standard -{" "}
              <span className="text-destructive">x402</span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-destructive/20 text-destructive">
                Exposed
              </span>
            </button>
            <button
              onClick={() => setActiveTab("private")}
              className={`code-tab ${
                activeTab === "private" ? "code-tab-active" : "code-tab-inactive"
              }`}
            >
              Private -{" "}
              <span className="text-green-400">px402</span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-400/20 text-green-400">
                Private
              </span>
            </button>
          </div>

          {/* Code */}
          <pre className="text-sm leading-relaxed overflow-x-auto">
            <code>
              {activeTab === "standard" ? (
                <>
                  <span className="text-muted-foreground">import</span>{" "}
                  <span className="text-foreground">{"{ x402 }"}</span>{" "}
                  <span className="text-muted-foreground">from</span>{" "}
                  <span className="text-green-400">'@x402/sdk'</span>
                  {"\n\n"}
                  <span className="text-muted-foreground">const</span>{" "}
                  <span className="text-foreground">payment</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-muted-foreground">await</span>{" "}
                  <span className="text-foreground">x402</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-foreground">pay</span>
                  <span className="text-muted-foreground">{"({"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-foreground">amount</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-orange-400">100</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-foreground">recipient</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-foreground">merchant</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-destructive/60">
                    {"// Payment history linkable"}
                  </span>
                  {"\n"}
                  {"  "}
                  <span className="text-destructive/60">
                    {"// Browsing patterns exposed"}
                  </span>
                  {"\n"}
                  <span className="text-muted-foreground">{"})"}</span>
                </>
              ) : (
                <>
                  <span className="text-muted-foreground">import</span>{" "}
                  <span className="text-foreground">{"{ px402 }"}</span>{" "}
                  <span className="text-muted-foreground">from</span>{" "}
                  <span className="text-green-400">'@prxvt/sdk'</span>
                  {"\n\n"}
                  <span className="text-muted-foreground">const</span>{" "}
                  <span className="text-foreground">payment</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-muted-foreground">await</span>{" "}
                  <span className="text-foreground">px402</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-foreground">pay</span>
                  <span className="text-muted-foreground">{"({"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-foreground">amount</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-orange-400">100</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-foreground">recipient</span>
                  <span className="text-muted-foreground">:</span>{" "}
                  <span className="text-foreground">merchant</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-400/60">
                    {"// Unlinkable credentials"}
                  </span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-400/60">
                    {"// Zero-knowledge proofs"}
                  </span>
                  {"\n"}
                  <span className="text-muted-foreground">{"})"}</span>
                </>
              )}
            </code>
          </pre>
        </motion.div>

        {/* Installation Command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <p className="text-sm text-muted-foreground mb-3">Installation</p>
          <div className="code-block flex items-center justify-between">
            <code className="text-sm">
              <span className="text-muted-foreground">$</span>{" "}
              <span className="text-foreground">{installCommand}</span>
            </code>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
