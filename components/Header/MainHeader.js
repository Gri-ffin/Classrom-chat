import Link from 'next/link';
import logo from '../../public/images/favicon.ico';
import HeaderLinks from './HeaderLinks';
import { codeSource, downloadLink } from '../Helpers/links';
import Logo from './Logo';

export const MainHeader = () => {
  return (
    <nav className='bg-blue-600 flex flex-row justify-evenly'>
      <Logo discordLogo={logo} />
      <HeaderLinks downloadLink={downloadLink} codeSource={codeSource} />
      <Link href='/login'>
        <a className='text-black h-8 pt-1 mt-2 px-2 bg-white rounded-xl hidden sm:inline-block'>
          Login
        </a>
      </Link>
    </nav>
  );
};
