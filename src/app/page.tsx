import { Suspense, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ChevronRightIcon } from '@radix-ui/react-icons';

import { countryTestData as testData } from '@/lib/db';
import IpInformation from '@/components/ip-information';
import Skeleton from '@/components/skeleton';

export default function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/map'), {
        loading: () => <p>Loading...</p>,
        ssr: false,
      }),
    []
  );

  return (
    <>
      <div className='absolute h-[210px] w-full top-0 left-0 -z-10 overflow-hidden box-border'>
        <Image
          src='/pattern-bg-desktop.png'
          alt='bg image'
          width={1440}
          height={280}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex items-center flex-col gap-6 py-8 px-4 h-screen'>
        <h1 className='text-white text-2xl font-medium'>IP Address Tracker</h1>

        {/* new component */}
        <form className='flex w-full max-w-md mx-auto'>
          <input
            className='h-full rounded-l-lg p-4 focus:outline-none flex-1 '
            placeholder='Search for any IP address or domain'
          />
          <button className='bg-veryDarkGray h-full w-[32px] flex justify-center items-center rounded-r-lg'>
            <ChevronRightIcon className='text-white text-2xl' />
          </button>
        </form>

        <Suspense fallback={<Skeleton />}>
          <IpInformation />
        </Suspense>

        <div className='z-0 h-[calc(100vh-210px)]'>
          <Map posix={[testData.location.lat, testData.location.lng]} />
        </div>
      </div>
    </>
  );
}
