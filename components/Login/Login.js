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
  const { login, loginWithGoogle } = useAuth();
  const router = useRouter();

  async function formSubmitHandler(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
      router.push('/chat');
    } catch (e) {
      setError(e.code.split('/')[1]);
    }
    setLoading(false);
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }
  async function googleLoginHandler(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      await loginWithGoogle();
      router.push('/chat');
    } catch (e) {
      setError(e.code.split('/')[1]);
    }
    setLoading(false);
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
            <p className='text-gray-400 text-sm inline text-left mr-[80%]'>
              Or Login with
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='red'
                  className='bi bi-google hover:cursor-pointer inline-block ml-1'
                  viewBox='0 0 16 16'
                  onClick={googleLoginHandler}
                >
                  <path d='M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z' />
                </svg>
              </span>
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
