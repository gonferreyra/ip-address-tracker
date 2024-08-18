'use client';

import IpContextProvider from './ip-context-provider';

export default function ContextsProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <IpContextProvider>{children}</IpContextProvider>;
}
