"use clinet";

import Header from '@/components/Header'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        {/* <head /> */}
     
      <head />
      <body className='overflow-x-hidden'>

        <Header />
        <div>
          {children}
        </div>
        <footer className='w-full p-5 md:p-10 flex md:flex-row flex-col bg-[#000000] justify-between items-center'>
            <p className='text-white'>All Rights Reserved &copy; SOA FEST</p>
            <button className='text-[#ffffff] rounded-md'>
              <a href="mailto: soaunifest@gmail.com" className='flex items-center space-x-2'>
                  {/* <span>soaunifest@gmail.com</span> */}
                  <MdEmail className='text-4xl' />
                </a>
            </button>
        </footer>
      </body>
    </html>
  )
}
