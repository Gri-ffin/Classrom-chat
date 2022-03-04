import React from 'react';
import Link from 'next/link';

export function FooterFourthLinks({}) {
  return (
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
  );
}
