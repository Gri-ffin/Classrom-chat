import Image from 'next/image';
import Link from 'next/link';

export default function DiscordLogo({ discordLogo }) {
  return (
    <div className='sm:flex sm:flex-row hidden'>
      <Image src={discordLogo} alt='Discord Logo' width={50} height={50} />
      <Link href='/'>
        <a className='text-white font-bold mt-4 ml-2'>Discord</a>
      </Link>
    </div>
  );
}
