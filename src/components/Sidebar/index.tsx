/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from '@heroicons/react/outline';

import React from 'react';

export interface SidebarProps {}
const SideBar: React.FC<SidebarProps> = () => {
  return (
    <div className='border-r border-gray-900 p-5 text-sm text-gray-500'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 transition-all duration-100 hover:text-white'>
          <HomeIcon className='h-5 w-5' />
          <p>Home </p>
        </button>
        <button className='flex items-center space-x-2 transition-all duration-100 hover:text-white'>
          <SearchIcon className='h-5 w-5' />
          <p>Search </p>
        </button>
        <button className='flex items-center space-x-2 transition-all duration-100 hover:text-white'>
          <LibraryIcon className='h-5 w-5' />
          <p>Your Library </p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />
        <button className='flex items-center space-x-2 transition-all duration-100 hover:text-white'>
          <PlusCircleIcon className='h-5 w-5' />
          <p>Create Playlist </p>
        </button>

        <button className='flex items-center space-x-2 transition-all duration-100 hover:text-white'>
          <HeartIcon className='h-5 w-5' />
          <p>Liked Songs </p>
        </button>
        <button className='flex items-center space-x-2 transition-all duration-100 hover:text-white'>
          <RssIcon className='h-5 w-5' />
          <p>Your Episodes </p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />
        <p className='cursor-pointer hover:text-white'>Playlist name</p>
        <p className='cursor-pointer hover:text-white'>Playlist name</p>

        <p className='cursor-pointer hover:text-white'>Playlist name</p>

        <p className='cursor-pointer hover:text-white'>Playlist name</p>

        <p className='cursor-pointer hover:text-white'>Playlist name</p>

        <p className='cursor-pointer hover:text-white'>Playlist name</p>
      </div>
    </div>
  );
};

export default SideBar;
