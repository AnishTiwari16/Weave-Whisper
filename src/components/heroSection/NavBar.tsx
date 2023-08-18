import { OrganizationSwitcher, SignedIn, SignOutButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Image from 'next/image';
import React from 'react';
const NavBar = () => {
  return (
    <nav className='flex h-[10vh] justify-between bg-[#121417] p-5 text-white'>
      <div className='my-auto flex'>
        <Image src='/assets/logo.svg' alt='logo' width={28} height={28} />
        <div className='hidden pl-3 text-2xl font-bold md:block'>Weave</div>
      </div>
      <div className='my-auto flex'>
        <SignedIn>
          <SignOutButton>
            <div className='my-auto block cursor-pointer pr-4 md:hidden'>
              <Image
                src='/assets/logout.svg'
                alt='logout'
                height={24}
                width={24}
              />
            </div>
          </SignOutButton>
        </SignedIn>

        <OrganizationSwitcher appearance={{ baseTheme: dark }} />
      </div>
    </nav>
  );
};

export default NavBar;
