import Image from 'next/image';
import Link from 'next/link';
import discordLogo from '../../public/images/favicon.ico';
import { downloadLink } from '../Helpers/links';

export const MainHeader = () => {
  return (
    <nav className='bg-blue-600 flex flex-row justify-evenly'>
      <div className='sm:flex sm:flex-row hidden'>
        <Image src={discordLogo} alt='Discord Logo' width={50} height={50} />
        <Link href='/'>
          <a className='text-white font-bold mt-4 ml-2'>Discord</a>
        </Link>
      </div>
      <ul className='text-white text-center flex flex-row pt-4'>
        <li className='px-2'>
          <Link href={downloadLink}>
            <a>Download</a>
          </Link>
        </li>
        <li className='px-2'>
          <Link href='/nitro'>
            <a>Nitro</a>
          </Link>
        </li>
        <li className='px-2 hidden sm:inline-block'>
          <Link href='/safety'>
            <a>Safety</a>
          </Link>
        </li>
        <li className='px-2'>
          <Link href='/support'>
            <a>Support</a>
          </Link>
        </li>
        <li className='px-2'>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
        <li className='hidden sm:inline-block'>
          <Link href='/careers'>
            <a>Careers</a>
          </Link>
        </li>
      </ul>
      <Link href='/login'>
        <a className='text-black h-8 pt-1 mt-2 px-2 bg-white rounded-xl hidden sm:inline-block'>
          Login
        </a>
      </Link>
    </nav>
  );
};
