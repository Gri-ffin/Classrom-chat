import { Text404 } from '../components/404Components/Text404';
import { Image404 } from '../components/404Components/Image404';
import { Links } from '../components/404Components/Links';
import { Fragment } from 'react';
import { MainHeader } from '../components/Header/MainHeader';
import { Footer } from '../components/Footer/Footer';
import Head from 'next/head';

export default function Custom404() {
  return (
    <Fragment>
      <Head>
        <title>Page not found | Discord</title>
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <MainHeader />
      <main className='relative flex md:flex-row flex-col-reverse my-40 mx-10'>
        <div className='md:w-[60%] ml-10'>
          <Text404 />
          <Links />
        </div>
        <Image404 />
      </main>
      <Footer />
    </Fragment>
  );
}
