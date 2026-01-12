import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (address: string) => void;
}

const wallets = [
  {
    id: "metamask",
    name: "MetaMask",
    icon: "🦊",
    color: "#E8831D",
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    icon: "🔵",
    color: "#0052FF",
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    icon: "🔗",
    color: "#3B99FC",
  },
  {
    id: "phantom",
    name: "Phantom",
    icon: "👻",
    color: "#AB9FF2",
  },
];

export const WalletModal = ({ isOpen, onClose, onConnect }: WalletModalProps) => {
  const handleWalletClick = (walletId: string) => {
    // Simulate wallet connection with a mock address
    const mockAddress = "0x" + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10);
    onConnect(mockAddress);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Connect Wallet</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-accent rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Wallet Options */}
              <div className="space-y-3">
                {wallets.map((wallet, index) => (
                  <motion.button
                    key={wallet.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleWalletClick(wallet.id)}
                    className="w-full flex items-center gap-4 p-4 bg-secondary hover:bg-accent rounded-xl transition-all group"
                  >
                    <span className="text-2xl">{wallet.icon}</span>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">
                      {wallet.name}
                    </span>
                    <svg
                      className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <p className="text-sm text-muted-foreground text-center mt-6">
                By connecting, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
