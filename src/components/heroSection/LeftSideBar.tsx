'use client';
import { SignedIn, SignOutButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { sidebarLinks } from '@/config/sidebarLinks';
const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <div className='flex h-[90vh] flex-col gap-6 px-5 py-10'>
      {sidebarLinks.map((elem, index) => {
        const isActive = pathname === elem.route;
        return (
          <Link
            href={elem.route}
            className={`${
              isActive && 'rounded-lg bg-[#877EFF]'
            } flex cursor-pointer px-6 py-3`}
            key={index}
          >
            <Image
              src={elem.logo}
              alt='sidebar-links'
              height={25}
              width={25}
              className='lg:mr-5'
            />
            <p className='hidden text-sm md:text-base lg:block'>{elem.name}</p>
          </Link>
        );
      })}
      <div className='cursor-pointer px-6 py-3'>
        <SignedIn>
          <SignOutButton>
            <div className='absolute bottom-10 flex'>
              <Image
                src='/assets/logout.svg'
                alt='logout'
                height={25}
                width={25}
                className='mr-5'
              />
              <p className='hidden text-sm md:text-base lg:block'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default LeftSideBar;
