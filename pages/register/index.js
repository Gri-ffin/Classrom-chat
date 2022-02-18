import Head from 'next/head';
import { Fragment } from 'react';
import { Signup } from '../../components/Signup/Signup';

export default function Register() {
  return (
    <Fragment>
      <Head>
        <title>Discord</title>
        <meta name='description' content='discord | Create account' />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <main className='bg-signupBg bg-center bg-no-repeat bg-cover h-[100vh]'>
        <Signup />
      </main>
    </Fragment>
  );
}
