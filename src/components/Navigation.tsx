import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X, ArrowRight } from "lucide-react";
import { WalletModal } from "./WalletModal";

const navLinks = [
  { label: "Protocol", href: "#protocol" },
  { label: "Privacy", href: "#privacy" },
  { label: "Products", href: "#products" },
  { label: "Docs", href: "#docs" },
];

export const Navigation = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const handleConnect = (address: string) => {
    setWalletAddress(address);
    setIsConnected(true);
    setIsWalletModalOpen(false);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <img src="/favicon.png" alt="PRXVT" className="w-7 h-7" />
            PRXVT
          </motion.a>

          {/* Desktop Navigation Pill */}
          <div className="hidden md:flex nav-pill">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="nav-link"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            {isConnected ? (
              <Button variant="nav" size="sm" onClick={() => setIsWalletModalOpen(true)}>
                <Wallet className="w-4 h-4" />
                {formatAddress(walletAddress)}
              </Button>
            ) : (
              <Button variant="nav" size="sm" onClick={() => setIsWalletModalOpen(true)}>
                App
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  variant="wallet"
                  onClick={() => {
                    setIsWalletModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Wallet className="w-4 h-4" />
                  {isConnected ? formatAddress(walletAddress) : "Connect Wallet"}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        onConnect={handleConnect}
      />
    </>
  );
};
