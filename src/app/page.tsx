'use client';

import { UserButton } from '@clerk/nextjs';
import * as React from 'react';
export default function HomePage() {
  return (
    <main>
      <section>
        <div className='text-white'>social</div>
      </section>
      <UserButton afterSignOutUrl='/' />
    </main>
  );
}
