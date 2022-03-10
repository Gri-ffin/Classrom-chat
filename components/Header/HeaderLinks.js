import Link from 'next/link';

export default function HeaderLinks({ downloadLink, codeSource }) {
  return (
    <ul className='text-white text-center flex flex-row pt-4'>
      <li className='px-2'>
        <Link href={downloadLink}>
          <a>Download</a>
        </Link>
      </li>
      <li className='px-2'>
        <Link href={codeSource}>
          <a>Source Code</a>
        </Link>
      </li>
      <li className='px-2'>
        <Link href='/chat'>
          <a>Chatroom</a>
        </Link>
      </li>
      <li className='px-2'>
        <Link href='/nitro'>
          <a>Nitro</a>
        </Link>
      </li>
      <li className='px-2 hidden sm:inline-block'>
        <Link href='/safety'>
          <a>Safety</a>
        </Link>
      </li>
      <li className='hidden sm:inline-block'>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </li>
    </ul>
  );
}
