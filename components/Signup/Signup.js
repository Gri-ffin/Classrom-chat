import Link from 'next/link';
import { Card } from '../UI/Card';

export const Signup = () => {
  return (
    <Card>
      <h2 className='font-bold text-2xl mr-6'>Create an account</h2>

      <label htmlFor='email' className='block text-gray-400 text-left ml-10'>
        EMAIL
      </label>
      <input
        type='email'
        id='email'
        className='block my-3 bg-gray-800 py-1 w-[80%] ml-10 pl-2'
      />

      <label htmlFor='username' className='block text-gray-400 text-left ml-10'>
        USERNAME
      </label>
      <input
        type='text'
        id='username'
        className='block my-3 bg-gray-800 py-1 w-[80%] ml-10 pl-2'
      />

      <label htmlFor='password' className='block text-gray-400 text-left ml-10'>
        PASSWORD
      </label>
      <input
        type='password'
        id='password'
        className='block my-3 bg-gray-800 py-1 w-[80%] ml-10 pl-2'
      />

      <button className='block ml-11 p-2 mt-6 bg-blue-600 w-[80%] hover:bg-blue-800 mb-2'>
        Continue
      </button>
      <Link href='/login'>
        <a className='block text-left ml-11 text-blue-500 hover:underline'>
          Already have an account?
        </a>
      </Link>
    </Card>
  );
};
