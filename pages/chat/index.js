import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../components/context/AuthContext';
import { SideBar } from '../../components/Dashboard/Sidebar';
import { Chatroom } from '../../components/Dashboard/Chatroom';

export default function Chat() {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.push('/login');
  }, [currentUser, router]);
  return (
    <div className='flex-col justify-center bg-gray-800 h-screen w-screen'>
      <SideBar />
      <Chatroom />
    </div>
  );
}
