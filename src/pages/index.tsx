import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import SideBar from '@/components/Sidebar';
import UnderlineLink from '@/components/links/UnderlineLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className=''>
        <SideBar />
      </main>
      <footer className='absolute bottom-2 text-gray-700'>
        © {new Date().getFullYear()} By{' '}
        <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
          Akashdeep Patra
        </UnderlineLink>
      </footer>
    </Layout>
  );
}
