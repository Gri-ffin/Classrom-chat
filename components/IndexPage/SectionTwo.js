import Image from 'next/image';
import inviteOnlySVG from '../../public/assets/invite_only_landing.svg';

export const SectionTwo = () => {
  return (
    <section className='relative flex flex-row'>
      <div>
        <Image
          src={inviteOnlySVG}
          alt='Invite only landing section svg'
          width={1500}
          height={1500}
        />
      </div>
      <div className='mt-[280px] text-center mr-4'>
        <h2 className='text-black font-bold text-4xl'>
          create an invite-only place where you belong
        </h2>
        <p className='m-4 leading-loose'>
          Discord servers are organized into topic based channels where you can
          collaborate, share, and just talk about your day without cloggin up a
          group chat.
        </p>
      </div>
    </section>
  );
};
