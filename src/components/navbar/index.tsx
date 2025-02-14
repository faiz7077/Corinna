import Image from 'next/image'
import * as React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import ContactUs from '@/components/contactus';


function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: '100px',
            height: 'auto',
          }}
          width={0}
          height={0}
        />
      </div>
      <ul className="gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <li><a href="/">Home</a></li>
        <li><a href="/integration">Pricing</a></li>
        <li><a href="/blogs/7">News Room</a></li>
        <li><a href="/dashboard">Features</a></li>
        <li><a href="/">Contact us</a></li>
      </ul>
      <Link
        href="/dashboard"
        className="bg-orange px-4 py-2 rounded-sm text-white"
      >
        Free Trial
      </Link>
      {/* <Button
                  size={'sm'}
                  className="p-8 mb-8 md:mb-0 text-lg w-full sm:w-fit 
                  border-t-2  bg-orange/100 
                  hover:bg-white group transition-all flex items-center justify-center 
                  gap-4 hover:shadow-l hover:shadow-neutral-500 duration-100"
          >

            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                  <a href='/dashboard'>Free Trial</a>
            </span>
        </Button> */}
    </div>
  )
}

export default NavBar
