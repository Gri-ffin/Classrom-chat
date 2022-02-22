import { getAuth } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import app from '../Helpers/firebase';

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  async function formSubmitHandler(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
      // TODO: Change this to redirect to server
      router.push('/');
    } catch (e) {
      setError(e.code.split('/')[1]);
    }
    setLoading(false);
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <div className='text-center w-[60%] m-auto absolute top-[150px] left-[20%] bg-gray-700 text-white rounded-md p-[16px] shadow-2xl'>
      <div className='relative flex flex-row text-center p-4'>
        <div className='px-5 w-[300%]'>
          <h2 className='font-bold text-2xl pr-24'>Hey, You&apos;re back !</h2>
          <p className='text-gray-400 pt-2 pr-24'>
            We are very happy to see you again !
          </p>
          <div className='bg-red-400 text-red-700 w-[83%]'>{error}</div>
          <form onSubmit={formSubmitHandler}>
            <label htmlFor='email' className='block text-gray-300 text-left'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='block my-3 bg-gray-800 py-1 w-[83%] rounded-sm'
              ref={emailRef}
            />
            <label htmlFor='password' className='block text-gray-300 text-left'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='block mt-3 bg-gray-800 py-1 w-[83%] rounded-sm'
              ref={passwordRef}
            />
            <p className='text-blue-500 text-left text-sm hover:underline hover:cursor-pointer'>
              Forgot your own password?
            </p>
            <button
              disabled={loading}
              className='block p-2 mt-4 bg-blue-600 w-[83%] hover:bg-blue-800 mb-2 rounded-smdisabled:opacity-75 disabled:cursor-not-allowed'
            >
              {!loading ? 'Connect' : 'Loading...'}
            </button>
            <p className='text-left text-sm text-gray-500'>
              Need an account?
              <Link href='/register'>
                <a className='text-blue-500 hover:underline'>Register</a>
              </Link>
            </p>
          </form>
        </div>
        <div className='pr-12'>
          <Image
            src='/assets/qr_code.png'
            alt='Qr code'
            width={700}
            height={700}
          />
          <h2 className='font-bold text-2xl'>Connect with a qr code</h2>
          <p className='text-gray-400'>
            Scan it with
            <span className='text-gray-300'> the mobile application</span> to
            instantly connect.
          </p>
        </div>
      </div>
    </div>
  );
};
