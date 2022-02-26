import Link from 'next/link';
import { Fragment } from 'react';
import { downloadLink } from '../Helpers/links';
import { MainHeader } from '../Global/MainHeader';
import leftBg from '../../public/assets/left_bg_landing_header.svg';
import rightBg from '../../public/assets/right_bg_landing_header.svg';
import Image from 'next/image';

export const SectionOne = () => {
  return (
    <Fragment>
      <MainHeader />
      <div className='bg-blue-600 bg-clouds bg-auto relative flex flex-col items-center py-[30vh]'>
        <h1 className='text-white font-bold text-5xl'>IMAGINE A PLACE...</h1>
        <p className='text-white pt-10 p-4'>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community.
        </p>
        <p className='text-white p-4'>
          Where just you and a handeful of friends can spend time together. A
          place that makes it
        </p>
        <p className='text-white z-10'>
          easy to talk every day and hang out more often.
        </p>
        <div>
          <Link href={downloadLink}>
            <a className='md:inline-block px-24 py-4 mt-6 rounded-xl bg-white hidden'>
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
              Download for Mac (M1 Chip)
            </a>
          </Link>
          <Link href='/'>
            <a className='md:inline-block px-24 py-4 ml-5 rounded-xl bg-black text-white hidden'>
              Open Discord in your browser
            </a>
          </Link>
        </div>
        <div className='absolute top-[380px] left-0 z-0'>
          <Image src={leftBg} width={400} height={500} alt='Left Background' />
        </div>
        <div className='absolute top-[360px] right-0 z-0'>
          <Image
            src={rightBg}
            width={400}
            height={500}
            alt='Right background'
          />
        </div>
      </div>
    </Fragment>
  );
};
