import { ChainId } from '@portkey/types';
export type DefaultToken = {
  address: string;
  decimals: string;
  imageUrl: string;
  name: string;
  symbol: string;
};
export interface IChainItemType {
  chainId: ChainId;
  chainName: string;
  endPoint: string;
  explorerUrl: string;
  caContractAddress: string;
  defaultToken: DefaultToken;
  chainImageUrl?: string;
}
