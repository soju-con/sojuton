"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const NavLinkItems = [
  {
    name: "Schedule",
    href: "#schedule",
  },
  {
    name: "Location",
    href: "#location",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, searchParams]);

  return (
    <header className="font-black">
      <div className="navbar bg-base-100 fixed top-0 z-40">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-2xl text-primary"
          >
            소주톤
          </Link>
        </div>
        <nav className="flex-none hidden sm:block">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {NavLinkItems.map(({ name, href }) => (
              <li key={href}>
                <Link href={href} className="font-semibold">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="btn sm:hidden" onClick={toggleMenu}>
          <Menu />
        </button>
      </div>
      <div className="sm:hidden">
        <nav
          className={`fixed left-0 right-0 z-30 bg-base-100 transition-all py-2 ${
            isMenuOpen ? "top-16" : "-top-full"
          }`}
        >
          <ul className="menu menu-horizontal px-1 flex flex-col gap-4 items-center">
            {NavLinkItems.map(({ name, href }) => (
              <li key={href}>
                <Link href={href} className="font-semibold text-xl">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {isMenuOpen ? (
          <div
            className="fixed inset-0 bg-transparent z-20"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : null}
      </div>
    </header>
  );
};

export default Header;
