'use client'

import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
import logo_white from '@/public/logo_white.svg'
import { ModeToggle } from '@/components/modeToogle'
import google from '@/public/google.png'


const Header = () => {

  const handleClick = () => {

  }

  return (
    <header className='h-16 w-full fixed z-50 top-0 left-0 backdrop-blur-md px-4'>
        <div className='flex justify-between items-center h-full w-full'>
            <Image className='dark:hidden' height={40} src={logo} alt='QuizLM'/>
            <Image className='dark:block hidden' height={40} src={logo_white} alt='QuizLM'/>
            <div className='flex gap-4 items-center'>
                <ModeToggle/>
                <div onClick={handleClick} className='relative w-9 h-9 border border-foreground rounded-full cursor-pointer'>
                    <Image src={google} alt="profile image" className='object-cover rounded-full' fill sizes='64px'/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header