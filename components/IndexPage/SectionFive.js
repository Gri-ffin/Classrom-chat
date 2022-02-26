import Image from 'next/image';
import Link from 'next/link';
import justChillingLandingSVG from '../../public/assets/just_chiling_landing.svg';
import starsSVG from '../../public/assets/tiny_stars_landing.svg';
import { downloadLink } from '../Helpers/links';

export const SectionFive = () => {
  return (
    <section className='relative flex flex-col bg-gray-100 text-center'>
      <h2 className='text-black font-bold text-4xl mt-20'>
        Reliable tech for staying close
      </h2>
      <p className='m-4'>
        low-latency voice and video feels like you&apos;re in the same room,
        Wave hello over video, watch friends stream their games.
        <br /> Or gather up and have a drawing session with screen share
      </p>
      <div>
        <Image
          src={justChillingLandingSVG}
          alt='Just chilling landing svg'
          height={500}
          width={500}
        />
      </div>
      <Image src={starsSVG} alt='Little stars' height={40} width={40} />
      <p className='text-black font-bold text-2xl'>
        Ready to start your journey?
      </p>
      <div className='mt-6 mb-20'>
        <Link href={downloadLink}>
          <a className='bg-blue-600 inline sm:px-8 py-3 px-3 text-white rounded-3xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-arrow-bar-down inline-block mr-5'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z'
              />
            </svg>
            Download for Mac (M1 chip)
          </a>
        </Link>
      </div>
    </section>
  );
};
