import React from 'react';
import Image from 'next/image';

export function Image404({}) {
  return (
    <div className='md:w-[40%]'>
      <Image
        src='/images/error404.gif'
        alt='Nelly serving noodles!'
        height={350}
        width={350}
      />
    </div>
  );
}
