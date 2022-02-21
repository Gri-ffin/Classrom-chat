import Head from 'next/head';
import { Fragment } from 'react';
import { Login } from '../../components/Login/Login';

const LoginPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Discord</title>
        <meta
          name='description'
          content='Discord is the easiest way to communicate over voice, video, and text.  Chat, hang out, and stay close with your friends and communities.'
        />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <main className='bg-loginBg bg-center bg-no-repeat bg-cover h-[100vh]'>
        <Login />
      </main>
    </Fragment>
  );
};

export default LoginPage;
