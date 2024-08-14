import { ChevronRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

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
      <div className='flex items-center flex-col gap-6 py-8 px-4'>
        <h1 className='text-white text-2xl font-medium'>IP Address Tracker</h1>

        <form className='flex w-full h-[42px] max-w-xl mx-auto'>
          <input className='h-full rounded-l-md px-4 focus:outline-none flex-1 ' />
          <button className='bg-veryDarkGray h-full w-[32px] flex justify-center items-center rounded-r-md'>
            <ChevronRightIcon className='text-white text-2xl' />
          </button>
        </form>

        <div></div>
      </div>
    </>
  );
}
