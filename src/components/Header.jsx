"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {MdEmail} from "react-icons/md";

const Header = () => {
  return (
    <div className='w-full bg-white px-10 py-5 z-[999] flex md:justify-between justify-center items-center'>
        <Link href={"/"}>
            <button>
                <Image src={"/images/logo.svg"} width={"150"} height={"150"} alt='' />
            </button>
        </Link>
        <button className='text-[#ff6a00] text-4xl font-bold rounded-md md:block hidden'>
          <a href="mailto: teamscreentechnicals@gmail.com">
              <MdEmail />
            </a>
        </button>
    </div>
  )
}

export default Header