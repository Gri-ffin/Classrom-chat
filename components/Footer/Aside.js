import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Aside({ discordBlackLogo }) {
  return (
    <aside className='bg-black border-solid border-t-blue-500 border-4 border-b-black border-r-black border-l-black flex flex-row justify-between px-4 py-2'>
      <span>
        <Image src={discordBlackLogo} alt='Discord' width={50} height={50} />
        <p className='text-white'>Discord</p>
      </span>
      <Link href='/login'>
        <a className='text-white bg-blue-600 h-8 px-4 pt-1 rounded-xl'>Login</a>
      </Link>
    </aside>
  );
}
