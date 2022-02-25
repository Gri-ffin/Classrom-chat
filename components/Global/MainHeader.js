import Image from 'next/image';
import Link from 'next/link';
import discordLogo from '../../public/images/favicon.ico';
import { downloadLink } from '../Helpers/links';

export const MainHeader = () => {
  return (
    <nav className='bg-blue-600 pl-20 flex flex-row p-1'>
      <Image src={discordLogo} alt='Discord Logo' width={50} height={50} />
      <Link href='/'>
        <a className='mt-4 m-2 text-white font-bold'>Discord</a>
      </Link>
      <ul className='text-white text-center flex flex-row pl-56 pt-4'>
        <li className='pr-7'>
          <Link href={downloadLink}>
            <a>Download</a>
          </Link>
        </li>
        <li className='pr-7'>
          <Link href='/nitro'>
            <a>Nitro</a>
          </Link>
        </li>
        <li className='pr-7'>
          <Link href='/safety'>
            <a>Safety</a>
          </Link>
        </li>
        <li className='pr-7'>
          <Link href='/support'>
            <a>Support</a>
          </Link>
        </li>
        <li className='pr-7'>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href='/careers'>
            <a>Careers</a>
          </Link>
        </li>
      </ul>
      <Link href='/login'>
        <a className='text-black ml-[400px] h-8 w-16 pl-3 pt-1 mt-2 bg-white rounded-xl'>
          Login
        </a>
      </Link>
    </nav>
  );
};