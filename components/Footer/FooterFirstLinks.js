import React from 'react';
import Link from 'next/link';
import { downloadLink } from '../Helpers/links';

export function FooterFirstLinks() {
  return (
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
  );
}
