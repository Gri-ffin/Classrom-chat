import React from 'react';
import Link from 'next/link';

export function FooterSecondLinks() {
  return (
    <ul>
      <li className='py-2'>
        <Link href='/enterprise'>
          <a className='text-blue-700'>Enterprise</a>
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
        <Link href='/graphic-charter'>
          <a className='text-white'>Graphic charter</a>
        </Link>
      </li>
      <li className='py-2'>
        <Link href='/news'>
          <a className='text-white'>News Space</a>
        </Link>
      </li>
    </ul>)}
