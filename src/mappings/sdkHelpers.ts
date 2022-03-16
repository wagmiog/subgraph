import { Chain, CHAINS } from '@pangolindex/sdk';

export const NETWORK_NAME = "NETWORK_NAME";

export function fetchNetwork(): Chain {
  if (NETWORK_NAME === "NETWORK_NAME")
    return ;
  for (let i = 0; i < CHAINS.length; i++) {
    if (CHAINS[i].id === NETWORK_NAME)
      return CHAINS[i];
  }
  return ;
}
