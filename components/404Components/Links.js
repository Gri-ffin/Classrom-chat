import React from 'react';
import Link from 'next/link';

export function Links({}) {
  return (
    <ul className='text-blue-400 pt-9 text-xl'>
      <li className='my-2'>
        <Link href='/'>
          <a>Main Page</a>
        </Link>
      </li>
      <li>
        <Link href='https://twitter.com/discord'>
          <a>@Discord</a>
        </Link>
      </li>
    </ul>
  );
}
