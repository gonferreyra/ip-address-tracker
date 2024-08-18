import Image from 'next/image';
import IpInformation from '@/components/ip-information';
import SearchForm from '@/components/search-form';
import MapContainer from '@/components/map-container';
import { Toaster } from 'react-hot-toast';

export default function Home() {
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
        <SearchForm />

        <IpInformation />

        <MapContainer />
      </div>
      <Toaster position='top-right' />
    </>
  );
}
