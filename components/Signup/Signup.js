import Link from 'next/link';
import { useRef, useState } from 'react';
import { Card } from '../UI/Card';
import { useAuth } from '../context/AuthContext';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../Helpers/firebase';

const auth = getAuth();

export const Signup = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      emailRef.current.value.length <= 0 ||
      usernameRef.current.value.length <= 0 ||
      passwordRef.current.value.length <= 0
    ) {
      return;
    }
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      await updateProfile(auth.currentUser, {
        displayName: usernameRef.current.value,
      });
    } catch (e) {
      alert(e);
    }
    setLoading(false);
    console.log(JSON.stringify(auth.currentUser));
  }

  return (
    <Card>
      <h2 className='font-bold text-2xl mr-6'>Create an account</h2>
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
