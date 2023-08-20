import { currentUser } from '@clerk/nextjs';
import React from 'react';

import AccountProfile from '@/components/forms/AccountProfile';
const OnBoarding = async () => {
  const user = await currentUser(); //logged In user
  const userInfo = {}; // User info from DB
  const userData = {
    id: user?.id,
    objectId: userInfo?.id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || '',
    bio: userInfo?.bio || '',
    image: userInfo?.image || user?.imageUrl,
  };
  return (
    <div className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-16 md:py-20'>
      <h1 className='text-2xl font-bold md:text-4xl'>Onboarding</h1>
      <p className='py-4'>Complete your profile to use weave whisper</p>
      <div className='mt-4 bg-[#121417] p-10'>
        <AccountProfile user={userData} />
      </div>
    </div>
  );
};

export default OnBoarding;
