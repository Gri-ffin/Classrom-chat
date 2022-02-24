import Image from 'next/image';
import Link from 'next/link';
import usaFlag from '../../public/assets/usa_flag.png';
import { facebookIcon } from '../Helpers/SocialMediaIcons/Facebook';
import { instagramIcon } from '../Helpers/SocialMediaIcons/Instagram';
import { twitterIcon } from '../Helpers/SocialMediaIcons/Twitter';
import { youtubeIcon } from '../Helpers/SocialMediaIcons/Youtube';
import { downloadLink } from '../Helpers/links';
import { Fragment } from 'react';
import discordBlackLogo from '../../public/assets/discord_logo.svg';

export const Footer = () => {
  return (
    <Fragment>
      <footer className='relative flex flex-row p-10 bg-black'>
        <div>
          <h3 className='text-blue-600 font-bold text-3xl'>IMAGINE A PLACE</h3>
          <p className='mt-2 text-white'>
            <Image src={usaFlag} alt='USA flag' width={30} height={20} />{' '}
            English, USA
          </p>
          <div className='relative flex flex-row'>
            <Link href='https://twitter.com/discord'>{twitterIcon}</Link>
            <Link href='https://www.instagram.com/discord/'>
              {instagramIcon}
            </Link>
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
              <Link href='/newsroom'>
                <a className='text-white'>Newsroom</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='ml-44'>
          <ul>
            <li>
              <Link href='/resources'>
                <a className='text-blue-700'>Resources</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/college'>
                <a className='text-white'>College</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/support'>
                <a className='text-white'>Support</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/safety'>
                <a className='text-white'>Safety</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/blog'>
                <a className='text-white'>Blog</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/feedback'>
                <a className='text-white'>Feedback</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/developers'>
                <a className='text-white'>Developers</a>
              </Link>
            </li>
            <li>
              <Link href='/streamKit'>
                <a className='text-white'>StreamKit</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='ml-44'>
          <ul>
            <li>
              <Link href='/policies'>
                <a className='text-blue-700'>Policies</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/terms'>
                <a className='text-white'>Terms</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/privacy'>
                <a className='text-white'>Privacy</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/guidelines'>
                <a className='text-white'>Guidelines</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/acknowledgements'>
                <a className='text-white'>Acknowledgements</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/licenses'>
                <a className='text-white'>Licenses</a>
              </Link>
            </li>
            <li className='my-3'>
              <Link href='/moderation'>
                <a className='text-white'>Moderation</a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <aside className='bg-black border-solid border-t-blue-500 border-4 border-b-black border-r-black border-l-black p-10 flex flex-row'>
        <span>
          <Image src={discordBlackLogo} alt='Discord' width={50} height={50} />
          <p className='text-white'>Discord</p>
        </span>
        <Link href='/register'>
          <a className='text-white ml-[90%] h-8 pt-1 mt-3 px-5 bg-blue-600 rounded-3xl'>
            Signup
          </a>
        </Link>
      </aside>
    </Fragment>
  );
};
