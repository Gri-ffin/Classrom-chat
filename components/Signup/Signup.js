import Link from 'next/link';
import { useRef, useState } from 'react';
import { Card } from '../UI/Card';
import { useAuth } from '../context/AuthContext';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../Helpers/firebase';
import { validateEmail } from '../Helpers/functions';
import { useRouter } from 'next/router';

const auth = getAuth();

export const Signup = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      emailRef.current.value.length <= 0 ||
      !validateEmail(emailRef.current.value)
    ) {
      setError('Enter a valid email');
      return;
    }
    if (usernameRef.current.value.length <= 0) {
      setError('Enter a valid username');
      return;
    }
    if (passwordRef.current.value.length <= 5) {
      setError('password must be 6 characters or more!');
      return;
    }
    try {
      setLoading(true);
      setError('');
      await signup(emailRef.current.value, passwordRef.current.value);
      await updateProfile(auth.currentUser, {
        displayName: usernameRef.current.value,
      });
      router.push('/chat');
    } catch (e) {
      setError(e.code.split('/')[1]);
    }
    setLoading(false);
    emailRef.current.value = '';
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <Card>
      <h2 className='font-bold text-2xl mr-6'>Create an account</h2>
      <div className='bg-red-400 text-red-700'>{error}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email' className='block text-gray-400 text-left ml-10'>
          EMAIL
        </label>
        <input
          type='email'
          id='email'
          className='block my-3 bg-gray-800 py-1 w-[80%] ml-10 pl-2'
          ref={emailRef}
        />

        <label
          htmlFor='username'
          className='block text-gray-400 text-left ml-10'
        >
          USERNAME
        </label>
        <input
          type='text'
          id='username'
          className='block my-3 bg-gray-800 py-1 w-[80%] ml-10 pl-2'
          ref={usernameRef}
        />

        <label
          htmlFor='password'
          className='block text-gray-400 text-left ml-10'
        >
          PASSWORD
        </label>
        <input
          type='password'
          id='password'
          className='block my-3 bg-gray-800 py-1 w-[80%] ml-10 pl-2'
          ref={passwordRef}
        />

        <button
          disabled={loading}
          className='block ml-11 p-2 mt-6 bg-blue-600 w-[80%] hover:bg-blue-800 mb-2 disabled:opacity-75 disabled:cursor-not-allowed'
        >
          {!loading ? 'Continue' : 'Loading...'}
        </button>
      </form>
      <Link href='/login'>
        <a className='block text-left ml-11 text-blue-500 hover:underline'>
          Already have an account?
        </a>
      </Link>
    </Card>
  );
};
