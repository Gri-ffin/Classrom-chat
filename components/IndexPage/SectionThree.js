import Image from 'next/image';
import hangingOutSVG from '../../public/assets/hanging_out_easy_landing.svg';

export const SectionThree = () => {
  return (
    <section className='bg-gray-100 relative flex flex-row'>
      <div className='mt-[280px] text-center ml-4'>
        <h2 className='text-black font-bold text-4xl'>
          Where hanging out is easy
        </h2>
        <p className='m-4 leading-loose'>
          Grab a seat in a voice channel when you&apos;re free, Friends in your
          server can see you&apos;re around and instantly pop in to talk without
          having to talk.
        </p>
      </div>
      <div>
        <Image
          src={hangingOutSVG}
          alt='Hanging out svg'
          height={1500}
          width={1500}
        />
      </div>
    </section>
  );
};
