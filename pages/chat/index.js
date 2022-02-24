import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { useAuth } from '../../components/context/AuthContext';
import { SideBar } from '../../components/Dashboard/Sidebar';
import { Chatroom } from '../../components/Dashboard/Chatroom';
import Head from 'next/head';

export default function Chat() {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.push('/login');
  }, [currentUser, router]);
  return (
    <Fragment>
      <Head>
        <title>Chatroom</title>
        <meta
          name='description'
          content='Chat with your friends or random people online'
        />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <div className='flex-col justify-center bg-gray-800 h-screen w-screen'>
        <SideBar />
        <Chatroom />
      </div>
    </Fragment>
  );
}
