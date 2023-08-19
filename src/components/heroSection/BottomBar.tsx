'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { sidebarLinks } from '@/config/sidebarLinks';
const BottomBar = () => {
  const pathname = usePathname();
  return (
    <div className='bottom-container'>
      {sidebarLinks.map((elem, index) => {
        const isActive = pathname === elem.route;
        return (
          <Link
            href={elem.route}
            className={`${
              isActive && 'rounded-lg bg-[#877EFF]'
            }  cursor-pointer px-3 py-2 sm:px-6`}
            key={index}
          >
            <Image
              src={elem.logo}
              alt='sidebar-links'
              height={20}
              width={20}
              className='mx-auto'
            />
            <p className='hidden pt-1 text-sm sm:block md:text-base'>
              {elem.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
