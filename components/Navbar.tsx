import { Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import logo from 'public/logo-landscape.svg';
import menuIcon from 'public/menu-icon.svg';
import closeIcon from 'public/close-icon.svg';

const navigation = [
  {
    content: 'Roald Dahl Stories',
    href: '/',
    color: 'red'
  },
  {
    content: 'About Roald Dahl',
    href: '/',
    color: 'green'
  },
  {
    content: 'Teacher Resources',
    href: '/',
    color: 'yellow'
  },
  {
    content: 'Museum',
    href: '/',
    color: 'purple'
  },
  {
    content: 'Charity',
    href: '/',
    color: 'blue'
  }
];

function Navbar() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="relative h-19 min-h-full shadow-lg md:h-44">
            <nav className="mx-auto flex h-full max-w-8xl items-center justify-between md:flex-col">
              <div className="py-2 px-5 md:p-8">
                <div className="relative h-[20px] w-[138px] md:h-[60px] md:w-[400px]">
                  <Link href="/">
                    <Image
                      alt="Roald Dahl Story Company Logo"
                      layout="fill"
                      src={logo}
                    />
                  </Link>
                </div>
              </div>

              <ul className="hidden h-11 gap-6 pb-2 md:flex">
                {navigation.map(({ content, href, color }) => {
                  const style = clsx(
                    `relative flex h-11 items-center justify-center border-b-3 border-solid p-2 font-futura text-sm font-medium hover:border-transparent hover:text-white hover:rounded`,
                    {
                      'border-red hover:bg-red': color === 'red',
                      'border-green hover:bg-green': color === 'green',
                      'border-yellow hover:bg-yellow': color === 'yellow',
                      'border-purple hover:bg-purple': color === 'purple',
                      'border-blue hover:bg-blue': color === 'blue'
                    }
                  );

                  return (
                    <li key={content}>
                      <Link href={href}>
                        <a className={style}>{content}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="absolute inset-y-0 right-3 flex items-center md:hidden">
                <Disclosure.Button className="hover:bg-gray-700 inline-flex items-center justify-center rounded-md p-2 text-yellow hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Image
                      alt="Close Icon"
                      className="block h-6 w-6"
                      aria-hidden="true"
                      src={closeIcon}
                    />
                  ) : (
                    <Image
                      alt="Open Icon"
                      className="block h-6 w-6"
                      aria-hidden="true"
                      src={menuIcon}
                    />
                  )}
                </Disclosure.Button>
              </div>
            </nav>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map(({ content, href, color }) => (
                <Disclosure.Button key={content} as={Link} href={href}>
                  <a aria-current={true ? 'page' : undefined}>{content}</a>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export { Navbar };
