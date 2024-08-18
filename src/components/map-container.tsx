import { countryTestData as testData } from '@/lib/db';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function MapContainer() {
  // console.log('map container rendered');
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/map'), {
        loading: () => (
          <div className='flex justify-center items-center w-full h-full'>
            Loading...
          </div>
        ),
        ssr: false,
      }),
    []
  );

  return (
    <div className='z-0 h-[calc(100vh-210px)]'>
      <Map posix={[testData.location.lat, testData.location.lng]} />
    </div>
  );
}
