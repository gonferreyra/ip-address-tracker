'use client';

import { useIpContext } from '@/lib/hooks';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function MapContainer() {
  const { isLoading, ipData } = useIpContext();

  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/map'), {
        loading: () => (
          <div className='flex justify-center items-center w-full h-full'>
            <div>Loading... </div>
          </div>
        ),
        ssr: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ipData]
  );

  return (
    <div className='z-0 h-[calc(100vh-210px)]'>
      {ipData && <Map posix={[ipData.location.lat, ipData.location.lng]} />}
    </div>
  );
}
