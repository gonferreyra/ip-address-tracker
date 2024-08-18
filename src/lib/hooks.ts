import { IpContext } from '@/contexts/ip-context-provider';
import { useContext } from 'react';

export function useIpContext() {
  const context = useContext(IpContext);
  if (!context) {
    throw new Error('useIpContext must be used within an IpContextProvider');
  }
  return context;
}
