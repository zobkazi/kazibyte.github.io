'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileHeader from './MobileHeader';




const NavbarMenuData = [
 
  {
    title: 'Services',
    href: '/services',
    sublinks: [
      {
        title: 'Full-Stack',
        href: '/services/full-stack',
      },
      {
        title: 'API Development',
        href: '/services/api-integration',
      },
      {
        title: 'Website Design',
        href: '/services/website-design',
      },
      {
        title: 'Case Studies',
        href: '/services/case-studies',
      }
    ]
  },
   {
    title: 'Company',
    href: '/company',
    sublinks: [
      {
        title: 'About-us',
        href: '/company/about-us',
      },
      {
        title: 'Blog',
        href: '/company/blog',
      },
      {
        title: 'Portfolio',
        href: '/company/portfolio',
      },
      {
        title: 'Why Choose Us',
        href: '/company/why-choose-us',
      },
    ]
  },
  {
    title: 'Login',
    href: '/login',
    sublinks: [
      {
        title: 'Login',
        href: '/login',
      },
      {
        title: 'Register',
        href: '/register',
      },
    ]
  }
];


const bodyData = {
  title: 'Kazibyte',
  body: 'Software Development Company'
}



const Navbar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleMenuHover = (index: number | null) => {
    setOpenMenuIndex(index);
  };

  const handleCloseMenu = () => {
    setOpenMenuIndex(null);
  };

  return (
    <div>
        <div>
        <nav className=" bg-white top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
       
       
            </div>
           <Link href="/">
                  <h1 className='text-3xl font-bold'>{ bodyData.title }</h1>
           </Link>
            <div className="space-x-4 hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4 uppercase font-bold">

                {NavbarMenuData.map((item, index) => (
                  <div key={index} className="relative">
                    <Link
                      href={item.href}
                      className="text-blue-300 hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-medium"
                      onMouseEnter={() => handleMenuHover(index)}
                      onMouseLeave={handleCloseMenu}
                    >
                      {item.title}
                    </Link>
                    {item.sublinks && openMenuIndex === index && (
                      <div
                        className="absolute z-10 mt-2 w-48 bg-white shadow-lg origin-top-right rounded-md"
                        onMouseEnter={() => handleMenuHover(index)}
                        onMouseLeave={handleCloseMenu} 
                      >
                        <div className="py-1">
                          {item.sublinks.map((sublink, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sublink.href}
                              className="text-blue-300 block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {sublink.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
           
            </div>
       
          </div>
         <MobileHeader />
        </div>
      </div>
    </nav>
        </div>
    </div>
  );
};

export default Navbar;
