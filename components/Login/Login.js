import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { loginHelper } from '../Helpers/functions';
import { GoogleIcon } from './GoogleIcon';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { loginWithGoogle } = useAuth();
  const router = useRouter();

  async function googleLoginHandler(e) {
    e.preventDefault();
    await loginHelper(setLoading, setError, loginWithGoogle, router);
  }

  return (
    <div className='text-center w-[60%] m-auto absolute top-[7%] left-[20%] bg-gray-700 text-white rounded-md p-[16px] shadow-2xl'>
      {error && <div className='bg-red-500 text-white text-xl'>{error}</div>}
      <div className='relative flex flex-col text-center p-4'>
        <h2 className='text-2xl font-bold text-gray-500 underline mb-5'>
          Welcome traveller, To a new world
        </h2>
        <div className='bg-gray-800 h-24 md:h-16'>
          <button
            className='text-gray-400 text-md sm:text-xl p-3 hover:underline'
            onClick={googleLoginHandler}
          >
            <GoogleIcon />
            Login with Google
          </button>
        </div>
        <br />
        <div className='bg-gray-800 text-xl p-3 hover:underline text-blue-600'>
          <Link href='/'>Return to Home page</Link>
        </div>
        {loading && (
          <div className=' flex justify-center items-center'>
            <div className='animate-spin rounded-full h-12 w-12 mt-2 border-b-2 border-white'></div>
          </div>
        )}
      </div>
    </div>
  );
};
