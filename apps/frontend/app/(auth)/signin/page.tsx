import { LoginForm } from '@/components/login-form'
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import logo from '@/public/logo.svg'
import logo_white from '@/public/logo_white.svg'

const Signin = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Image className='dark:hidden' height={40} src={logo} alt='QuizLM'/>
            <Image className='dark:block hidden' height={40} src={logo_white} alt='QuizLM'/>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block"/>
    </div>
  )
}

export default Signin