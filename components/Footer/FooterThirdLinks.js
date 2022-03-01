import React from 'react';
import Link from 'next/link';
export function FooterSecondLinks({}) {
  return (
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
  );
}
