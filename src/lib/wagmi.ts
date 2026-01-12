import { http, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors';

// WalletConnect projectId - users should get their own from https://cloud.walletconnect.com
const projectId = 'c4f79cc821944d9680842e34466bfb';

export const config = createConfig({
  chains: [mainnet, polygon, optimism, arbitrum, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    coinbaseWallet({ appName: 'PRXVT' }),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
});
