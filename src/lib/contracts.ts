import { baseSepolia } from 'wagmi/chains';

// Base Sepolia Contract Addresses
export const CONTRACTS = {
  FOORG_TOKEN: '0x5A7b55ebeF662139a3de3F42671DcB0f528b8943' as `0x${string}`,
  FOORGANIC_NFT: '0x0D52f1061c04682dE90ca127445C6cB63e1E8B42' as `0x${string}`,
  NFT_MARKETPLACE: '0x969d082CC30d8f2fc7bB9d1974F89B0e8E12ADa9' as `0x${string}`,
  NFT_STAKING: '0x98bA1654e25190464FF440a970Cd0bfDf0cBf330' as `0x${string}`,
  TOKEN_STAKING: '0x9Bb6cEf22639a848F5E5e8544d117d6E7ef56091' as `0x${string}`,
} as const;

export const CHAIN_ID = baseSepolia.id;

// Block explorer URLs
export const BLOCK_EXPLORER = {
  BASE_URL: 'https://sepolia.basescan.org',
  address: (address: string) => `https://sepolia.basescan.org/address/${address}`,
  tx: (hash: string) => `https://sepolia.basescan.org/tx/${hash}`,
} as const;
