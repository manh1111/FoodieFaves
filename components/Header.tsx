'use client';

import { images } from '@public/assets/images';
import { Facebook, Github, Instagram, Mail, Phone, Twitter } from '@public/assets/icons/icons';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Header: React.FC = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<string, any> | null>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const contactInfo: { phone: string; email: string } = {
    phone: '(+84)974 6374 10',
    email: 'minhanh746347@gmail.com',
  };

  const socialIcons: { icon: JSX.Element; name: string; parentClass: string }[] = [
    { icon: <Twitter width="18" height="18" />, name: 'Twitter', parentClass: 'twitter-icon pl-1 pt-2' },
    { icon: <Facebook width="18" height="18" />, name: 'Facebook', parentClass: 'facebook-icon pl-2' },
    { icon: <Instagram width="18" height="18" />, name: 'Instagram', parentClass: 'instagram-icon pl-0.5' },
    { icon: <Github width="18" height="18" />, name: 'Github', parentClass: 'github-icon pl-0.5 pt-0.5' },
  ];

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/menu', label: 'Menu' },
    { href: '/pages', label: 'Pages' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <section className="w-full fixed z-40">
      <div className="contact padding_content bg-[--color-primary] py-2">
        <div className="w-full flex justify-between">
          <div className="info box-content">
            <div className="call box-content">
              <Phone width="18" height="18" className="mr-1 mt-1" />
              <p>{contactInfo.phone}</p>
            </div>
            <div className="mail box-content">
              <Mail width="18" height="18" className="mr-1 mt-1" />
              <p>{contactInfo.email}</p>
            </div>
          </div>

          <div className="social flex flex-row">
            {socialIcons.map((social, index) => (
              <div className={`border_icon bg-[#F9F9F7]/[.12]  ${social.parentClass}`} key={index}>
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="nav flex padding_content bg-white">
        <div className="logo flex items-center justify-center">
          <Link href="/" className="flex flex-center">
            <Image
              className="object-contain"
              priority={true}
              src={images.logo}
              width={80}
              height={80}
              alt="FoodieFaves Logo"
            />
            <p className="font_playfair text-2xl font-semibold">Foodie Faves</p>
          </Link>
        </div>

        <div className="menu flex grow shrink justify-center gap-3">
          {menuItems.map((menuItem, index) => (
            <Link key={index} href={menuItem.href} className="primary_btn">
              {menuItem.label}
            </Link>
          ))}
        </div>

        <div className="action flex-none ">
          {session?.user ? (
            <div className="flex flex gap-3 md:gap-5">
              <Link href="/booking" className="outline_btn">
                Book A Table
              </Link>
              <button type="button" onClick={() => signOut()} className="black_btn">
                Sign Out
              </button>
              <Image src={session?.user.image || ''} width={46} height={46} className="rounded-full" alt="profile" />
            </div>
          ) : (
            <div className="relative">
              <button onClick={() => setToggleDropdown(!toggleDropdown)} className="black_btn">
                Sign In
              </button>

              {toggleDropdown && (
                <div
                  className={`submenu ${
                    toggleDropdown ? 'block' : 'hidden'
                  } absolute mt-3 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  {providers &&
                    Object.values(providers).map((provider: any) => (
                      <button
                        type="button"
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className="w-full flex flex-row rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-icon="google"
                          className="ml-2 w-8"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 488 512"
                        >
                          <path
                            fill="red"
                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                          ></path>
                        </svg>
                        <span>Sign In With Google</span>
                      </button>
                    ))}
                  <hr />
                  <button
                    type="button"
                    onClick={() => {}}
                    className="block w-full rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Continue As Admin
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
