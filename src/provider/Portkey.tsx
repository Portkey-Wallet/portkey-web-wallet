'use client';
import { ConfigProvider, NetworkType, PortkeyProvider, ThemeType } from '@portkey/did-ui-react';
import { ReactNode, useEffect, useState } from 'react';
import '@portkey/did-ui-react/dist/assets/index.css';
import qs from 'qs';
import { LOGIN_CONFIG } from '@/app/constants/config';

export default function Portkey({ children }: { children?: ReactNode }) {
  const [config, setConfig] = useState<{ network: NetworkType; theme: ThemeType }>({
    theme: 'dark',
    network: 'MAINNET',
  });

  useEffect(() => {
    const options: any = qs.parse(window.location.search.replace('?', ''));

    const networkType = (options.networkType ?? 'MAINNET') as keyof typeof LOGIN_CONFIG;
    setConfig({ network: networkType, theme: options.theme });

    ConfigProvider.setGlobalConfig({ ...(LOGIN_CONFIG[networkType] as any) });
  }, []);

  return (
    <PortkeyProvider networkType={config?.network} theme={config?.theme}>
      {children}
    </PortkeyProvider>
  );
}
