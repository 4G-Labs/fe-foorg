import { useAccount, useReadContract } from 'wagmi';
import { CONTRACTS } from '@/lib/contracts';
import { ERC20_ABI } from '@/lib/abis';
import { formatUnits } from 'viem';

export const useTokenBalance = () => {
  const { address } = useAccount();

  const { data: balance, isLoading, refetch } = useReadContract({
    address: CONTRACTS.FOORG_TOKEN,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
  });

  return {
    balance: balance ? formatUnits(balance, 18) : '0',
    balanceRaw: balance || BigInt(0),
    isLoading,
    refetch,
  };
};
