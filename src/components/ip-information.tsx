import ContentP from './content-p';
import Title from './title';

export default function IpInformation() {
  return (
    <div className='p-6 bg-white z-10 w-full max-w-md rounded-lg flex flex-col text-center gap-4 md:flex-row md:justify-between md:max-w-xl md:text-left'>
      {/* componetizar los parrafos de title y contenido */}
      <div className='basis-1/4'>
        <Title>IP Address</Title>
        <ContentP>198.212.174.101</ContentP>
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <Title>Location</Title>
        <ContentP>Mountain View, CA</ContentP>
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <Title>Timezone</Title>
        <ContentP>UTC -05:00</ContentP>
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <Title>ISP</Title>
        <ContentP>SpaceX Starlink</ContentP>
      </div>
    </div>
  );
}
