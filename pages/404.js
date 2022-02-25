import Link from 'next/link';
import { Fragment } from 'react';
import { MainHeader } from '../components/Global/MainHeader';
import { Footer } from '../components/Global/Footer';
import Image from 'next/image';

export default function Custom404() {
  return (
    <Fragment>
      <MainHeader />
      <main className='relative flex flex-row my-40 mx-10'>
        <div className='w-[60%] ml-10'>
          <h1 className='font-extrabold text-6xl text-blue-600 pb-8'>
            Wrong Turn?
          </h1>
          <p className='w-[80%] text-lg'>
            You look lost, stranger. You know what helps when you&apos;re lost?
            A piping hot bowl of noodles. Take a seat, we&apos;re frantically at
            work here cooking up something good. Oh, you need something to read?
            These might help you:
          </p>
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
        </div>
        <div className='w-[40%]'>
          <Image
            src='/images/error404.gif'
            alt='Nelly serving noodles!'
            height={350}
            width={350}
          />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
