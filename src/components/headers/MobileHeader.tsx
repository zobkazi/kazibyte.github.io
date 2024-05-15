'use client'
import { useState } from 'react';
import Link from 'next/link';

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
        title: 'Website Development',
        href: '/services/website-development',
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




const MobileHeader = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between px-4 py-2">
        <button onClick={toggleMenu} className="text-2xl text-blue-300 focus:outline-none">
        ====
        </button>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full bg-white shadow-lg">
            <div className="px-4 py-2">
              {NavbarMenuData.map((item, index) => (
                <div key={index} className="py-2">
                  <Link href={item.href}>
                    <p onClick={closeMenu} className="text-blue-300 hover:text-blue-600">
                      {item.title}
                    </p>
                  </Link>
                  {item.sublinks && (
                    <ul className="pl-4">
                      {item.sublinks.map((sublink, subIndex) => (
                        <li key={subIndex}>
                          <Link href={sublink.href}>
                            <p onClick={closeMenu} className="text-blue-300 hover:text-blue-600">
                              {sublink.title}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileHeader;
