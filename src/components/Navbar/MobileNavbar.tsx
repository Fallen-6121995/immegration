import React from 'react'
import Link from 'next/link';
import { MobileNavbarProps } from '@/common/Interfaces/Interfaces';

  const MobileNavbar: React.FC<MobileNavbarProps> = ({ links, isOpen, toggleMenu }) => {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
    {links.map((link) => (
      <Link key={link.id} href={link.path} legacyBehavior>
        <a onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">
          {link.title}
        </a>
      </Link>
    ))}
  </div>
  )
}

export default MobileNavbar
