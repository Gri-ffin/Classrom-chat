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
    <div className='text-center w-[60%] m-auto absolute top-[30%] left-[20%] bg-gray-700 text-white rounded-md p-[16px] shadow-2xl'>
      {error && <div className='bg-red-500 text-white text-xl'>{error}</div>}
      <div className='relative flex flex-col text-center p-4'>
        <h2 className='text-4xl font-bold text-gray-500 underline mb-5'>
          Welcome traveller, To a new world
        </h2>
        <div className='bg-gray-800 h-24 md:h-16'>
          <button
            className='text-gray-400 text-3xl p-3 hover:underline'
            onClick={googleLoginHandler}
          >
            <GoogleIcon />
            Login with Google
          </button>
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
