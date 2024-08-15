import ContentP from './content-p';
import Title from './title';
import { countryTestData as testData } from '@/lib/db';

export default async function IpInformation() {
  // const BASE_API_URL = 'https://geo.ipify.org/api/v2/country,city?';
  // const API_KEY = process.env.IP_GEOLOCATION_API_SECRET_KEY;

  await new Promise((resolve) => setTimeout(resolve, 2000));
  // const response = await fetch(`${BASE_API_URL}apiKey=${API_KEY}`);
  // const data = await response.json();
  // console.log(data);

  return (
    <div className='p-6 bg-white z-10 w-full max-w-md rounded-lg flex flex-col text-center gap-4 md:flex-row md:justify-between md:max-w-xl md:text-left'>
      {/* componetizar los parrafos de title y contenido */}
      <div className='basis-1/4'>
        <Title>IP Address</Title>
        <ContentP>{testData.ip}</ContentP>
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <Title>Location</Title>
        <ContentP>
          {testData.location.region}, {testData.location.country}
        </ContentP>
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <Title>Timezone</Title>
        <ContentP>UTC {testData.location.timezone}</ContentP>
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <Title>ISP</Title>
        <ContentP>{testData.isp}</ContentP>
      </div>
    </div>
  );
}
