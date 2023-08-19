import React from 'react';

import AccountProfile from '@/components/forms/AccountProfile';
const OnBoarding = () => {
  return (
    <div className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
      <h1 className='text-2xl font-bold md:text-4xl'>Onboarding</h1>
      <p className='py-4'>Complete your profile to use weave whisper</p>
      <div className='mt-4 bg-[#121417] p-10'>
        <AccountProfile />
      </div>
    </div>
  );
};

export default OnBoarding;
