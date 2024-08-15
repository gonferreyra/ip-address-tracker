export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <p className='uppercase text-[9px] font-bold text-darkGray'>{children}</p>
  );
}
