'use client';

import ContentP from './content-p';
import Title from './title';
import Skeleton from './skeleton';
import { useIpContext } from '@/lib/hooks';

export default function IpInformation() {
  const { isLoading, ipData } = useIpContext();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className='p-6 bg-white z-10 w-full max-w-md rounded-lg flex flex-col text-center gap-4 md:flex-row md:justify-between md:max-w-2xl md:text-left lg:max-w-4xl'>
      <div className='basis-1/4'>
        <Title>IP Address</Title>
        <ContentP>{ipData?.ip}</ContentP>
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <Title>Location</Title>
        <ContentP>
          {ipData?.location.region}, {ipData?.location.country}
        </ContentP>
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <Title>Timezone</Title>
        <ContentP>UTC {ipData?.location.timezone}</ContentP>
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <Title>ISP</Title>
        <ContentP>{ipData?.isp}</ContentP>
      </div>
    </div>
  );
}
