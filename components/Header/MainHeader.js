import Image from 'next/image';
import Link from 'next/link';
import discordLogo from '../../public/images/favicon.ico';
import HeaderLinks from './HeaderLinks';
import { codeSource, downloadLink } from '../Helpers/links';
import DiscordLogo from './DiscordLogo';

export const MainHeader = () => {
  return (
    <nav className='bg-blue-600 flex flex-row justify-evenly'>
      <DiscordLogo discordLogo={discordLogo} />
      <HeaderLinks downloadLink={downloadLink} codeSource={codeSource} />
      <Link href='/login'>
        <a className='text-black h-8 pt-1 mt-2 px-2 bg-white rounded-xl hidden sm:inline-block'>
          Login
        </a>
      </Link>
    </nav>
  );
};
