import * as React from 'react';

import BottomBar from '@/components/heroSection/BottomBar';
import LeftSideBar from '@/components/heroSection/LeftSideBar';
import NavBar from '@/components/heroSection/NavBar';
import RightSideBar from '@/components/heroSection/RightSideBar';
export default function HomePage() {
  return (
    <div className=''>
      <NavBar />
      <div className='flex flex-row'>
        <div className='hidden w-3/12 bg-[#121417] md:block '>
          <LeftSideBar />
        </div>
        <div className='w-full'>Posts</div>
        <div className='hidden w-6/12 bg-[#121417] lg:block'>
          <RightSideBar />
        </div>
      </div>
      <div className='block md:hidden'>
        <BottomBar />
      </div>
    </div>
  );
}
