import React from 'react'
import Link from 'next/link';
import { DesktopNavbarProps } from '@/common/Interfaces/Interfaces'

const DesktopNavbar:React.FC<DesktopNavbarProps> = ({links}) => {
    return(
        <div className="hidden md:flex space-x-4">
        {links.map((link) => (
            <Link key={link.id} href={link.path} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary">
                {link.title}
            </Link>
        ))}
        </div>
    )
}

export default DesktopNavbar
