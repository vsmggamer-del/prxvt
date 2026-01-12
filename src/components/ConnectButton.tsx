import { useState } from 'react';
import { useConnect, useAccount, useDisconnect } from 'wagmi';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wallet, ArrowRight, X, Loader2 } from 'lucide-react';

const walletIcons: Record<string, string> = {
  'MetaMask': '🦊',
  'Coinbase Wallet': '🔵',
  'WalletConnect': '🔗',
  'Injected': '💉',
};

export const ConnectButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { connectors, connect, isPending } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleConnect = (connector: typeof connectors[0]) => {
    connect({ connector });
  };

  if (isConnected && address) {
    return (
      <Button
        variant="nav"
        size="sm"
        onClick={() => disconnect()}
      >
        <Wallet className="w-4 h-4" />
        {formatAddress(address)}
      </Button>
    );
  }

  return (
    <>
      <Button
        variant="nav"
        size="sm"
        onClick={() => setIsModalOpen(true)}
      >
        App
        <ArrowRight className="w-4 h-4" />
      </Button>

      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
            >
              <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Connect Wallet</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-accent rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Wallet Options */}
                <div className="space-y-3">
                  {connectors.map((connector, index) => (
                    <motion.button
                      key={connector.uid}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleConnect(connector)}
                      disabled={isPending}
                      className="w-full flex items-center gap-4 p-4 bg-secondary hover:bg-accent rounded-xl transition-all group disabled:opacity-50"
                    >
                      <span className="text-2xl">
                        {walletIcons[connector.name] || '👛'}
                      </span>
                      <span className="font-medium group-hover:translate-x-1 transition-transform">
                        {connector.name}
                      </span>
                      {isPending ? (
                        <Loader2 className="w-5 h-5 ml-auto animate-spin" />
                      ) : (
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
                      )}
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
    </>
  );
};
