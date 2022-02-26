import Image from 'next/image';
import fandomLandingSVG from '../../public/assets/fandom_landing.svg';

export const SectionFour = () => {
  return (
    <section className='relative flex sm:flex-row flex-col'>
      <div>
        <Image
          src={fandomLandingSVG}
          alt='Fandom landing svg'
          height={1500}
          width={1500}
        />
      </div>
      <div className='mt-[25%] text-center mr-4'>
        <h2 className='text-black font-bold text-4xl'>From few to a fandom</h2>
        <p className='m-4 leading-loose'>
          Get any community running with moderation tools and custom member
          access. Give members special powers, set up private channels, and
          more.
        </p>
      </div>
    </section>
  );
};
