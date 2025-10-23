import { useAccount, useReadContract } from 'wagmi';
import { CONTRACTS } from '@/lib/contracts';
import { ERC721_ABI } from '@/lib/abis';

export const useUserNFTs = () => {
  const { address } = useAccount();

  // Get NFT balance
  const { data: balance, isLoading } = useReadContract({
    address: CONTRACTS.FOORGANIC_NFT,
    abi: ERC721_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
  });

  const tokenCount = balance ? Number(balance) : 0;

  return {
    nfts: [], // Simplified - would need enumerable extension to fetch all tokens
    balance: tokenCount,
    isLoading: isLoading && !!address,
  };
};

export const useNFTBalance = () => {
  const { address } = useAccount();

  const { data: balance, isLoading } = useReadContract({
    address: CONTRACTS.FOORGANIC_NFT,
    abi: ERC721_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
  });

  return {
    balance: balance ? Number(balance) : 0,
    isLoading,
  };
};
