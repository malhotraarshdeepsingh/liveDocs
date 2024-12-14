import Image from 'next/image'
import Link from 'next/link'
import React, { Children } from 'react'

function Header({ children }: HeaderProps) {
  return (
    <div className="header flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image 
          src="/assets/icons/logo.svg"
          alt="Logo"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image 
          src="/assets/icons/logo-icon.svg"
          alt="Logo-icon"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>

      <div className="flex items-center">
        {children}
      </div>
    </div>
  )
}

export default Header
