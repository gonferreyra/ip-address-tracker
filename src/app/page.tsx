// import Map from '@/components/map';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useMemo } from 'react';

export default function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/map'), {
        loading: () => <p>A map is loading</p>,
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
      <div className='flex items-center flex-col gap-6 py-8 px-4 min-h-screen'>
        <h1 className='text-white text-2xl font-medium'>IP Address Tracker</h1>

        <form className='flex w-full h-[42px] max-w-xl mx-auto'>
          <input className='h-full rounded-l-md px-4 focus:outline-none flex-1 ' />
          <button className='bg-veryDarkGray h-full w-[32px] flex justify-center items-center rounded-r-md'>
            <ChevronRightIcon className='text-white text-2xl' />
          </button>
        </form>

        <div className='h-[300px]'>
          <Map posix={[4.79029, -75.69003]} />
        </div>
      </div>
    </>
  );
}
