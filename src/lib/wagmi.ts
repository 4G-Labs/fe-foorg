import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { baseSepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Foorganic',
  projectId: '2c0c63ea5d30c9815c3fd88ea75eb2b4',
  chains: [baseSepolia],
  ssr: false,
});
