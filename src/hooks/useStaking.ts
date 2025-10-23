import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACTS } from '@/lib/contracts';
import { NFT_STAKING_ABI, ERC721_ABI } from '@/lib/abis';
import { useToast } from '@/hooks/use-toast';

export const useStakedNFTs = () => {
  const { address } = useAccount();

  const { data: stakedTokens, isLoading, refetch } = useReadContract({
    address: CONTRACTS.NFT_STAKING,
    abi: NFT_STAKING_ABI,
    functionName: 'getStakedTokens',
    args: address ? [address] : undefined,
  });

  return {
    stakedTokens: (stakedTokens as bigint[]) || [],
    isLoading,
    refetch,
  };
};

export const useStakeNFT = () => {
  const { toast } = useToast();
  const { writeContractAsync, data: hash, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const approveNFT = async (tokenId: bigint) => {
    try {
      await writeContractAsync({
        address: CONTRACTS.FOORGANIC_NFT,
        abi: ERC721_ABI,
        functionName: 'approve',
        args: [CONTRACTS.NFT_STAKING, tokenId],
      } as any);
    } catch (error: any) {
      toast({
        title: 'Approval Failed',
        description: error?.message || 'Failed to approve NFT',
        variant: 'destructive',
      });
    }
  };

  const stakeNFT = async (tokenId: bigint) => {
    try {
      await writeContractAsync({
        address: CONTRACTS.NFT_STAKING,
        abi: NFT_STAKING_ABI,
        functionName: 'stake',
        args: [tokenId],
      } as any);
      
      toast({
        title: 'Staking NFT',
        description: 'Transaction submitted. Waiting for confirmation...',
      });
    } catch (error: any) {
      toast({
        title: 'Staking Failed',
        description: error?.message || 'Failed to stake NFT',
        variant: 'destructive',
      });
    }
  };

  const unstakeNFT = async (tokenId: bigint) => {
    try {
      await writeContractAsync({
        address: CONTRACTS.NFT_STAKING,
        abi: NFT_STAKING_ABI,
        functionName: 'unstake',
        args: [tokenId],
      } as any);
      
      toast({
        title: 'Unstaking NFT',
        description: 'Transaction submitted. Waiting for confirmation...',
      });
    } catch (error: any) {
      toast({
        title: 'Unstaking Failed',
        description: error?.message || 'Failed to unstake NFT',
        variant: 'destructive',
      });
    }
  };

  return {
    approveNFT,
    stakeNFT,
    unstakeNFT,
    isPending: isPending || isConfirming,
    isSuccess,
    hash,
  };
};
