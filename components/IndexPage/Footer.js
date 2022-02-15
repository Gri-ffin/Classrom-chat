import Image from 'next/image';
import Link from 'next/link';
import usaFlag from '../../public/assets/usa_flag.png';
import { facebookIcon } from '../Helpers/SocialMediaIcons/Facebook';
import { instagramIcon } from '../Helpers/SocialMediaIcons/Instagram';
import { twitterIcon } from '../Helpers/SocialMediaIcons/Twitter';
import { youtubeIcon } from '../Helpers/SocialMediaIcons/Youtube';
import { downloadLink } from '../Helpers/links';

export const Footer = () => {
  return (
    <footer className='relative flex flex-row p-10 bg-black'>
      <div>
        <h3 className='text-blue-600 font-bold text-3xl'>IMAGINE A PLACE</h3>
        <p className='mt-2 text-white'>
          <Image src={usaFlag} alt='USA flag' width={30} height={20} /> English,
          USA
        </p>
        <div className='relative flex flex-row'>
          <Link href='https://twitter.com/discord'>{twitterIcon}</Link>
          <Link href='https://www.instagram.com/discord/'>{instagramIcon}</Link>
          <Link href='https://www.facebook.com/discord/'>{facebookIcon}</Link>
          <Link href='https://www.youtube.com/discord'>{youtubeIcon}</Link>
        </div>
      </div>
      <div className='ml-44'>
        <ul>
          <li>
            <Link href='/product'>
              <a className='text-blue-700'>Product</a>
            </Link>
          </li>
          <li className='my-3'>
            <Link href={downloadLink}>
              <a className='text-white'>Download</a>
            </Link>
          </li>
          <li className='my-3'>
            <Link href='/nitro'>
              <a className='text-white'>Nitro</a>
            </Link>
          </li>
          <li>
            <Link href='/status'>
              <a className='text-white'>Status</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='ml-44'>
        <ul>
          <li>
            <Link href='/company'>
              <a className='text-blue-700'>Company</a>
            </Link>
          </li>
          <li className='my-3'>
            <Link href='/about'>
              <a className='text-white'>About</a>
            </Link>
          </li>
          <li className='my-3'>
            <Link href='/jobs'>
              <a className='text-white'>Jobs</a>
            </Link>
          </li>
          <li className='my-3'>
            <Link href='/branding'>
              <a className='text-white'>Branding</a>
            </Link>
          </li>
          <li>
            <Link href='newsroom'>
              <a className='text-white'>Newsroom</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
