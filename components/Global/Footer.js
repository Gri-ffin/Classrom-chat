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
      <footer className='relative flex flex-row p-1 justify-around bg-black pt-5'>
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
        <div>
          <ul>
            <li className='py-2'>
              <Link href='/product'>
                <a className='text-blue-700'>Product</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href={downloadLink}>
                <a className='text-white'>Download</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/nitro'>
                <a className='text-white'>Nitro</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/status'>
                <a className='text-white'>Status</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='py-2'>
              <Link href='/company'>
                <a className='text-blue-700'>Company</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/about'>
                <a className='text-white'>About</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/jobs'>
                <a className='text-white'>Jobs</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/branding'>
                <a className='text-white'>Branding</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/newsroom'>
                <a className='text-white'>Newsroom</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='py-2'>
              <Link href='/resources'>
                <a className='text-blue-700'>Resources</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/college'>
                <a className='text-white'>College</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/support'>
                <a className='text-white'>Support</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/safety'>
                <a className='text-white'>Safety</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/blog'>
                <a className='text-white'>Blog</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/feedback'>
                <a className='text-white'>Feedback</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/developers'>
                <a className='text-white'>Developers</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/streamKit'>
                <a className='text-white'>StreamKit</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='py-2'>
              <Link href='/policies'>
                <a className='text-blue-700'>Policies</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/terms'>
                <a className='text-white'>Terms</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/privacy'>
                <a className='text-white'>Privacy</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/guidelines'>
                <a className='text-white'>Guidelines</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/acknowledgements'>
                <a className='text-white'>Legals</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/licenses'>
                <a className='text-white'>Licenses</a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/moderation'>
                <a className='text-white'>Moderation</a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <aside className='bg-black border-solid border-t-blue-500 border-4 border-b-black border-r-black border-l-black flex flex-row justify-between px-4 py-2'>
        <span>
          <Image src={discordBlackLogo} alt='Discord' width={50} height={50} />
          <p className='text-white'>Discord</p>
        </span>
        <Link href='/login'>
          <a className='text-white bg-blue-600 h-8 px-4 pt-1 rounded-xl'>
            Login
          </a>
        </Link>
      </aside>
    </Fragment>
  );
};
