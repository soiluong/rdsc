import Link, { LinkProps } from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import logo from 'public/logo-landscape.svg';

const siteLinks = [
  {
    content: 'Contact',
    href: '/'
  },
  {
    content: 'Privacy Policy',
    href: '/'
  },
  {
    content: 'Cookie Policy',
    href: '/'
  },
  {
    content: 'T&Cs',
    href: '/'
  },
  {
    content: 'Acceptable Use Policy',
    href: '/'
  },
  {
    content: 'Terms of Use',
    href: '/'
  },
  {
    content: 'Accessibility',
    href: '/'
  },
  {
    content: 'Sale of Ticket Terms',
    href: '/'
  }
];

const others = [
  {
    content: 'Roald Dahl Stories',
    href: '/'
  },
  {
    content: 'About Roald Dahl',
    href: '/'
  },
  {
    content: 'RoaldDahl Summer Adventures',
    href: '/'
  },
  {
    content: 'Teacher Resources',
    href: '/'
  },
  {
    content: 'RoaldDahl Museum',
    href: '/'
  },
  {
    content: 'RoaldDahl Charity',
    href: '/'
  }
];

function NavLink({ children, href }: LinkProps & { children: ReactNode }) {
  return (
    <Link href={href}>
      <a className="font-futura text-sm">{children}</a>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-6.5xl border-t-5 border-yellow">
        <div className="grid grid-cols-8 grid-rows-1 gap-6 py-18">
          <div className="col-span-4 row-span-1">
            <div className="relative h-[20px] w-[138px] md:h-[31px] md:w-[207px]">
              <Link href="/">
                <Image
                  alt="Roald Dahl Story Company Logo"
                  layout="fill"
                  src={logo}
                />
              </Link>
            </div>

            <p className="mt-9 font-futura text-sm text-p2">
              {`©2022 The Roald Dahl Story Company Ltd / Quentin Blake.CHARLIE AND THE CHOCOLATE FACTORY ™ Warner Bros. Ent.`}
            </p>

            <p className="mt-2 font-futura text-sm">
              {`The Roald Dahl Story Company Limited is a company registered in England and Wales with company number 11099347, whose registered office is at 100 New Bridge Street, London, EC4V 6JA`}
            </p>
          </div>

          <div className="col-span-2 row-span-1">
            <ul className="flex flex-col gap-2">
              {siteLinks.map(({ content, href }) => (
                <li key={content}>
                  <NavLink href={href}>{content}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 row-span-1">
            <ul className="flex flex-col gap-2">
              {others.map(({ content, href }) => (
                <li key={content}>
                  <NavLink href={href}>{content}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
